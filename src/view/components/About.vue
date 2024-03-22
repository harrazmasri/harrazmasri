<template>
    
    <div 
        class="w-full h-screen flex justify-center items-center bg-black"
    >
        <!-- <div v-touch:swipe.right="activateBgDesc" class="" style="transform: perspective(30rem) rotateY(-10deg) rotateX(20deg);"></div> -->
        <div class="transform-gpu absolute h-screen w-screen text-white pt-[calc(100vh-40rem)] p-10">
            
            <div v-if="currentTab==1" class="h-fit flex flex-row w-full gap-4">
                <div class="w-1/4 flex-grow-1 flex flex-col items-center justify-between">
                    <transition
                        enter-from-class="opacity-0 -translate-x-[2rem]"
                        enter-active-class="transition duration-[200ms]"
                        enter-to-class="opacity-100 -translate-x-0"
                        leave-from-class="opacity-100 -translate-x-0"
                        leave-active-class="transition duration-[200ms]"
                        leave-to-class="opacity-0 translate-x-[2rem]"
                    >
                        <img v-if="transition.profile_pic" src="/src/assets/images/me.jpg" alt="my handsome photo" class="rounded-full w-52 h-52 object-cover">
                    </transition>
                    <div class="text-base text-white">
                        <a target="_blank" href="mailto:harrazmasri05@gmail.com" class="flex gap-2 hover:opacity-75 items-center"><Icon icon="uiw:mail" class="text-white" /> <p>harrazmasri05@gmail.com</p></a>
                        <a target="_blank" href="https://www.youtube.com/@harrazmasri2805" class="flex gap-2 hover:opacity-75 items-center"><Icon icon="icomoon-free:youtube" class="text-white" /> <p>youtube</p></a>
                        <a target="_blank" href="https://www.linkedin.com/in/harraz-masri-374813260/" class="flex gap-2 hover:opacity-75 items-center"><Icon icon="fa:linkedin" class="text-white" /> <p>linked in</p></a>
                        <a target="_blank" href="https://github.com/harrazmasri" class="flex gap-2 hover:opacity-75 items-center"><Icon icon="fa:github" class="text-white" /> <p>github</p></a>
                    </div>
                </div>
                <div class="w-3/4 flex flex-col">
                    <h1 class="font-augeBold text-[7rem] tracking-tighter leading-[5rem] text-shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]">Harraz Masri</h1>
                    
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-row text-base text-[rgb(180,180,180)]">Muhammad Harraz Bin Ahmad Masri&nbsp;|&nbsp;<span>{{ new Date().getFullYear() - 2003 }}</span>&nbsp;|&nbsp;Malaysia</div>
                        <p class="w-3/4 tracking-wider text-lg text-justify leading-[1.5rem]">Growing up in a depressing and dull environment I faced a lot of hardships and losses that shaped my character. As a teenager, I was actively engaged in physical activities, emphasizing my resilience and determination. <br/><br/>I have always worked hard and managed others' expectations effectively, seizing various opportunities that came my way. Building strong connections, I take pride in the honest and loyal relationships I've cultivated with contacts, colleagues, friends, and others. <br/><br/>Since the age of 14, I have spent a significant amount of time working on personal website projects. In my free time, I enjoy capturing moments through photography and occasionally expressing myself through spontaneous drawings. <br/><br/>My passion extends to an obsession with motorsports, reflecting my diverse interests and pursuits.</p>
                    </div>
                </div>
            </div>

            <div v-if="currentTab==2" class="h-fit grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-auto gap-x-6 gap-y-10 px-[10rem]">
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
                    <p class="text-2xl text-gray-300">Vue 3</p>
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

            <div v-if="currentTab==3" class="h-[calc(100vh-27rem)] flex flex-col w-full overflow-y-scroll">
                <div class="w-full flex gap-10">
                    <div class="h-[100%] w-[0.15rem] bg-gray-400"></div>
                    <div class="w-10/12 flex items-start gap-4">
                        <img class="aspect-video w-[20rem] rounded" src="/src/assets/images/about/iattend.png" alt="">
                        <div>
                            <h3 class="text-3xl font-augeBlack">iAttend</h3>
                            <p class="text-xl text-gray-300">A location tracking based attendance system made for my final year project. Comes with two platforms, one for the staffs (mobile) and the other for the office admin (web). This system improves the accuracy and validity one's attendance alongside more systematic approach on attendance management.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mx-auto w-fit fixed bottom-10 flex flex-row text-white justify-start gap-10 text-lg">
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

    <button @click="closeAbout" class="absolute top-[5rem] right-[5rem] rotate-[45deg] border-none outline-none ring-0 p-0 m-0 hover:rotate-[270deg] duration-300"><Icon icon="mdi-light:plus" class="text-white text-[7rem]" /></button>
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