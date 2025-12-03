<template>
  <div class="chat-widget">
    <!-- Botón flotante del chat -->
    <div 
      v-if="!isOpen" 
      @click="toggleChat" 
      class="chat-toggle"
    >
      <div class="chat-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      </div>
    </div>

    <!-- Ventana del chat -->
    <div v-if="isOpen" class="chat-window">
      <!-- Header del chat -->
      <div class="chat-header">
        <div class="chat-avatar">
          <div class="avatar-icon">🤖</div>
        </div>
        <div class="chat-info">
          <h4>Asistente IA</h4>
          <span class="status">En línea</span>
        </div>
        <button @click="toggleChat" class="close-btn">×</button>
      </div>

      <!-- Mensajes -->
      <div class="chat-messages" ref="messagesContainer">
        <div 
          v-for="message in messages" 
          :key="message.id"
          class="message"
          :class="message.type"
        >
          <div class="message-content">
            <div v-if="message.type === 'bot'" class="message-avatar">
              🤖
            </div>
            <div class="message-bubble">
              <div class="message-text">{{ message.text }}</div>
              <div class="message-time">{{ formatTime(message.timestamp) }}</div>
            </div>
          </div>
        </div>
        
        <!-- Indicador de escritura -->
        <div v-if="isTyping" class="typing-indicator">
          <div class="typing-avatar">🤖</div>
          <div class="typing-bubble">
            <div class="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Input del chat -->
      <div class="chat-input">
        <form @submit.prevent="sendMessage">
          <div class="input-group">
            <input 
              v-model="newMessage"
              type="text"
              placeholder="Escribe tu mensaje..."
              :disabled="isLoading"
              class="message-input"
            />
            <button 
              type="submit" 
              :disabled="!newMessage.trim() || isLoading"
              class="send-btn"
            >
              <svg v-if="!isLoading" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
              <div v-else class="loading-spinner"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, nextTick, onMounted } from 'vue';

export default {
  name: 'ChatWidget',
  setup() {
    const isOpen = ref(false);
    const newMessage = ref('');
    const messages = ref([]);
    const isLoading = ref(false);
    const isTyping = ref(false);
    const messagesContainer = ref(null);

    // Mensaje de bienvenida
    const welcomeMessage = {
      id: 1,
      type: 'bot',
      text: '¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date()
    };

    onMounted(() => {
      messages.value.push(welcomeMessage);
    });

    const toggleChat = () => {
      isOpen.value = !isOpen.value;
      if (isOpen.value) {
        nextTick(() => {
          scrollToBottom();
        });
      }
    };

    const sendMessage = async () => {
      if (!newMessage.value.trim() || isLoading.value) return;

      const userMessage = {
        id: Date.now(),
        type: 'user',
        text: newMessage.value,
        timestamp: new Date()
      };

      messages.value.push(userMessage);
      const messageText = newMessage.value;
      newMessage.value = '';
      
      // Mostrar indicador de escritura
      isLoading.value = true;
      isTyping.value = true;
      
      nextTick(() => {
        scrollToBottom();
      });

      try {
        // Simular llamada a ChatGPT API
        const response = await callChatGPT(messageText);
        
        // Remover indicador de escritura
        isTyping.value = false;
        
        const botMessage = {
          id: Date.now() + 1,
          type: 'bot',
          text: response,
          timestamp: new Date()
        };

        messages.value.push(botMessage);
        
        nextTick(() => {
          scrollToBottom();
        });
      } catch (error) {
        console.error('Error enviando mensaje:', error);
        isTyping.value = false;
        
        const errorMessage = {
          id: Date.now() + 1,
          type: 'bot',
          text: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo.',
          timestamp: new Date()
        };

        messages.value.push(errorMessage);
        
        nextTick(() => {
          scrollToBottom();
        });
      } finally {
        isLoading.value = false;
      }
    };

    const callChatGPT = async (message) => {
  const response = await fetch('http://127.0.0.1:8000/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data.response) {
    return data.response;
  } else {
    throw new Error(data.error || 'Error en el servidor');
  }
};


    const scrollToBottom = () => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
      }
    };

    const formatTime = (timestamp) => {
      return timestamp.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    };

    return {
      isOpen,
      newMessage,
      messages,
      isLoading,
      isTyping,
      messagesContainer,
      toggleChat,
      sendMessage,
      formatTime
    };
  }
};
</script>
