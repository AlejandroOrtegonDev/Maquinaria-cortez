<template>
  <div id="telehandler" class="machine-page">
    <Navbar />

    <main class="machine-main">
      <section class="machine-hero">
        <div class="hero-content">
          <span class="eyebrow">Nuestros Modelos</span>
          <h1>Manipulador telescópico (Telehandler)</h1>
          <p class="hero-description">
            Equipos con brazo telescópico para levantar y transportar cargas a gran altura o distancia. 
            Perfectos para construcción, almacenamiento y proyectos que requieren alcance vertical y horizontal.
          </p>
        </div>
        <div class="hero-image">
          <img 
            :src="telehandlerImage" 
            alt="Manipulador telescópico - Maquinaria Cortes CQ SAS" 
            loading="eager"
            fetchpriority="high"
            width="500"
            height="400"
            decoding="async"
          />
        </div>
      </section>

      <section class="models-section">
        <div class="section-heading">
          <h2>Modelos Disponibles</h2>
          <p>Selecciona el modelo que mejor se adapte a tus necesidades</p>
        </div>

        <div class="models-grid">
          <div v-for="model in models" :key="model.id" class="model-card">
            <div class="model-image">
              <img 
                :src="model.image" 
                :alt="model.name + ' - Maquinaria Cortes CQ SAS'" 
                loading="lazy"
                width="300"
                height="220"
                decoding="async"
              />
            </div>
            <div class="model-content">
              <h3>{{ model.name }}</h3>
              <p class="model-description">{{ model.description }}</p>
              <ul class="model-specs">
                <li v-for="spec in model.specs" :key="spec">
                  <span class="spec-icon">✓</span>
                  {{ spec }}
                </li>
              </ul>
              <div class="model-actions">
                <a :href="whatsappUrl" target="_blank" class="btn-contact">
                  Consultar Disponibilidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features-section">
        <div class="section-heading">
          <h2>Características Principales</h2>
        </div>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import Navbar from '../globlal/Navbar.vue'
import Footer from '../landingPage/footer.vue'
import WhatsAppButton from '../globlal/WhatsAppButton.vue'
import telehandlerImage from '../../../img/Manipulador-telescópico.png'

const phoneNumber = '573001234567'
const defaultMessage = encodeURIComponent('Hola, me interesa información sobre Manipuladores telescópicos (Telehandler).')
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`

const models =[
  {
    "id": 1,
    "brand": "JCB",
    "type": "Diésel",
    "name": "JCB Loadall 540-170",
    "description": "Manipulador telescópico de gran alcance, ideal para construcción y carga en altura.",
    "image": telehandlerImage,
    "specs": [
      "Altura máxima: 17 metros",
      "Capacidad de carga: 4 toneladas",
      "Motor: Diésel",
      "Uso: Construcción y logística en obra"
    ]
  },
  {
    "id": 2,
    "brand": "Manitou",
    "type": "Diésel",
    "name": "Manitou MT 1840",
    "description": "Telehandler robusto con excelente estabilidad para trabajos pesados.",
    "image": telehandlerImage,
    "specs": [
      "Altura máxima: 18 metros",
      "Capacidad de carga: 4 toneladas",
      "Motor: Diésel",
      "Uso: Obras de gran altura y manipulación de materiales"
    ]
  },
  {
    "id": 3,
    "brand": "Bobcat",
    "type": "Compacto",
    "name": "Bobcat T40.180SLP",
    "description": "Modelo compacto con gran alcance, ideal para obras con espacio limitado.",
    "image": telehandlerImage,
    "specs": [
      "Altura máxima: 18 metros",
      "Capacidad de carga: 4 toneladas",
      "Motor: Diésel",
      "Uso: Construcción en espacios reducidos"
    ]
  },
  {
    "id": 4,
    "brand": "Merlo",
    "type": "Eléctrico",
    "name": "Merlo eWorker 25.5",
    "description": "Telehandler totalmente eléctrico, cero emisiones y silencioso.",
    "image": telehandlerImage,
    "specs": [
      "Altura máxima: 5 metros",
      "Capacidad de carga: 2.5 toneladas",
      "Motor: Eléctrico",
      "Uso: Interiores, bodegas y zonas urbanas"
    ]
  },
  {
    "id": 5,
    "brand": "CAT",
    "type": "Diésel",
    "name": "CAT TH417D",
    "description": "Manipulador telescópico versátil para obras generales y tareas pesadas.",
    "image": telehandlerImage,
    "specs": [
      "Altura máxima: 17 metros",
      "Capacidad de carga: 4 toneladas",
      "Motor: Diésel",
      "Uso: Construcción, agricultura y minería ligera"
    ]
  }
]
</script>

<style scoped>
.machine-page {
  min-height: 100vh;
  background: #ffffff;
  color: #1d1d1f;
  font-family: 'Figtree', system-ui, sans-serif;
}

.machine-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 5vw, 5rem);
}

.machine-hero {
  display: flex;
  gap: clamp(2rem, 4vw, 5rem);
  align-items: center;
  flex-wrap: wrap;
}

.hero-content {
  flex: 1 1 400px;
}

.eyebrow {
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: rgba(29, 29, 31, 0.6);
  display: block;
  margin-bottom: 1rem;
}

.machine-hero h1 {
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  margin: 0.75rem 0 1rem;
  line-height: 1.15;
  color: #1d1d1f;
}

.hero-description {
  color: rgba(29, 29, 31, 0.85);
  line-height: 1.7;
  font-size: 1.1rem;
}

.hero-image {
  flex: 1 1 320px;
}

.hero-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 1.5rem;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
}

.models-section,
.features-section {
  background: #f5f5f7;
  border-radius: 1.5rem;
  padding: clamp(2rem, 4vw, 3rem);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.section-heading {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-heading h2 {
  font-size: clamp(2rem, 3vw, 2.5rem);
  margin: 0 0 0.75rem;
  color: #1d1d1f;
}

.section-heading p {
  color: rgba(29, 29, 31, 0.78);
  font-size: 1.1rem;
  margin: 0;
}

.models-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.model-card {
  background: #ffffff;
  border-radius: 1.25rem;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.model-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.model-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #f5f5f7;
}

.model-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.model-content {
  padding: 1.75rem;
}

.model-content h3 {
  font-size: 1.5rem;
  margin: 0 0 0.75rem;
  color: #d4a574;
}

.model-description {
  color: rgba(29, 29, 31, 0.85);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.model-specs {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.model-specs li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(29, 29, 31, 0.9);
  font-size: 0.95rem;
}

.spec-icon {
  color: #d4a574;
  font-weight: bold;
  font-size: 1.1rem;
}

.btn-contact {
  display: inline-block;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #d4a574, #b8935f);
  color: #041f49;
  text-decoration: none;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
  width: 100%;
}

.btn-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212, 165, 116, 0.4);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin: 0 0 0.75rem;
  color: #d4a574;
}

.feature-card p {
  color: rgba(29, 29, 31, 0.85);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .machine-hero {
    flex-direction: column;
  }

  .models-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>