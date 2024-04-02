<template> 
    <div class="w-full h-fit min-h-screen bg-black flex flex-col items-center font-auge text-white">
        <Header></Header>

        <div class="flex items-center justify-between w-full px-6 mt-[2.5rem]">
            <div class="flex items-center gap-2">
                <p>Filter: </p>
                <input @keydown="fetchData(currentUrl)" type="text" v-model="filterSearch" class="border-b bg-black py-1 px-1 text-sm outline-0 ring-0 w-60">
            </div>
            <div class="flex items-center gap-2">
                <p>Sort By: </p>
                <select v-model="filterSort" @change="fetchData(currentUrl)" class="w-[5rem] flex justify-start items-center text-[rgb(200,200,200)] gap-1 leading-5 bg-transparent border-none ring-0 outline-none">
                    <option value="desc" class="bg-black">Latest</option>
                    <option value="asc" class="bg-black">Oldest</option>
                    <option value="this_month" class="bg-black">This Month</option>
                    <option value="last_month" class="bg-black">Last Month</option>
                </select>
            </div>
        </div>

        <div class="w-full max-w-[1440px] h-fit flex-grow grid grid-cols-4 gap-5 pt-[1rem] pb-[3rem] px-6">

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

        <div class="flex gap-1 items-center justify-center text-lg mb-[3rem]">
            <button 
                v-for="link, index in links" 
                @click="currentUrl=link.url; fetchData(link.url);"
                :disabled="link.label == current_page || !link.url"
                :class="!link.url ? 'bg-[rgb(10,10,10)] border-transparent' : index==0 || index+1==links.length ? 'bg-[rgb(20,20,20)] border-transparent hover:bg-[rgb(30,30,30)]' : link.label==current_page? 'border-[rgb(200,200,200)]' : 'border-transparent hover:border-[rgb(100,100,100)]'" 
                class="w-10 h-10 border-2 rounded flex items-center justify-center"
            >
                <Icon v-if="index==0" icon="mdi:chevron-left" />
                <Icon v-else-if="index+1==links.length" icon="mdi:chevron-right" />
                <p v-else>{{ link.label }}</p>
            </button>
        </div>

        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import { onMounted, ref } from 'vue';
import edjsHTML from 'editorjs-html';
import axios from 'axios';

const edjsParser = edjsHTML();
const catalog = ref([]);
const current_page = ref(null);
const last_page = ref(null);
const total = ref(null);
const per_page = ref(null);
const links = ref([]);

const currentUrl = ref('http://127.0.0.1:8000/api/post/catalog');

const filterSearch = ref(null);
const filterSort = ref('desc');

onMounted(() => {
    fetchData(currentUrl.value);
});

const fetchData = (url) => {
    axios.post(url, {
        filter_search: filterSearch.value,
        filter_sort: filterSort.value,
    })
    .then((response) => { 
        console.log(response.data);
        
        current_page.value = response.data.current_page;
        last_page.value = response.data.last_page;
        total.value = response.data.total;
        links.value = response.data.links;
        per_page.value = response.data.per_page;

        if (Array.isArray(response.data.data)) {
            response.data.data.forEach((item) => {
                let parsedJSON = JSON.parse(item.body);
                item.body = item.body != null ? edjsParser.parse(parsedJSON).join('') : '';
            });
        }

        catalog.value = response.data.data;
    });
}

</script>