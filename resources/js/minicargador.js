import './bootstrap'
import { createApp } from 'vue'
import Minicargador from './components/Maquinas/Minicargador.vue'

const mountElement = document.getElementById('minicargador')

if (mountElement) {
  createApp(Minicargador).mount(mountElement)
}

