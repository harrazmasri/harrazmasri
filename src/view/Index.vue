<template>
  <div class="w-screen h-screen absolute top-0 left-0 z-50 overflow-hidden opacity-[.3] pointer-events-none">
    <img src="/src/assets/images/noise.svg" alt="" class="w-full">
    <img src="/src/assets/images/noise.svg" alt="" class="w-full rotate-45">
    <img src="/src/assets/images/noise.svg" alt="" class="w-full rotate-75">
    <img src="/src/assets/images/noise.svg" alt="" class="w-full rotate-145">
  </div>

  <div 
    class="w-screen flex justify-center bg-gradient-to-br from-[rgb(80,80,80)] to-[rgb(30,30,30)]"
    @wheel="detectScroll()"  
  >
    <div class="relative w-[1440px] h-screen overflow-clip">
      <div class="select-none animate-bounce absolute w-full top-[2rem] flex justify-center">
        <div class="relative flex flex-col justify-center items-center text-white">
          <Icon icon="fluent-mdl2:chevron-up" class="" />
          <p>scroll to previous card</p>
        </div>
      </div>
  
      <div class="select-none animate-bounce absolute w-full bottom-[2rem] flex justify-center">
        <div class="relative flex flex-col justify-center items-center text-white">
          <p>scroll to next card</p>
          <Icon icon="fluent-mdl2:chevron-down" class="" />
        </div>
      </div>
      
      <div 
        v-if="!initialState"
        class="border-none border-white w-[calc(100%-2rem)] h-[calc(100vh-12rem)] absolute flex items-center justify-center overflow-hidden mt-[6rem] ml-[-5rem]"
        style="transform: perspective(60rem) rotateY(-10deg) rotateX(0deg);"
      >
        <!-- <transition
          enter-from-class="opacity-0 -translate-x-[100vw]"
          enter-active-class="transition duration-[200ms] delay-[400ms]"
          enter-to-class="opacity-100 -translate-y-0"
          leave-from-class="opacity-100 -translate-y-0"
          leave-active-class="transition duration-[200ms]"
          leave-to-class="opacity-0 translate-x-[100vw]"
        >
          <img v-if="chosenCard==0" src="/src/assets/images/me-pose.jpg" class="border-none border-green-500 w-10/12 aspect-video" alt="">
        </transition> -->
  
        <transition
          enter-from-class="opacity-0 -translate-x-[100vw]"
          enter-active-class="transition duration-[200ms] delay-[400ms]"
          enter-to-class="opacity-100 -translate-y-0"
          leave-from-class="opacity-100 -translate-y-0"
          leave-active-class="transition duration-[200ms]"
          leave-to-class="opacity-0 translate-x-[100vw]"
        >
          <div v-if="chosenCard==1" class="bg-black w-10/12 aspect-video">
            <div class="w-[1920px] h-[1080px] max-w-full max-h-full flex items-end">
              <h1 class="font-augeLightItalic tracking-wide text-[4rem] text-[rgb(170,170,170)]">coming soon.</h1>
            </div>
          </div>
        </transition>
  
        <transition
          enter-from-class="opacity-0 -translate-x-[100vw]"
          enter-active-class="transition duration-[200ms] delay-[400ms]"
          enter-to-class="opacity-100 -translate-y-0"
          leave-from-class="opacity-100 -translate-y-0"
          leave-active-class="transition duration-[200ms]"
          leave-to-class="opacity-0 translate-x-[100vw]"
        >
          <img v-if="chosenCard==2" src="/src/assets/images/gallery.jpg" class="border-none border-green-500 w-10/12 aspect-video" alt="">
        </transition>
  
        <transition
          enter-from-class="opacity-0 -translate-x-[100vw]"
          enter-active-class="transition duration-[200ms] delay-[400ms]"
          enter-to-class="opacity-100 -translate-y-0"
          leave-from-class="opacity-100 -translate-y-0"
          leave-active-class="transition duration-[200ms]"
          leave-to-class="opacity-0 translate-x-[100vw]"
        >
          <div v-if="chosenCard==3" class="bg-black w-10/12 aspect-video">
            <div class="w-[1920px] h-[1080px] max-w-full max-h-full"></div>
          </div>
        </transition>
  
        <transition
          enter-from-class="opacity-0 -translate-x-[100vw]"
          enter-active-class="transition duration-[200ms] delay-[400ms]"
          enter-to-class="opacity-100 -translate-y-0"
          leave-from-class="opacity-100 -translate-y-0"
          leave-active-class="transition duration-[200ms]"
          leave-to-class="opacity-0 translate-x-[100vw]"
        >
          <div v-if="chosenCard==4" class="bg-red-900 w-10/12 aspect-video">
            <div class="w-[1920px] h-[1080px] max-w-full max-h-full`"></div>
          </div>
        </transition>
      </div>
    
    
      <div 
        class="border-none border-white px-20 flex flex-col justify-center w-full h-screen overflow-y-clip text-white py-12"
        :class="initialState ? 'items-center' : 'items-end'"
      >
        <div 
          class="border-none border-white w-1/2 max-h-[calc(100vh-6rem)] overflow-clip flex flex-col h-fit items-center gap-5 select-none"
          :class="initialState ? 'text-center duration-[300ms]' : 'text-left duration-[300ms]'"
          :style="!initialState ? 'transform: perspective(60rem) rotateY(-10deg) rotateX(0deg);' : 'transform: perspective(60rem) rotateY(0deg) rotateX(0deg);'"
        >
    
          <div
            v-for="card, index in cardContents"
            @click="card.link != null ? $router.push(card.link) : triggerComponent(card.component)"
            class="bg-gradient-to-br from-[rgb(120,120,120)] to-[rgb(90,90,90)] border border-[rgb(130,130,130)] "
          >
            <div :style="initialState ? 'width:33rem; height:7rem' : 'width: '+ (33 - (33 * ((index*10)/100))) +'rem; height: '+ (7 - (7 * ((index*10)/100))) +'rem;'">
              <p
                @mouseenter="changeCard(index)"
                :style="initialState ? 'font-size:6rem; line-height:7rem; text-shadow: .1rem .1rem .5rem rgba(255,255,255,1);' : 'font-size: '+ (6 - (6 * ((index * 10) / 100))) +'rem; line-height:'+ (7 - (7 * ((index * 10) / 100))) +'rem; text-shadow: .1rem .1rem .5rem rgba(255,255,255,1);'"
                class="whitespace-nowrap text-ellipsis overflow-hidden tracking-tighter font-augeBold hover:cursor-pointer hover:scale-[1.2] duration-100"
                :class="chosenCard==index ? 'scale-[1.2]' : 'scale-[1]'"
              >{{ card.title }}</p>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  </div>

  <!-- overlay -->
  <transition
    enter-from-class="-translate-y-[100vh]"
    enter-active-class="transition duration-[1000ms]"
    enter-to-class="-translate-y-0"
    leave-from-class="-translate-y-0"
    leave-active-class="transition duration-[1000ms]"
    leave-to-class="-translate-y-[100vh]"
  >
    <div v-if="aboutComponent" class="absolute z-[100] bg-transparent w-screen h-screen top-0 left-0">
      <About @closeAbout="triggerComponent('about')"></About>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import About from './components/About.vue';

