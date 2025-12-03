import './bootstrap';
import { createApp } from 'vue';
import TasksIndex from './components/index.vue';

// Crear y montar la aplicación Vue para tareas
const app = createApp(TasksIndex);
app.mount('#app');
