<template>
    <div class="bg-[rgba(30,30,30,.5)] w-screen h-screen fixed top-0 z-10 flex items-center justify-center">
        <div class="bg-black w-[60vw] aspect-[4/3] border rounded-md">
            <div class="w-full flex justify-between items-center pt-5 pb-4 px-8 border-b border-gray-600">
                <h1 class="text-white text-xl">Settings</h1>
                <button @click="closeModal">
                    <Icon icon="mdi:close" class="text-lg" />
                </button>
            </div>
            <div class="flex">
                <div class="w-1/4 flex flex-col">
                    <button class="px-8 py-2 bg-[rgb(20,20,20)] flex items-center gap-2"><Icon icon="mdi:person" /> Profile</button>
                    <button disabled class="px-8 py-2 opacity-50 flex items-center gap-2"><Icon icon="mdi:gear" /> System</button>
                </div>
                <div class="w-3/4 px-8 py-4">
                    <div class="mb-3 w-full">
                        <p class="text-sm mb-1 text-gray-200">Username</p>
                        <input class="border bg-black rounded py-2 px-3 w-[20rem] text-sm" v-model="profileData.username" />
                    </div>
                    <div class="mb-3 w-full">
                        <p class="text-sm mb-1 text-gray-200">Logout</p>
                        <button @click="clearSession" class="border bg-black hover:bg-[rgb(20,20,20)] transition-colors rounded py-2 px-3 w-[20rem] text-sm flex gap-3 items-center justify-center"><Icon icon="mdi:logout" /> Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { ref, onMounted, defineEmits } from 'vue';
import axios from 'axios';

const authenticatedUserData = ref(null);
const emit = defineEmits();

const profileData = ref({
    username: '',
});

onMounted(() => {
    
    if (localStorage.getItem('token') != null) {
        checkSession();
    }

});

const closeModal = () => {
    emit('closeModal', false);
}

const checkSession = () => {
    const token = localStorage.getItem('token');
    axios.get('http://127.0.0.1:8000/api/auth/google/session', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`
        }
    }).then((res) => {
        console.log(res.data);
        authenticatedUserData.value = res.data;
        profileData.value.username = authenticatedUserData.value.username;
    })
    .catch((err) => {
        console.error(err);
    });
}

const clearSession = () => {
   localStorage.removeItem('token');
    authenticatedUserData.value = null;
} 
</script>