<template>
  <div class="register-page">
    <Navbar />
    <div class="register-container">
      <div class="register-card">
        <div class="register-header">
          <h1 class="register-title">TASK API</h1>
          <p class="register-subtitle">Crea tu cuenta para comenzar</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './globlal/Navbar.vue';
import RegisterForm from './RegisterPage.vue/RegisterForm.vue';

export default {
  name: 'RegisterPage',
  components: {
    Navbar,
    RegisterForm
  }
};
</script>
