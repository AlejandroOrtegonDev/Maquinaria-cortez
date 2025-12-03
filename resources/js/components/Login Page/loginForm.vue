<template>
  <form @submit.prevent="handleSubmit" class="login-form">
    <LoginInput
      id="email"
      label="Correo electrónico"
      type="email"
      placeholder="tu@email.com"
      v-model="form.email"
      required
    />

    <LoginInput
      id="password"
      label="Contraseña"
      type="password"
      placeholder="••••••••"
      v-model="form.password"
      required
    />

    <div class="form-options">
      <label class="remember-me">
        <input type="checkbox" v-model="form.remember" />
        <span>Recordarme</span>
      </label>
      <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
    </div>

    <button type="submit" class="-btnlogin" :disabled="loading">
      {{ loading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
    </button>

    <div v-if="error" class="error-message">{{ error }}</div>

    <div class="signup-link">
      <p>¿No tienes una cuenta? <a href="/index/register">Regístrate aquí</a></p>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import LoginInput from './LoginInput.vue';

export default {
  name: 'LoginForm',
  components: {
    LoginInput
  },
  setup() {
    const form = ref({
      email: '',
      password: '',
      remember: false
    });
    const loading = ref(false);
    const error = ref('');

    const handleSubmit = async () => {
      loading.value = true;
      error.value = '';

      try {
        console.log('Login data:', form.value);
        setTimeout(() => {
          loading.value = false;
        }, 1000);
      } catch (err) {
        loading.value = false;
        error.value = 'Correo o contraseña incorrectos';
      }
    };

    return {
      form,
      loading,
      error,
      handleSubmit
    };
  }
};
</script>
