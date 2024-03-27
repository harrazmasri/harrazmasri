<template>
    <div class="w-full flex justify-center border-t border-[hsl(0,0%,20%)]">
        <div class="w-full max-w-[1440px] pt-10 pb-[4rem] flex flex-row gap-2 justify-between items-center px-6 text-white">
            <div class="w-9/12 flex flex-row gap-4 justify-start items-start">
                <div class="flex flex-col items-start justify-start gap-1">
                    <h1 class="text-augeBlack tracking-tighter text-[1.6rem]">Modules</h1>
                    <p class="text-auge font-[700] text-[1rem]">About Me</p>
                    <p class="text-auge font-[700] text-[1rem]">Product</p>
                    <p class="text-auge font-[700] text-[1rem]">Gallery</p>
                    <p class="text-auge font-[700] text-[1rem]">Blog</p>
                    <p class="text-auge font-[700] text-[1rem]">Experiments</p>
                </div>
                <div class="flex flex-col items-start justify-start gap-1">
                    <h1 class="text-augeBlack tracking-tighter text-[1.6rem]">Social Media</h1>
                    <p class="text-auge font-[700] text-[1rem]">Youtube</p>
                    <p class="text-auge font-[700] text-[1rem]">Instagram</p>
                    <p class="text-auge font-[700] text-[1rem]">Linked In</p>
                </div>
                <div class="flex flex-col items-start justify-start gap-1">
                    <h1 class="text-augeBlack tracking-tighter text-[1.6rem]">Contact</h1>
                    <p class="text-auge font-[700] text-[1rem]">harrazmasri05@gmail.com</p>
                </div>
                <div class="flex flex-col items-start justify-start gap-1">
                    <h1 class="text-augeBlack tracking-tighter text-[1.6rem]">Categories</h1>
                    <p class="text-auge font-[700] text-[1rem]">All</p>
                    <p class="text-auge font-[700] text-[1rem]">General</p>
                    <p class="text-auge font-[700] text-[1rem]">Health</p>
                    <p class="text-auge font-[700] text-[1rem]">Lifestyle</p>
                    <p class="text-auge font-[700] text-[1rem]">Travel</p>
                </div>
            </div>
            <div class="w-3/12">
                <div class="flex flex-col items-start justify-start gap-1">
                    <h1 class="text-augeBlack tracking-tighter text-[1.6rem]">Account</h1>
                    <p class="text-auge font-[700] text-[1rem]">Personal Details</p>
                    <p class="text-auge font-[700] text-[1rem]">Inventory</p>
                    <p @click="clearSession" class="cursor-pointer text-auge font-[700] text-[1rem]">Logout</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const clearSession = () => {
   localStorage.removeItem('token');
} 
</script>