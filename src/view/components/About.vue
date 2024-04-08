<template>
    
    <div 
        class="w-full h-screen overflow-scroll flex justify-center items-center bg-black fixed"
    >
        <!-- <div v-touch:swipe.right="activateBgDesc" class="" style="transform: perspective(30rem) rotateY(-10deg) rotateX(20deg);"></div> -->
        <div class="transform-gpu absolute h-screen w-screen text-white pt-[calc(100vh-40rem)] p-10">
            
            <div v-if="currentTab==1" class="h-fit flex lg:flex-row md:flex-row sm:flex-col w-full gap-4">
                <div class="lg:w-1/4 md:w-1/4 sm:w-full flex-grow-1 flex flex-col lg:gap-0 md:gap-0 sm:gap-5 items-center justify-between lg:mb-0 md:mb-0 sm:mb-7">
                    <transition
                        enter-from-class="opacity-0 -translate-x-[2rem]"
                        enter-active-class="transition duration-[200ms]"
                        enter-to-class="opacity-100 -translate-x-0"
                        leave-from-class="opacity-100 -translate-x-0"
                        leave-active-class="transition duration-[200ms]"
                        leave-to-class="opacity-0 translate-x-[2rem]"
                    >
                        <img v-if="transition.profile_pic" src="/src/assets/images/me.jpg" alt="my formal portrait" class="rounded-full w-52 h-52 object-cover">
                    </transition>
                    <div class="text-base text-white">
                        <a target="_blank" href="mailto:harrazmasri05@gmail.com" class="flex gap-2 hover:opacity-75 items-center"><Icon icon="uiw:mail" class="text-white" /> <p>harrazmasri05@gmail.com</p></a>
                        <a target="_blank" href="https://www.youtube.com/@HarrazMasriDev-jj1zn" class="flex gap-2 hover:opacity-75 items-center"><Icon icon="icomoon-free:youtube" class="text-white" /> <p>youtube</p></a>
                        <a target="_blank" href="https://www.linkedin.com/in/harraz-masri-374813260/" class="flex gap-2 hover:opacity-75 items-center"><Icon icon="fa:linkedin" class="text-white" /> <p>linked in</p></a>
                        <a target="_blank" href="https://github.com/harrazmasri" class="flex gap-2 hover:opacity-75 items-center"><Icon icon="fa:github" class="text-white" /> <p>github</p></a>
                    </div>
                </div>
                <div class="lg:w-3/4 md:w-3/4 sm:w-full flex flex-col lg:pb-0 md:pb-0 sm:pb-32">
                    <h1 class="font-augeBold lg:text-[7rem] md:text-[7rem] sm:text-6xl whitespace-nowrap tracking-tighter leading-[5rem] text-shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]">Harraz Masri</h1>
                    
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-row lg:text-base md:text-base sm:text-sm whitespace-nowrap text-[rgb(180,180,180)]">Muhammad Harraz Bin Ahmad Masri&nbsp;|&nbsp;<span>{{ new Date().getFullYear() - 2003 }}</span>&nbsp;|&nbsp;Malaysia</div>
                        <p class="bg-black lg:w-3/4 md:w-3/4 sm:w-full tracking-wider text-lg text-justify leading-[1.5rem]">Growing up in a depressing and dull environment I faced a lot of hardships and losses that shaped my character. As a teenager, I was actively engaged in physical activities, emphasizing my resilience and determination. <br/><br/>I have always worked hard and managed others' expectations effectively, seizing various opportunities that came my way. Building strong connections, I take pride in the honest and loyal relationships I've cultivated with contacts, colleagues, friends, and others. <br/><br/>Since the age of 14, I have spent a significant amount of time working on personal website projects. In my free time, I enjoy capturing moments through photography and occasionally expressing myself through spontaneous drawings. <br/><br/>My passion extends to an obsession with motorsports, reflecting my diverse interests and pursuits.</p>
                    </div>
                    
                    <div class="mt-3 flex lg:flex-row md:flex-row sm:flex-col items-center text-base text-[rgb(180,180,180)]">Currently employed full time at <img src="/src/assets/images/rekasawang_logo.jpg" class="rounded-lg ms-3 me-2 w-8 h-8 object-cover"><a class="text-white underline" target="_blank" href="https://maps.app.goo.gl/ou12wZ1Tivtdfsy88">REKASAWANG</a> &nbsp;&nbsp;as a web developer.</div>
                </div>
            </div>

            <div v-if="currentTab==2" class="h-fit grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mx-auto gap-x-6 gap-y-10 px-[10rem] lg:pb-0 md:pb-0 sm:pb-32">
                <div class="rounded flex flex-col gap-3 items-center">
                    <Icon class="text-7xl text-gray-300" icon="flowbite:html-solid" />
                    <p class="text-2xl text-gray-300">HTML</p>
                </div>
                <div class="rounded flex flex-col gap-3 items-center">
                    <Icon class="text-7xl text-gray-300" icon="cib:js" />
                    <p class="text-2xl text-gray-300">Javascript</p>
                </div>
                <div class="rounded flex flex-col gap-3 items-center">
                    <Icon class="text-7xl text-gray-300" icon="flowbite:css-solid" />
                    <p class="text-2xl text-gray-300">CSS</p>
                </div>
                <div class="rounded flex flex-col gap-3 items-center">
                    <Icon class="text-7xl text-gray-300" icon="mdi:laravel" />
                    <p class="text-2xl text-gray-300">Laravel</p>
                </div>
                <div class="rounded flex flex-col gap-3 items-center">
                    <Icon class="text-7xl text-gray-300" icon="mdi:vuejs" />
                    <p class="text-2xl whitespace-nowrap text-gray-300">Vue 3</p>
                </div>
                <div class="rounded flex flex-col gap-3 items-center">
                    <Icon class="text-7xl text-gray-300" icon="mdi:tailwind" />
                    <p class="text-2xl text-gray-300">Tailwind</p>
                </div>
                <div class="rounded flex flex-col gap-3 items-center">
                    <Icon class="text-7xl text-gray-300" icon="mdi:database" />
                    <p class="text-2xl text-gray-300">MySQL</p>
                </div>
            </div>

            <div v-if="currentTab==3" class="flex flex-col gap-24 w-full pb-[7rem]">
                <div class="w-full h-full flex lg:gap-10 md:gap-10 sm:gap-4 border-l-2 border-gray-400">
                    <div class="lg:w-10/12 md:w-10/12 sm:w-full flex flex-col items-start gap-4 ps-4">
                        <h3 class="sticky left-0 top-10 bg-[rgba(20,20,20,0.5)] py-3 backdrop-blur-sm w-fit pr-5 z-10 text-4xl font-augeBlack">iAttend</h3>
                        <div class="w-full items-start gap-4 flex lg:flex-row md:flex-row sm:flex-col">
                            <img class="aspect-video lg:w-[25rem] md:w-[25rem] sm:w-[17rem] rounded" src="/src/assets/images/about/iattend.png" alt="">
                            <div>
                                <p class="text-xl text-gray-300">A location tracking based attendance system made for my final year project. Comes with two platforms, one for the staffs (mobile) and the other for the office admin (web). This system improves the accuracy and validity one's attendance alongside more systematic approach on attendance management. This system is made with the integration of FlutterFlow and Codeigniter 3</p>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-3xl font-augeBlack underline">Previews</h3>
                            <p class="text-xl mt-3 mb-2 text-gray-300 desktop">Desktop</p>
                            <div class="lg:grid md:grid sm:flex flex-col grid-cols-4 gap-4">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/iattend-login.png" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/iattend.png" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/iattend-profile.png" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/iattend-register-admin.png" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/iattend-tables.png" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/iattend-settings.png" alt="">
                            </div>
                            <p class="text-xl mt-3 mb-2 text-gray-300 desktop">Mobile</p>
                            <div class="lg:grid md:grid sm:flex flex-col grid-cols-4 gap-4">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/iattend-mobile-dashboard.jpg" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/iattend-mobile-drawer.jpg" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/iattend-mobile-log-in.jpg" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/iattend-mobile-logout.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full h-full flex lg:gap-10 md:gap-10 sm:gap-4 border-l-2 border-gray-400">
                    <div class="lg:w-10/12 md:w-10/12 sm:w-full flex flex-col items-start gap-4 ps-4">
                        <h3 class="sticky left-0 top-10 bg-[rgba(20,20,20,0.5)] py-3 backdrop-blur-sm w-fit pr-5 z-10 text-4xl font-augeBlack">PMS</h3>
                        <div class="w-full items-start gap-4 flex lg:flex-row md:flex-row sm:flex-col">
                            <img class="aspect-video lg:w-[25rem] md:w-[25rem] sm:w-[17rem] rounded" src="/src/assets/images/about/pms.png" alt="">
                            <div>
                                <p class="text-xl text-gray-300">Stands for Project Management System built solely for <a class="text-white underline" target="_blank" href="https://maps.app.goo.gl/ou12wZ1Tivtdfsy88">Rekasawang PVT. LTD.</a> management. It is an internal system used by Rekasawang's staffs to keep in track on projects, customers, and other web services configuration.</p>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-3xl font-augeBlack underline">Previews</h3>
                            <p class="text-xl mt-3 mb-2 text-gray-300 desktop">Desktop</p>
                            <div class="lg:grid md:grid sm:flex flex-col grid-cols-4 gap-4">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/pms-table.png" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/pms-task-manager.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full h-full flex lg:gap-10 md:gap-10 sm:gap-4 border-l-2 border-gray-400">
                    <div class="lg:w-10/12 md:w-10/12 sm:w-full flex flex-col items-start gap-4 ps-4">
                        <h3 class="sticky left-0 top-10 bg-[rgba(20,20,20,0.5)] py-3 backdrop-blur-sm w-fit pr-5 z-10 text-4xl font-augeBlack flex items-center gap-2">Jom Menyumbang (WIP)</h3>
                        <div class="w-full items-start gap-4 flex lg:flex-row md:flex-row sm:flex-col">
                            <img class="aspect-video lg:w-[25rem] md:w-[25rem] sm:w-[17rem] rounded" src="/src/assets/images/about/jm.png" alt="">
                            <div>
                                <p class="text-xl text-gray-300">A crowdfund system by <a class="text-white underline" target="_blank" href="https://maps.app.goo.gl/ou12wZ1Tivtdfsy88">Rekasawang PVT. LTD.</a> for the NGO Aman Palestin in support for Palestinian conflicts. The development is still in progress and soon will be published. This system has an abundant of styling elements and complete responsive designs and a lot of features.</p>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-3xl font-augeBlack underline">Previews</h3>
                            <p class="text-xl mt-3 mb-2 text-gray-300 desktop">Desktop</p>
                            <div class="lg:grid md:grid sm:flex flex-col grid-cols-4 gap-4">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/jm-dashboard.png" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/jm-reward.png" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/jm-gallery.png" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/jm-shop.png" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/jm-news.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full h-full flex lg:gap-10 md:gap-10 sm:gap-4 border-l-2 border-gray-400">
                    <div class="lg:w-10/12 md:w-10/12 sm:w-full flex flex-col items-start gap-4 ps-4">
                        <h3 class="sticky left-0 top-10 bg-[rgba(20,20,20,0.5)] py-3 backdrop-blur-sm w-fit pr-5 z-10 text-4xl font-augeBlack flex items-center gap-2">Nohad (WIP)</h3>
                        <div class="w-full items-start gap-4 flex lg:flex-row md:flex-row sm:flex-col">
                            <img class="aspect-video lg:w-[25rem] md:w-[25rem] sm:w-[17rem] rounded" src="/src/assets/images/about/nohad.png" alt="">
                            <div>
                                <p class="text-xl text-gray-300">An internal management system for the printing company Nohad. This system allows their agents to create quotations, orders and payment. Then the Nohad system administrators will be able to view list of orders and update processing status and make a delivery.</p>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-3xl font-augeBlack underline">Previews</h3>
                            <p class="text-xl mt-3 mb-2 text-gray-300 desktop">Desktop</p>
                            <div class="lg:grid md:grid sm:flex flex-col grid-cols-4 gap-4">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/nohad-order.png" alt="">
                                <img class="lg:w-[20rem] md:w-[20rem] sm:w-[17rem] rounded" src="/src/assets/images/about/nohad-report.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mx-auto bg-black fixed left-0 border-t border-gray-600 bottom-0 w-full p-5 flex flex-row text-white justify-center gap-10 text-lg">
            <button @click="currentTab=1" :class="currentTab==1?'text-blue-400 border-blue-500':'text-gray-500 border-transparent'" class=" border-b pb-2 w-fit text-center hover:text-blue-500 hover:border-blue-500 duration-1000 ease-in-out">
                biography
            </button>
            <button @click="currentTab=2" :class="currentTab==2?'text-blue-400 border-blue-500':'text-gray-500 border-transparent'" class=" border-b pb-2 w-fit text-center hover:text-blue-500 hover:border-blue-500 duration-1000 ease-in-out">
                development stack
            </button>
            <button @click="currentTab=3" :class="currentTab==3?'text-blue-400 border-blue-500':'text-gray-500 border-transparent'" class=" border-b pb-2 w-fit text-center hover:text-blue-500 hover:border-blue-500 duration-1000 ease-in-out">
                projects
            </button>
        </div>
    </div>

    <button @click="closeAbout" class="absolute top-[5rem] lg:right-[5rem] md:right-[5rem] sm:right-[1.5rem] rotate-[45deg] border-none outline-none ring-0 p-0 m-0 hover:rotate-[270deg] duration-300"><Icon icon="mdi-light:plus" class="text-white text-[7rem]" /></button>
</template>

<script setup lang="ts">
import { ref, defineEmits, onMounted } from 'vue';

const currentTab = ref(1);

const transition = ref({
    profile_pic: false,
});

onMounted(() => {
    transition.value.profile_pic = true;
});

const emit = defineEmits();
const closeAbout = () => {
    emit('closeAbout', false);
}
</script>