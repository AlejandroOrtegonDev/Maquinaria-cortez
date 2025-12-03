<template>
    <div class="tasks-page">
      <TasksNavbar :user="user" @logout="logout" />
  
      <div class="main-content">
        <div class="container">
          <TasksHeader @addTask="showAddTask = true" />
  
          <TasksFilters
            v-model:category="selectedCategory"
            v-model:status="selectedStatus"
            @filterChange="filterTasks"
          />
  
          <TasksList
            :tasks="filteredTasks"
            :loading="loading"
            @edit="editTask"
            @delete="deleteTask"
            @updateStatus="updateTaskStatus"
          />
        </div>
      </div>
  
      <TaskModal
        :visible="showAddTask || !!editingTask"
        :editing="!!editingTask"
        :form="taskForm"
        @close="closeModal"
        @save="saveTask"
      />
  

      <ChatWidget />
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
import TasksNavbar from './index/TasksNavbar.vue'
import TasksHeader from './index/TasksHeader.vue'
import TasksFilters from './index/TasksFilters.vue'
import TasksList from './index/TasksList.vue'
import TaskModal from './index/TaskModal.vue'
import ChatWidget from './index/ChatWidget.vue'
  
  // Estado
  const tasks = ref([])
  const loading = ref(true)
  const showAddTask = ref(false)
  const editingTask = ref(null)
  const selectedCategory = ref('')
  const selectedStatus = ref('')
  const user = ref({ name: 'Usuario' })
  
  const taskForm = ref({
    title: '',
    description: '',
    category: 'personal',
    status: 'pendiente'
  })
  
  // Computed
  const filteredTasks = computed(() => {
    let filtered = tasks.value
    if (selectedCategory.value) filtered = filtered.filter(t => t.prioridad === selectedCategory.value)
    if (selectedStatus.value) filtered = filtered.filter(t => t.estado === selectedStatus.value)
    return filtered
  })
  
  // Métodos
  const loadTasks = async () => {
    loading.value = true
    try {
      const response = await fetch('http://127.0.0.1:8000/api/tasks')
      if (response.ok) {
        const data = await response.json()
        tasks.value = data
      } else {
        console.error('Error al cargar tareas')
        tasks.value = []
      }
    } catch (error) {
      console.error('Error:', error)
      tasks.value = []
    } finally {
      loading.value = false
    }
  }
  
  const saveTask = async () => {
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
      
      if (editingTask.value) {
        // Actualizar tarea existente
        const response = await fetch(`http://127.0.0.1:8000/api/tasks/${editingTask.value.task_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
          },
          body: JSON.stringify({
            titulo: taskForm.value.title,
            descripcion: taskForm.value.description,
            prioridad: taskForm.value.category,
            estado: taskForm.value.status
          })
        })
        
        if (response.ok) {
          await loadTasks() // Recargar tareas
        }
      } else {
        // Crear nueva tarea
        const response = await fetch('http://127.0.0.1:8000/api/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
          },
          body: JSON.stringify({
            user_id: user.value.id || 'temp-user-id', // Temporal hasta implementar auth
            titulo: taskForm.value.title,
            descripcion: taskForm.value.description,
            prioridad: taskForm.value.category,
            estado: taskForm.value.status
          })
        })
        
        if (response.ok) {
          await loadTasks() // Recargar tareas
        }
      }
      
      closeModal()
      resetForm()
    } catch (error) {
      console.error('Error al guardar tarea:', error)
    }
  }
  
  const editTask = (task) => {
    editingTask.value = task
    taskForm.value = { 
      title: task.titulo,
      description: task.descripcion,
      category: task.prioridad,
      status: task.estado
    }
    showAddTask.value = false
  }
  
  const deleteTask = async (taskId) => {
    if (confirm('¿Eliminar tarea?')) {
      try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
        
        const response = await fetch(`/api/tasks/${taskId}`, {
          method: 'DELETE',
          headers: {
            'X-CSRF-TOKEN': csrfToken
          }
        })
        
        if (response.ok) {
          await loadTasks() // Recargar tareas
        }
      } catch (error) {
        console.error('Error al eliminar tarea:', error)
      }
    }
  }
  
  const updateTaskStatus = async (task) => {
    const order = ['pendiente', 'en progreso', 'completada']
    const currentIndex = order.indexOf(task.estado)
    const newStatus = order[(currentIndex + 1) % order.length]
    
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
      
      const response = await fetch(`/api/tasks/${task.task_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify({
          estado: newStatus
        })
      })
      
      if (response.ok) {
        task.estado = newStatus
      }
    } catch (error) {
      console.error('Error al actualizar estado:', error)
    }
  }
  
  const closeModal = () => {
    showAddTask.value = false
    editingTask.value = null
    resetForm()
  }
  
  const resetForm = () => {
    taskForm.value = { title: '', description: '', category: 'personal', status: 'pendiente' }
  }
  
  const filterTasks = () => {}
  const logout = () => alert('Cerrar sesión')
  
  onMounted(loadTasks)
  </script>
  