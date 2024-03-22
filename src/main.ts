import { createApp } from 'vue';
import './style.css';
import './index.css';
import { createRouter, createWebHistory } from 'vue-router';
import { Icon } from '@iconify/vue';

import App from './App.vue';
import Index from './view/Index.vue';
import Blog from './view/blog/Blog.vue';
import BlogView from './view/blog/View.vue';
import Gallery from './view/gallery/Gallery.vue';
import Product from './view/product/Product.vue';
import ProductView from './view/product/View.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: Index,
      meta: { transition: 'slide-bottom' },
    },
    { 
      path: '/blog', 
      component: Blog,
      meta: { transition: 'slide-bottom' },
    },
    {
      path: '/blog/page',
      component: BlogView,
      meta: { transition: 'slide-bottom' },
    },
    {
      path: '/gallery',
      component: Gallery,
      meta: { transition: 'slide-bottom' },
    },
    {
      path: '/product',
      component: Product,
      meta: { transition: 'slide-bottom' },
    },
    {
      path: '/product/view',
      component: ProductView,
      meta: { transition: 'slide-bottom' },
    }
  ],
});

app.use(router);
app.component('Icon', Icon);

app.mount('#app');
