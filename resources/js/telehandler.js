import './bootstrap'
import { createApp } from 'vue'
import Telehandler from './components/Maquinas/Telehandler.vue'

const mountElement = document.getElementById('telehandler')

if (mountElement) {
  createApp(Telehandler).mount(mountElement)
}

