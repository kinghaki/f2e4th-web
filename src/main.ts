import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store'; // typescript 配置

import '@/styles/scss/reset.scss'; // css初始化
import '@/styles/scss/style.scss'; // 全局css

const app = createApp(App);
app.use(router).use(store, key).mount('#app');