const initialState = ref(true);
const chosenCard = ref(-1);
const aboutComponent = ref(false);

const cardContents = ref([
  {
    title: 'About Me',
    description: '',
    link: null,
    component: 'about',
    image: '',
  },
  {
    title: 'Products',
    description: '',
    link: 'product',
    component: null,
    image: '',
  },
  {
    title: 'Gallery',
    description: '',
    link: 'gallery',
    component: null,
    image: '',
  },
  {
    title: 'Blog',
    description: '',
    link: 'blog',
    component: null,
    image: '',
  },
  {
    title: 'Experiments',
    description: '',
    link: '',
    component: null,
    image: '',
  },
]);

const triggerComponent = (component: String) => {
  if (component == 'about') {
    aboutComponent.value = !aboutComponent.value;
  }
}

const changeCard = (index: number) => {
  if (initialState.value) {
    initialState.value = false;
  }
  chosenCard.value = index;
}

const detectScroll = () => {
  if (event.deltaY < 0) {
    if (chosenCard.value > 0) {
      chosenCard.value--;
    }
  } else if (event.deltaY > 0) {
    if (chosenCard.value < 4) {
      chosenCard.value++;
    }
  }
}

onMounted(() => {
  // console.log('test');
  // chosenCard.value = 1;
});
</script>