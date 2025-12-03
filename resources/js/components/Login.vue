<template>
  <div class="login-page">
    <Navbar />
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h1 class="login-title">TASK API</h1>
          <p class="login-subtitle">Inicia sesión para continuar</p>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './globlal/Navbar.vue';
import LoginForm from './Login Page/loginForm.vue';


export default {
  name: 'LoginPage',
  components: {
    Navbar,
    LoginForm
  }
};
</script>
