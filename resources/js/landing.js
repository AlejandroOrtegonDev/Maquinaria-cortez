import './bootstrap';
import { createApp } from 'vue';
import LandingPage from './components/landingPage/LandingPage.vue';

// Crear y montar la aplicación Vue para landing page
const app = createApp(LandingPage);
app.mount('#app');

