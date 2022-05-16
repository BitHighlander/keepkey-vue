import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import './index.css'
import {ipcRenderer} from './electron'


console.log(ipcRenderer)
ipcRenderer.on('@keepkey/state', (_event, data) => {
    console.info('@keepkey/state', data)
})


const app = createApp(App);

app.use(store).mount('#app');
