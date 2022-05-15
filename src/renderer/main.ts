import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import router from './router'
import './index.css'

const app = createApp(App);

app.use(router).use(store).mount('#app');
