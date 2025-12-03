import './bootstrap'
import { createApp } from 'vue'
import Retroexcavadora from './components/Maquinas/Retroexcavadora.vue'

const mountElement = document.getElementById('retroexcavadora')

if (mountElement) {
  createApp(Retroexcavadora).mount(mountElement)
}

