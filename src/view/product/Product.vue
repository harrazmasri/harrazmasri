<template> 
    <div class="w-full h-fit min-h-screen bg-black flex flex-col items-center font-auge text-white">
        <Header></Header>

        <div class="w-full max-w-[1440px] h-fit min-h-[calc(100vh-21.5rem)] grid grid-cols-4 gap-10 pt-[2.5rem] pb-[3rem] px-6">

            <div
                v-for="index in 10"
                class=""
                @click="$router.push('/product/view')"
            >
                <div class="bg-gray-500 w-full aspect-[4/3] mb-3"></div>
                <h1 class="text-xl tracking-tighter font-auge font-[700] mb-1">Title {{ index }}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mollis mi, sit amet hendrerit ex. Nullam eleifend feugiat pellentesque. Donec luctus eleifend maximus. Maecenas.</p>
            </div>

        </div>

        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
</script>