<template>
  <div class="tasks-container">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Cargando tareas...</p>
    </div>

    <div v-else-if="tasks.length === 0" class="no-tasks">
      <div class="no-tasks-icon">📝</div>
      <h3>No hay tareas</h3>
      <p>Crea tu primera tarea para comenzar</p>
    </div>

    <div v-else class="tasks-list">
      <TaskCard
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @edit="$emit('edit', task)"
        @delete="$emit('delete', task.id)"
        @updateStatus="$emit('updateStatus', task)"
      />
    </div>
  </div>
</template>

<script setup>
import TaskCard from './TaskCard.vue'

defineProps({
  tasks: Array,
  loading: Boolean
})

defineEmits(['edit', 'delete', 'updateStatus'])
</script>