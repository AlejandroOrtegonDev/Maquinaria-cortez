<template>
  <div class="task-card" :class="task.status">
    <div class="task-header">
      <h3 class="task-title">{{ task.title }}</h3>
      <div class="task-actions">
        <button @click="$emit('edit')" class="btn-edit">✏️</button>
        <button @click="$emit('delete')" class="btn-delete">🗑️</button>
      </div>
    </div>
    
    <p class="task-description">{{ task.description }}</p>
    
    <div class="task-meta">
      <span class="task-category">{{ task.category }}</span>
      <span class="task-status">{{ getStatusText(task.status) }}</span>
      <span class="task-date">{{ formatDate(task.created_at) }}</span>
    </div>
    
    <div class="task-progress">
      <button 
        @click="$emit('updateStatus')"
        class="status-btn"
        :class="task.status"
      >
        {{ getStatusButtonText(task.status) }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  task: Object
})

defineEmits(['edit', 'delete', 'updateStatus'])

const getStatusText = (status) => {
  const statusMap = {
    'pendiente': 'Pendiente',
    'en_progreso': 'En Progreso',
    'completada': 'Completada'
  }
  return statusMap[status] || status
}

const getStatusButtonText = (status) => {
  const statusMap = {
    'pendiente': 'Iniciar',
    'en_progreso': 'Completar',
    'completada': 'Reiniciar'
  }
  return statusMap[status] || status
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('es-ES')
}
</script>