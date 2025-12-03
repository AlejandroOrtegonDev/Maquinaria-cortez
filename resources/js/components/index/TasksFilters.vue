<template>
    <div class="filters">
      <select 
        :value="category" 
        @change="handleCategoryChange"
        class="filter-select"
      >
        <option value="">Todas las categorías</option>
        <option value="trabajo">Trabajo</option>
        <option value="personal">Personal</option>
        <option value="estudio">Estudio</option>
        <option value="hogar">Hogar</option>
      </select>
      
      <select 
        :value="status" 
        @change="handleStatusChange"
        class="filter-select"
      >
        <option value="">Todos los estados</option>
        <option value="pendiente">Pendiente</option>
        <option value="en_progreso">En Progreso</option>
        <option value="completada">Completada</option>
      </select>
    </div>
  </template>
  
  <script setup>
  defineProps({
    category: String,
    status: String
  })
  
  const emit = defineEmits(['update:category', 'update:status', 'filterChange'])
  
  function handleCategoryChange(event) {
    emit('update:category', event.target.value)
    emit('filterChange')
  }
  
  function handleStatusChange(event) {
    emit('update:status', event.target.value)
    emit('filterChange')
  }
  </script>
  