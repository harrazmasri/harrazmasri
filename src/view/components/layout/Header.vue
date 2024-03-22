<template>
    <div class="w-full pt-[2rem] pb-[1rem] px-[1.5rem] flex items-center justify-between bg-transparent border-b border-[rgb(50,50,50)]">
        <div class="w-1/3">
            <h1 class="text-white text-[2rem] font-augeExtraBlack tracking-tighter">harrazmasri.com{{ getUri() }}</h1>
        </div>
        <div class="w-1/3 flex justify-center">
            <input type="text" class="w-full px-3 bg-transparent border-b border-white ring-0 outline-none text-white text-lg pb-[.5rem]" placeholder="search something...">
        </div>
        <div class="w-1/3 flex justify-end">
            <Icon @click="$router.push('/')" icon="material-symbols-light:home-outline" class="hover:cursor-pointer text-white text-4xl" />
        </div>
    </div>
</template>

<script setup lang="ts">
const getUri = () => {
    return window.location.pathname;
}
</script>