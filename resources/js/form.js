import './bootstrap';
import { createApp } from 'vue';
import Navbar from './components/globlal/Navbar.vue';
import Form from './components/form/form.vue';


const mountEl = document.getElementById('form-app');

if (mountEl) {
    createApp(Form).mount(mountEl);
}

