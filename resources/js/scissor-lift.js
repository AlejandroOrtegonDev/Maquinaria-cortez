import './bootstrap'
import { createApp } from 'vue'
import ScissorLift from './components/Maquinas/ScissorLift.vue'

const mountElement = document.getElementById('scissor-lift')

if (mountElement) {
  createApp(ScissorLift).mount(mountElement)
}

