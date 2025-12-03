<template>
  <nav class="tasks-navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <h1>TASK API</h1>
      </div>
      
      <div class="navbar-menu">
        <span class="user-info">Hola, {{ user.name || 'Usuario' }}</span>
        <button @click="$emit('logout')" class="logout-btn">Cerrar Sesión</button>
        <SettingsDropdown />
      </div>
    </div>
  </nav>
</template>

<script setup>
import SettingsDropdown from './SettingsDropdown.vue'

defineProps({
  user: {
    type: Object,
    default: () => ({ name: 'Usuario' })
  }
})

defineEmits(['logout'])
</script>
