<template> 
    <div class="w-full h-fit min-h-screen bg-black flex flex-col items-center font-auge text-white">
        <Header></Header>

        <div class="w-full max-w-[1440px] h-fit min-h-[calc(100vh-21.5rem)] grid grid-cols-4 gap-5 pt-[2.5rem] pb-[3rem] px-6">

            <div
                v-if="catalog.length != 0"
                v-for="data, index in catalog"
                class="cursor-pointer transition-all border-[0.15rem] border-black hover:border-gray-300 hover:scale-[1] scale-[0.98] p-7 h-fit"
                @click="$router.push({ path:'/blog/page', query: { id: data.id } })"
            >
                <img v-if="data.thumbnail" class="bg-gray-500 w-full max-w-[500px] object-cover aspect-[4/3] mb-3" :src="data.thumbnail.name" />
                <div v-else class="bg-gray-500 w-full aspect-[4/3] mb-3"></div>
                <h1 class="text-xl tracking-tighter font-auge font-[700] mb-1">{{ data.title }}</h1>
                <p class="h-12 text-ellipsis overflow-hidden" v-html="data.body"></p>
            </div>

        </div>

        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import { ref } from 'vue';
import edjsHTML from 'editorjs-html';
import axios from 'axios';

const edjsParser = edjsHTML();
const catalog = ref([]);

axios.get('http://127.0.0.1:8000/api/post/catalog')
.then((response) => { 
    if (Array.isArray(response.data)) {
        response.data.forEach((item) => {
            let parsedJSON = JSON.parse(item.body);
            item.body = item.body != null ? edjsParser.parse(parsedJSON).join('') : '';
        });
    }

    catalog.value = response.data;
});

</script>