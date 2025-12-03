<template>
  <div class="page-header">
    <h2>Mis Tareas</h2>
    <button @click="$emit('addTask')" class="btn-add-task">
      <span>+</span> Nueva Tarea
    </button>
  </div>
</template>

<script setup>
defineEmits(['addTask'])
</script>