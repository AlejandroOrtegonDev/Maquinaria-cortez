<template>
  <div id="quienes-somos" class="about-page">
    <Navbar />

    <main class="about-main">
      <section class="about-hero">
        <div class="hero-text">
          <span class="eyebrow">Quiénes somos</span>
          <h1>Impulsamos proyectos seguros y eficientes en altura</h1>
          <p>
            Somos un equipo apasionado por la logística y la seguridad industrial.
            Ayudamos a empresas de todo el país a ejecutar trabajos en altura con
            maquinaria moderna, soporte técnico cercano y acompañamiento continuo.
          </p>

          <ul class="hero-stats">
            <li v-for="stat in stats" :key="stat.label">
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </li>
          </ul>
        </div>

        <div class="hero-media">
          <img :src="mainliftUrl" alt="Plataforma elevadora" loading="lazy" />
          <div class="media-card">
            <p>Atendemos proyectos de construcción, energía, logística y eventos.</p>
            <ul>
              <li>Diagnóstico personalizado</li>
              <li>Capacitación de operarios</li>
              <li>Servicio técnico en sitio</li>
            </ul>
          </div>
        </div>
      </section>

      <Description />

      <section class="mission-vision-section">
        <div class="mission-vision-grid">
          <article class="mission-vision-card">
            <h2 class="mission-vision-title">Nuestra Misión</h2>
            <p class="mission-vision-text">
              Nuestra misión es brindar a nuestros clientes las herramientas y el apoyo necesarios para realizar trabajos en altura de manera segura, eficiente y confiable. Nos esforzamos por ser líderes en el mercado al ofrecer equipos de alta calidad que cumplan con los estándares más exigentes de seguridad y rendimiento.
            </p>
          </article>

          <article class="mission-vision-card">
            <h2 class="mission-vision-title">Nuestra Visión</h2>
            <p class="mission-vision-text">
              Nuestra visión es ser el socio preferido de empresas y profesionales que requieren acceso seguro a áreas elevadas. Buscamos contribuir al éxito de nuestros clientes al proporcionar soluciones confiables y servicios excepcionales que faciliten su trabajo diario.
            </p>
          </article>

          <article class="mission-vision-card">
            <h2 class="mission-vision-title">Nuestros Valores</h2>
            <ul class="values-list">
              <li v-for="value in companyValues" :key="value" class="value-item">
                <span class="value-icon"></span>
                <span>{{ value }}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section class="timeline-section">
        <div class="section-heading">
          <span class="eyebrow">Cómo trabajamos</span>
          <h2>Acompañamiento en cuatro pasos</h2>
        </div>

        <ol class="timeline">
          <li v-for="item in milestones" :key="item.step">
            <div class="timeline-step">{{ item.step }}</div>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.summary }}</p>
            </div>
          </li>
        </ol>
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
import Description from './description.vue'
import mainliftUrl from '../../../img/mainlift.png'

const stats = [
  { label: 'Años de experiencia', value: '+' },
  { label: 'Equipos en operación', value: '+' },
  { label: 'Proyectos acompañados', value: '+' }
]

const values = [
  {
    title: 'Seguridad primero',
    copy: 'Implementamos protocolos estrictos y capacitamos a cada operario antes de iniciar labores.'
  },
  {
    title: 'Disponibilidad real',
    copy: 'Contamos con un inventario amplio que nos permite responder rápido a solicitudes urgentes.'
  },
  {
    title: 'Soporte técnico',
    copy: 'Brindamos mantenimiento preventivo y correctivo para que tus equipos nunca se detengan.'
  }
]

const milestones = [
  { step: '1', title: 'Diagnóstico del proyecto', summary: 'Analizamos el entorno de trabajo, alturas y tiempos de ejecución.' },
  { step: '2', title: 'Selección de equipos', summary: 'Proponemos maquinaria adecuada y planificamos la logística de entrega.' },
  { step: '3', title: 'Capacitación y puesta en marcha', summary: 'Acompañamos la instalación, pruebas y habilitación del personal.' },
  { step: '4', title: 'Soporte continuo', summary: 'Supervisamos el desempeño y respondemos ante cualquier eventualidad.' }
]

const companyValues = [
  'Seguridad',
  'Calidad',
  'Innovación',
  'Atención al cliente',
  'Integridad'
]
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: #041f49;
  color: #f5f5f7;
  font-family: 'Figtree', system-ui, sans-serif;
}

.about-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 5vw, 4rem);
}

.about-hero {
  display: flex;
  gap: clamp(2rem, 4vw, 5rem);
  align-items: center;
  flex-wrap: wrap;
}

.hero-text {
  flex: 1 1 360px;
}

.hero-text h1 {
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  margin: 0.75rem 0 1rem;
  line-height: 1.15;
}

.hero-text p {
  color: rgba(245, 245, 247, 0.85);
  line-height: 1.7;
}

.eyebrow {
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: rgba(245, 245, 247, 0.6);
}

.hero-stats {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.hero-stats li {
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hero-stats strong {
  font-size: 1.75rem;
  display: block;
}

.hero-media {
  flex: 1 1 320px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.hero-media img {
  width: 100%;
  max-width: 460px;
  border-radius: 1.5rem;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
  background: linear-gradient(135deg, rgba(4, 56, 115, 0.8), rgba(13, 107, 201, 0.5));
  padding: 1.5rem;
}

.media-card {
  background: rgba(4, 23, 73, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 360px;
}

.media-card ul {
  margin: 0.75rem 0 0;
  padding-left: 1.25rem;
  color: rgba(245, 245, 247, 0.85);
}

.mission-vision-section {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1.5rem;
  padding: clamp(1.5rem, 4vw, 2.75rem);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.mission-vision-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.mission-vision-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.mission-vision-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.mission-vision-title {
  font-size: clamp(1.5rem, 2.5vw, 1.75rem);
  margin: 0 0 1.25rem 0;
  color: #d4a574;
  font-weight: 600;
}

.mission-vision-text {
  color: rgba(245, 245, 247, 0.85);
  line-height: 1.7;
  margin: 0;
}

.values-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.value-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(245, 245, 247, 0.9);
  font-size: 1rem;
}

.value-icon {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #d4a574;
  border: 2px solid rgba(212, 165, 116, 0.3);
  flex-shrink: 0;
  position: relative;
}

.value-icon::before {
  content: '';
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background: #d4a574;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.values-section,
.timeline-section {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1.5rem;
  padding: clamp(1.5rem, 4vw, 2.75rem);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.section-heading h2 {
  margin: 0.5rem 0 1rem;
  font-size: clamp(2rem, 3vw, 2.5rem);
}

.section-heading p {
  margin: 0;
  color: rgba(245, 245, 247, 0.78);
}

.values-grid {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.value-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.value-card h3 {
  margin-top: 0;
}

.timeline {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: grid;
  gap: 1.25rem;
}

.timeline li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
}

.timeline-step {
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero-media img {
    padding: 1rem;
  }

  .timeline li {
    grid-template-columns: 1fr;
  }

  .mission-vision-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .mission-vision-card {
    padding: 1.5rem;
  }
}

@media (max-width: 600px) {
  .hero-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>