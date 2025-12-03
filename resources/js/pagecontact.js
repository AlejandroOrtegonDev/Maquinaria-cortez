import './bootstrap'
import { createApp } from 'vue'
import PageContact from './components/contactoMSG/pageContact.vue'

const mountElement = document.getElementById('pagecontact')

if (mountElement) {
    createApp(PageContact).mount(mountElement)
}
