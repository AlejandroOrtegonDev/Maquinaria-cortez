import './bootstrap'
import { createApp } from 'vue'
import ManliftArticulado from './components/Maquinas/ManliftArticulado.vue'

const mountElement = document.getElementById('manlift-articulado')

if (mountElement) {
  createApp(ManliftArticulado).mount(mountElement)
}

