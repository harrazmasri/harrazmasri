<template>
    <div class="bg-[#000] w-full h-full min-h-screen flex flex-col items-center">
        <div class="w-full flex flex-row">
            <div class="w-full min-h-[calc(100vh-17.9rem)] pt-[3rem] px-6 flex flex-col items-center gap-10">
                <div class="w-full">
                    <button @click="$router.push('/product')" class="text-[#fff] flex items-center justify-start gap-1">
                        <Icon icon="material-symbols-light:chevron-left" class="text-[2.5rem]" />
                        <p>Back</p>
                    </button>
                </div>
    
                <div class="w-full flex flex-row">
                    <div class="w-8/12 border-r border-[rgb(50,50,50)] pl-[1rem] pr-[2.5rem] pb-[2.3rem]">
                        <div class="w-full flex flex-row justify-between items-end gap-1 mb-7">
                           <div class="flex flex-row gap-1"><p class="text-[rgb(180,180,180)] text-base"><Icon icon="mdi:account" /> </p><span class="text-white text-md leading-4">Harraz Masri</span></div>
                           <div class="flex flex-row gap-1"><p class="text-[rgb(180,180,180)] text-base"><Icon icon="mdi:calendar-blank" /> </p><span class="text-white text-md leading-4">18:59 20-07-2023</span></div>
                        </div>
        
                        <div class="bg-[rgb(50,50,50)] w-full aspect-video h-auto mb-7"></div>
        
                        <h1 class="font-augeBold text-white text-2xl tracking-wide">Title</h1>
                        <p class="text-white text-base tracking-wider font-[600] text-justify leading-5 mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec augue sed ante consequat lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus, arcu quis tristique porttitor, tellus dolor suscipit orci, eu rhoncus magna metus vitae sapien. Duis lacinia viverra volutpat. Mauris at felis tortor. Duis lacinia condimentum sagittis. Nunc mattis laoreet ipsum, nec sagittis lorem cursus at. Nam vitae vulputate urna. Integer pharetra a nisl a sagittis. Donec non nibh enim. Donec sed nisl mauris. Proin lorem magna, egestas non imperdiet eu, tincidunt et metus. Aenean eleifend luctus nulla sit amet condimentum. Suspendisse varius enim diam, eu mattis nisl eleifend sit amet. Sed sed pellentesque massa. Morbi venenatis et nisl vel molestie.
        
                            Morbi neque arcu, condimentum at quam sit amet, ultrices finibus justo. Nam accumsan ultrices sagittis. Duis suscipit dapibus turpis, in semper nunc vehicula id. Mauris ut aliquam purus. In sagittis id diam vitae volutpat. Cras elementum accumsan nulla sit amet pharetra. In in turpis neque. Ut at pharetra nibh, et rutrum libero. Nam imperdiet sollicitudin sem blandit posuere.
        
                            Sed sed blandit massa. Integer feugiat urna eu velit sollicitudin ultricies. Sed blandit massa vitae eros posuere dictum. Suspendisse lacinia lacinia turpis sit amet porta. Phasellus dictum ultrices erat sed aliquam. Suspendisse eget congue urna. Aenean ornare massa nisl, sed tincidunt justo efficitur sit amet. Cras lobortis pulvinar molestie. Praesent et posuere magna. Proin ullamcorper rhoncus accumsan. In ut est tellus. Donec a laoreet tellus, id finibus ligula. Duis quis eros auctor sapien mattis placerat nec vel nisi. Fusce sapien elit, iaculis vitae felis sed, pellentesque ornare eros. Nam justo lectus, luctus ut euismod at, scelerisque mollis lacus.
        
                            Cras quis consectetur dui, id sagittis lacus. Nullam pretium interdum lorem, quis commodo velit tincidunt et. Sed viverra purus sit amet sapien ornare, sit amet feugiat magna efficitur. Vivamus laoreet metus neque, pulvinar volutpat purus tincidunt quis. Donec malesuada eget sem quis congue. Phasellus fringilla eget nibh vel sollicitudin. Nam tempor lorem vel sapien venenatis, vitae tempor odio placerat. Phasellus ligula turpis, pretium id molestie sit amet, tristique id ante.
        
                            Nunc vel ultrices augue, eget dignissim libero. Proin commodo metus at rutrum blandit. Cras pulvinar leo sit amet imperdiet scelerisque. Etiam suscipit odio quam, et rhoncus eros finibus sit amet. Integer tempor placerat arcu at tempus. Nullam posuere nibh in nunc tincidunt suscipit. Nunc in tincidunt ligula. Nulla quis commodo turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam elementum sagittis elementum. Sed non ligula dolor. Sed tincidunt dui et justo faucibus pellentesque.
                        </p>
        
                        <div class="mt-5 bg-[rgb(30,30,30)] rounded w-full px-6 py-10 text-white font-sans">
                            <p class="font-[700]">Requirements</p>
                            <p>GTX32190TI</p>
                        </div>
        
                        <div class="mt-10 w-fit flex flex-row justify-between items-end gap-1">
                            <p class="text-[rgb(180,180,180)] text-sm">share: </p>
                            <div class="flex flex-row gap-1 items-center">
                                <Icon icon="mdi:facebook" class="text-white text-2xl" />
                                <Icon icon="mdi:twitter" class="text-white text-2xl" />
                                <Icon icon="mdi:instagram" class="text-white text-2xl" />
                                <Icon icon="mdi:whatsapp" class="text-white text-2xl" />
                                <Icon icon="mdi:link" class="text-white text-2xl" />
                            </div>
                        </div>
                    </div>
                    
                    <div class="w-4/12">
                        <div class="w-full h-fit sticky top-7">
                            
                            <div class="pl-[2.5rem] pr-[1rem]">
                                <div class="flex flex-row items-start justify-between">
                                    <h1 class="w-4/12 font-augeBold text-[rgb(200,200,200)] text-lg">Price</h1>
                                    <h1 class="w-8/12 text-right font-augeBold text-white text-5xl">RM 793,721</h1>
                                </div>
    
                                <h1 class="mt-5 font-augeBold text-[rgb(200,200,200)] text-lg">Payment Method</h1>
                                
                                <div class="mt-2 flex flex-col w-full">
                                    <button class="border border-[rgb(100,100,100)] rounded py-4 px-6 flex flex-row justify-start items-center gap-2 group hover:bg-[#fff] duration-500">
                                        <Icon icon="logos:paypal" class="text-2xl" />
                                        <p class="font-auge text-white group-hover:text-[#000] group-hover:duration-500">PayPal</p>
                                    </button>
                                </div>

                                <h1 class="mt-5 bg-[rgb(30,30,30)] py-3 px-6 font-auge text-sm text-[rgb(200,200,200)] flex justify-start items-center gap-1"><Icon icon="mdi:archive" class="text-[rgb(200,200,200)] text-lg" />&nbsp;You owned this item.</h1>
                                
                                <h1 class="mt-5 font-augeBold text-[rgb(200,200,200)] text-lg">Download</h1>
                                
                                <div class="mt-2 flex flex-col w-full">
                                    <button class="border border-[rgb(100,100,100)] rounded py-4 px-6 flex flex-row justify-center items-center gap-2 group hover:bg-[#fff] duration-500">
                                        <Icon icon="mdi:download" class="text-white group-hover:text-[#000] group-hover:duration-500 text-2xl" />
                                        <p class="font-auge text-white group-hover:text-[#000] group-hover:duration-500">PayPal</p>
                                    </button>
                                </div>
                            </div>

                            <div class="w-full border-b border-[rgb(50,50,50)] h-[.2rem] mt-5"></div>

                            <div class="mt-5 pl-[2.5rem] pr-[1rem]">
                                <h1 class="w-full font-augeBold text-[rgb(200,200,200)] text-lg">Sub Total</h1>
                                <div class="flex flex-row items-center justify-between">
                                    <p class="font-auge text-[rgb(200,200,200)]">Item:</p>
                                    <p class="font-auge text-[#fff] tracking-wider">RM 20</p>
                                </div>
                                <div class="flex flex-row items-center justify-between">
                                    <p class="font-auge text-[rgb(200,200,200)]">Tax:</p>
                                    <p class="font-auge text-[#fff] tracking-wider">RM 1.20</p>
                                </div>
                                <div class="flex flex-row items-center justify-between">
                                    <p class="font-auge text-[rgb(255,255,255)] text-xl font-[600]">Total:</p>
                                    <p class="font-auge text-[#fff] text-xl font-[600] tracking-wider">RM 21.20</p>
                                </div>
                            </div>

                            <div class="w-full border-b border-[rgb(50,50,50)] h-[.2rem] mt-5"></div>

                            <div class="pl-[2.5rem] pr-[1rem]">
                                <button class="mt-5 w-full border border-[rgb(100,100,100)] rounded py-4 px-6 flex flex-row justify-center items-center gap-2 group bg-[#fff] hover:bg-[#000] duration-500">
                                    <p class="font-auge text-[#000] group-hover:text-[#fff] group-hover:duration-500">Checkout</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import Footer from '../components/layout/Footer.vue';

</script>