import { createApp } from 'vue'
import '../dist/style.css'
import App from './App.vue'
// @ts-ignore
import RadioTree from '../dist/radio-tree.js'
// import { RadioTree } from '../lib'
const app = createApp(App)

// app.component('RadioTree', RadioTree)
app.use(RadioTree, {})
app.mount('#app')
