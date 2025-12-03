import './bootstrap'
import { createApp } from 'vue'
import QuienesSomos from './components/QuienesSomos/quienes-Somos.vue'

const mountElement = document.getElementById('quienes-somos')

if (mountElement) {
  createApp(QuienesSomos).mount(mountElement)
}

