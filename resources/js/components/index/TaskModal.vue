<template>
  <div v-if="visible" class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3>{{ editing ? 'Editar Tarea' : 'Nueva Tarea' }}</h3>
        <button @click="$emit('close')" class="close-btn">×</button>
      </div>
      
      <form @submit.prevent="$emit('save')" class="modal-form">
        <div class="form-group">
          <label>Título</label>
          <input 
            v-model="localForm.title" 
            type="text" 
            required 
            placeholder="Título de la tarea"
          />
        </div>
        
        <div class="form-group">
          <label>Descripción</label>
          <textarea 
            v-model="localForm.description" 
            placeholder="Descripción de la tarea"
            rows="3"
          ></textarea>
        </div>
        
        <div class="form-group">
          <label>Categoría</label>
          <select v-model="localForm.category">
            <option value="trabajo">Trabajo</option>
            <option value="personal">Personal</option>
            <option value="estudio">Estudio</option>
            <option value="hogar">Hogar</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>Estado</label>
          <select v-model="localForm.status">
            <option value="pendiente">Pendiente</option>
            <option value="en_progreso">En Progreso</option>
            <option value="completada">Completada</option>
          </select>
        </div>
        
        <div class="modal-actions">
          <button type="button" @click="$emit('close')" class="btn-cancel">Cancelar</button>
          <button type="submit" class="btn-save">{{ editing ? 'Actualizar' : 'Crear' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  visible: Boolean,
  editing: Boolean,
  form: Object
})

defineEmits(['close', 'save'])

const localForm = ref({ ...props.form })

watch(() => props.form, (newForm) => {
  localForm.value = { ...newForm }
}, { deep: true })
</script>