import './bootstrap';
import { createApp } from 'vue';
import Register from './components/Register.vue';

// Crear y montar la aplicación Vue para registro
const app = createApp(Register);
app.mount('#app');
