import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    server: {
        host: '0.0.0.0', // Escucha desde todas las IPs (necesario para ngrok)
        port: 5173,      // Puerto de Vite
        strictPort: true,
        hmr: {
            host: 'isadora-moitiest-pyramidically.ngrok-free.dev', // HMR con la URL pública
            protocol: 'wss', // WebSocket seguro
        },
        allowedHosts: 'all', // Permite cualquier host (ngrok)
    },
    plugins: [
        laravel({
            input: [
                // CSS
                'resources/css/app.css',
                'resources/css/chat-widget.css',
                'resources/css/dashboard.css',
                'resources/css/horario.css',
                'resources/css/landing.css',
                'resources/css/login.css',
                'resources/css/register.css',
                'resources/css/tasks.css',
                'resources/css/whatsapp-button.css',
                // JS
                'resources/js/app.js',
                'resources/js/landing.js',
                'resources/js/login.js',
                'resources/js/manlift-articulado.js',
                'resources/js/minicargador.js',
                'resources/js/pagecontact.js',
                'resources/js/quienes.js',
                'resources/js/retroexcavadora.js',
                'resources/js/scissor-lift.js',
                'resources/js/tasks.js',
                'resources/js/telehandler.js',
            ],
            refresh: true,
        }),
        vue(),
        tailwindcss(),
    ],
});
