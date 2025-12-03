import './bootstrap';
import { createApp } from 'vue';
import Login from './components/Login.vue';
import Navbar from './components/globlal/Navbar.vue';
import LoginForm from './components/Login Page/loginForm.vue';
    

const app = createApp(Login);
app.component('Navbar', Navbar);
app.component('LoginForm', LoginForm);
app.mount('#app');

