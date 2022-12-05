import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'normalize.css';
import './assets/styles/tailwind.index.css';
import './assets/styles/main.scss';

createApp(App).use(router).mount('#jsdc');
