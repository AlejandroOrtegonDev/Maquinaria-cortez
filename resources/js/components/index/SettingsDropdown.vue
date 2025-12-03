<template>
  <div class="settings-dropdown" ref="dropdownRef">
    <button 
      @click="toggleDropdown" 
      class="settings-btn"
      :class="{ 'active': isOpen }"
    >
      Configuraciones
    </button>
    
    <div v-if="isOpen" class="dropdown-content" @click.stop>
      <div class="settings-section">
        <h4>Configuración de API</h4>
        <p class="section-description">
          Configura tu API key de OpenAI para usar el asistente de IA
        </p>
        
        <div class="form-group">
          <label for="apiKey">OpenAI API Key</label>
          <div class="input-group">
            <input 
              id="apiKey"
              v-model="apiKey"
              type="password"
              placeholder="sk-..."
              class="api-key-input"
              :class="{ 'error': apiKeyError }"
            />
            <button 
              @click="toggleApiKeyVisibility" 
              type="button"
              class="toggle-visibility-btn"
            >
              {{ showApiKey ? 'Ocultar' : 'Ver' }}
            </button>
          </div>
          <div v-if="apiKeyError" class="error-message">{{ apiKeyError }}</div>
          <div v-if="apiKeySuccess" class="success-message">{{ apiKeySuccess }}</div>
        </div>
        
        <div class="form-group">
          <label for="apiUrl">
            Consigue tu key aquí: 
            <a href="https://platform.openai.com/account/api-keys" target="_blank" class="api-link">
              https://platform.openai.com/account/api-keys
            </a>
          </label>
        </div>
        
      </div>
      
      <div class="dropdown-footer">
        <button 
          @click="saveAllSettings" 
          :disabled="!apiKey.trim() || saving || testing"
          class="btn-save-all"
        >
          <span v-if="saving">Guardando API Key...</span>
          <span v-else-if="testing">Probando Conexión...</span>
          <span v-else>Guardar Todo</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const dropdownRef = ref(null)
const apiKey = ref('')
const showApiKey = ref(false)
const apiKeyError = ref('')
const apiKeySuccess = ref('')
const saving = ref(false)
const testing = ref(false)
const apiStatus = ref('unknown')
const apiStatusText = ref('Desconocido')

const settings = reactive({
  autoSave: true,
  notifications: false,
  darkMode: false
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const toggleApiKeyVisibility = () => {
  showApiKey.value = !showApiKey.value
  const input = document.getElementById('apiKey')
  if (input) {
    input.type = showApiKey.value ? 'text' : 'password'
  }
}


const saveAllSettings = async () => {
  if (!apiKey.value.trim()) {
    apiKeyError.value = 'Por favor ingresa tu API key'
    return
  }

  saving.value = true
  apiKeyError.value = ''
  apiKeySuccess.value = ''

  try {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
    
    // Primero guardar la API key
    const saveResponse = await fetch('http://127.0.0.1:8000/api/settings/api-key', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken
      },
      body: JSON.stringify({ api_key: apiKey.value })
    })

    const saveData = await saveResponse.json()

    if (!saveResponse.ok) {
      throw new Error(saveData.message || 'Error al guardar la API key')
    }

    // Luego probar la conexión
    testing.value = true
    const testResponse = await fetch('http://127.0.0.1:8000/api/chat/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken
      },
      // El backend toma la API key desde .env. Solo enviamos un mensaje.
      body: JSON.stringify({ 
        message: 'Hola'
      })
    })

    const testData = await testResponse.json()

    if (testResponse.ok) {
      apiKeySuccess.value = 'API key guardada y conexión exitosa'
      apiStatus.value = 'connected'
      apiStatusText.value = 'Conectado'
    } else {
      throw new Error(testData.error || 'Error al probar la conexión')
    }

    // Cerrar el dropdown después de guardar exitosamente
    setTimeout(() => {
      isOpen.value = false
    }, 2000)

  } catch (error) {
    apiKeyError.value = error.message
    apiStatus.value = 'error'
    apiStatusText.value = 'Error'
  } finally {
    saving.value = false
    testing.value = false
  }
}

const loadSettings = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/settings/api-key')
    if (response.ok) {
      const data = await response.json()
      // Solo cargar la API key si existe
      if (data.api_key) {
        apiStatus.value = 'connected'
        apiStatusText.value = 'Conectado'
      }
    }
  } catch {
    console.log('No se pudieron cargar las configuraciones')
  }
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  loadSettings()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.settings-dropdown {
  position: relative;
  display: inline-block;
}

.settings-btn {
  background: rgba(118, 75, 162, 0.8);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.settings-btn:hover {
  background: rgba(118, 75, 162, 1);
  transform: translateY(-1px);
}

.settings-btn.active {
  background: rgba(118, 75, 162, 1);
  box-shadow: 0 4px 12px rgba(118, 75, 162, 0.3);
}

.dropdown-content {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-width: 400px;
  max-width: 500px;
  z-index: 1000;
  margin-top: 8px;
  animation: dropdownSlide 0.2s ease-out;
}

@keyframes dropdownSlide {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.settings-section {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.settings-section h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
}

.section-description {
  margin: 0 0 1rem 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
  font-size: 0.9rem;
}

.api-link {
  color: #667eea;
  text-decoration: none;
  font-size: 0.8rem;
}

.api-link:hover {
  text-decoration: underline;
}

.input-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.api-key-input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: border-color 0.3s ease;
}

.api-key-input:focus {
  outline: none;
  border-color: #667eea;
}

.api-key-input.error {
  border-color: #e74c3c;
}

.toggle-visibility-btn {
  background: #f8f9fa;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.toggle-visibility-btn:hover {
  background: #e9ecef;
  border-color: #667eea;
}

.error-message {
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.success-message {
  color: #27ae60;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}


.dropdown-footer {
  padding: 1rem 1.5rem;
  background: #f8f9fa;
  border-radius: 0 0 12px 12px;
}

.btn-save-all {
  width: 100%;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.btn-save-all:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .dropdown-content {
    min-width: 300px;
    max-width: 350px;
  }
}
</style>
