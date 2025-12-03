<template>
  <main>
          <div class="contact-form-wrapper">
        <h3 class="form-title">Envíanos un mensaje</h3>
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Nombre completo</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
              placeholder="Tu nombre"
              :disabled="loading"
            />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
              placeholder="tu@email.com"
              :disabled="loading"
            />
          </div>
          
          <div class="form-group">
            <label for="phone">Teléfono</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
              required 
              placeholder="+57 300 123 4567"
              :disabled="loading"
            />
          </div>
          
          <div class="form-group">
            <label for="subject">Asunto</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject" 
              required 
              placeholder="¿En qué podemos ayudarte?"
              :disabled="loading"
            />
          </div>
          
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required 
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
              :disabled="loading"
            ></textarea>
          </div>
          
          <button type="submit" class="submit-button" :disabled="loading">
            <span v-if="loading">Enviando...</span>
            <span v-else>Enviar mensaje</span>
          </button>
          
          <div v-if="successMessage" class="success-message">
            {{ successMessage }}
          </div>
          
          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>
        </form>
      </div>
</main>
</template>



<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const handleSubmit = async () => {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
      },
      body: JSON.stringify(form.value)
    })
    
    const data = await response.json()
    
    if (response.ok) {
      successMessage.value = '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.'
      form.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
      setTimeout(() => {
        successMessage.value = ''
      }, 5000)
    } else {
      errorMessage.value = data.message || 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      setTimeout(() => {
        errorMessage.value = ''
      }, 5000)
    }
  } catch (error) {
    errorMessage.value = 'Error de conexión. Por favor, verifica tu conexión e intenta nuevamente.'
    setTimeout(() => {
      errorMessage.value = ''
    }, 5000)
  } finally {
    loading.value = false
  }
}
</script>
<style>
.main{
padding: 10%;
margin: 100%;
}
.contact-form-wrapper {

  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.form-title {
  text-align: center;
  font-size: 1.6rem;
  margin: 1.5rem;
  font-weight: 600;
  color: #222;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.9rem;
  color: #444;
  font-weight: 500;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  background: #fafafa;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  background: #fff;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.25);
}

.submit-button {
  padding: 0.9rem;
  border: none;
  border-radius: 10px;
  background: #3b82f6;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
  font-weight: 600;
}

.submit-button:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.submit-button:disabled {
  background: #9bbcf8;
  cursor: not-allowed;
  transform: none;
}

.success-message,
.error-message {
  margin-top: 1rem;
  padding: 0.9rem;
  border-radius: 10px;
  font-size: 0.95rem;
  text-align: center;
  font-weight: 500;
}

.success-message {
  background: #dcfce7;
  color: #166534;
  border: 1px solid #86efac;
}

.error-message {
  background: #fee2e2;
  color: #b91c1c;
  border: 1px solid #fca5a5;
}

/* RESPONSIVE */
@media (max-width: 480px) {
  .contact-form-wrapper {
    padding: 1.4rem;
  }

  .form-title {
    font-size: 1.4rem;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 0.9rem;
  }
}
</style>
