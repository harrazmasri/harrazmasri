<template>
    <div class="w-full flex lg:flex-row md:flex-row sm:flex-col pt-[2rem] pb-[1rem] px-[1.5rem] items-center justify-between bg-transparent border-b border-[rgb(50,50,50)]">
        <div class="lg:w-1/3 md:w-1/3 sm:w-full lg:mb-0 md:mb-0 sm:mb-5 lg:mt-0 md:mt-0 sm:mt-5">
            <h1 class="text-white lg:text-[2rem] md:text-[2rem] sm:text-[1.5rem] lg:text-start md:text-start sm:text-center font-augeExtraBlack tracking-tighter">harrazmasri.com{{ getUri() }}</h1>
        </div>
        <div class="flex lg:w-2/3 md:w-2/3 sm:w-full">
            <div class="w-1/2 flex lg:justify-center md:justify-center sm:justify-start">
                <Icon @click="$router.push('/')" icon="material-symbols-light:home-outline" class="hover:cursor-pointer text-white text-4xl me-5" />
                <!-- <input type="text" class="w-full px-3 bg-transparent border-b border-white ring-0 outline-none text-white text-lg pb-[.5rem]" placeholder="search something..."> -->
            </div>
            <div class="w-1/2 flex justify-end items-center">
                <div class="me-3">
                    <GoogleLogin v-if="!authenticatedUserData" :callback="callback" auto-login />
                    <div class="relative w-fit group" v-else>
                        <div class="flex items-center py-2 px-4 hover:bg-[rgb(20,20,20)] rounded cursor-pointer justify-start gap-3 ">
                            <p>{{ authenticatedUserData.username }}</p>
                            <img :src="authenticatedUserData.profile_photo" class="w-[1.8rem] h-[1.8rem] object-cover rounded-full" alt="">
                        </div>
                        <div class="hidden absolute w-full group-hover:block">
                            <div class="rounded group border border-[rgb(70,70,70)] right-0 mt-2 bg-black">
                                <button @click="settingModalActive=!settingModalActive" class="text-sm hover:bg-[rgb(20,20,20)] border-b border-[rgb(70,70,70)] flex py-2 px-4 items-center justify-start w-full gap-2"><Icon icon="mdi:person" /> Profile</button>
                                <button @click="clearSession" class="text-sm hover:bg-[rgb(20,20,20)] flex py-2 px-4 items-center justify-start w-full gap-2"><Icon icon="mdi:logout" /> Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Transition
        enter-from-class="opacity-0"
        enter-active-class="transition duration-500"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-active-class="transition duration-500"
        leave-to-class="opacity-0"
    >
        <UserProfile v-if="settingModalActive" @closeModal="closeModal"></UserProfile>
    </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UserProfile from '../UserProfile.vue';
import axios from 'axios';
import { decodeCredential } from 'vue3-google-login';

interface AuthenticatedUser {
    username: string,
    profile_photo: string,
}
const authenticatedUserData = ref<AuthenticatedUser | null>(null);
// const authenticatedUserData = ref(null);
const settingModalActive = ref(false);

onMounted(() => {
    
    if (localStorage.getItem('token') != null) {
        checkSession();
    }

});

const closeModal = (data: boolean) => {
    settingModalActive.value = data;
}

const getUri = () => {
    return window.location.pathname;
}

const callback = (response: { credential: string }) => {
    const authCred = response;
    interface UserDetails {
        sub: string;
        name: string;
        email: string;
        picture: string;
    }
    const userDetails = decodeCredential(response.credential) as UserDetails;
    // const userDetails = decodeCredential(response.credential);
    // const JWTtoken = response.credential;
    console.log(authCred, userDetails);

    axios.post('http://127.0.0.1:8000/api/auth/google/login', {
        credential: authCred.credential,
        google_id: userDetails.sub,
        full_name: userDetails.name,
        email: userDetails.email,
        profile_photo: userDetails.picture,
    })
    .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        checkSession();
    })
    .catch((err) => {
        console.error(err);
    });
}

const clearSession = () => {
   localStorage.removeItem('token');
    authenticatedUserData.value = null;
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
    })
    .catch((err) => {
        console.error(err);
    });
}

</script>