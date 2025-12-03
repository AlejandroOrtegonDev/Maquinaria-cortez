<template>
  <section id="servicios" class="services-section">
    <div class="services-container">
      <p class="services-eyebrow">nuestras maquinas</p>
      <h2 class="services-title">Te ofrecemos más que solo equipos; te brindamos un servicio integral que garantiza el éxito de tu obra.</h2>
      <!-- Eliminamos el div 'services-grid-wrapper' que forzaba el scroll horizontal -->
      <div class="services-grid">
        <a v-for="service in services" :key="service.title" :href="service.href" class="service-card">
          <div class="service-image">
            <img 
              :src="service.image" 
              :alt="service.title"
              loading="lazy"
              width="300"
              height="220"
              decoding="async"
            >
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </a>
      </div>
      
      <!-- Nuevo botón "Ver más catálogo" -->
      <div class="button-wrapper">
        <a href="/catalogo" class="catalog-button">
          Ver más catálogo
        </a>
      </div>
      <!-- Fin del nuevo botón -->

    </div>
  </section>
</template>

<script setup>
import mainliftImage from '../../../img/mainlift.png'
import minicargadorImg from '../../../img/miniretroexcavador.png'
import RetroexcavadoraImg from '../../../img/Retroexcavadora.png'
import ManipuladortelescópicoImg from '../../../img/Manipulador-telescópico.png'
import PlataformaElevadoraImg from '../../../img/PlataformaElevadora.png'

const services = [
  {
    image: mainliftImage,
    title: 'Plataforma elevadora tipo brazo articulado (Manlift Articulado / Boom Lift)',
    description: 'Sirve para trabajos en altura en exteriores, con brazo articulado.',
    href: '/manlift-articulado'
  },
  {
    image: minicargadorImg,
    title: 'Minicargador (Skid Steer Loader)',
    description: 'Máquina compacta para cargar material, nivelar, mover tierra, etc.',
    href: '/minicargador'
  },
  {
    image: RetroexcavadoraImg,
    title: 'Retroexcavadora (Backhoe Loader)',
    description: 'Máquina con pala delantera y brazo excavador trasero.',
    href: '/retroexcavadora'
  },
  {
    image: ManipuladortelescópicoImg,
    title: 'Manipulador telescópico (Telehandler)',
    description: 'Tiene un brazo telescópico para levantar cargas a gran altura o distancia.',
    href: '/telehandler'
  },
  {
    image: PlataformaElevadoraImg,
    title: 'Plataforma elevadora tipo tijera (Scissor Lift)',
    description: 'Elevación vertical para trabajos en altura en interiores/exteriores.',
    href: '/scissor-lift'
  }
]
</script>

<style scoped>
.services-section {
  padding: 5rem 1.5rem 4rem;
  background: #f6f7fb;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.services-eyebrow {
  display: inline-block;
  padding: 0.3rem 1rem;
  border-radius: 999px;
  background: rgba(220, 38, 38, 0.08);
  color: #dc2626;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.services-title {
  font-size: clamp(2.2rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #111827;
  margin: 0;
}

/* Eliminamos el .services-grid-wrapper que forzaba el scroll horizontal */


/* RESTAURAMOS EL GRID RESPONSIVO PARA MÓVIL/TABLET */
.services-grid {
  margin-top: 3rem;
  display: grid;
  /* El auto-fit/minmax permite que se apilen en 1 o 2 columnas automáticamente */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); 
  gap: 1.75rem;
  padding-bottom: 4rem; /* Añadimos espacio debajo del grid para el botón */
}

.service-card {
  /* Eliminamos el min-width y flex-shrink ya que el grid ahora maneja el tamaño */
  
  background: #ffffff;
  border-radius: 22px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  box-shadow: 0 25px 45px -35px rgba(15, 23, 42, 0.25);
  border: 1px solid rgba(203, 213, 225, 0.35);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  text-align: center;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
}

.service-card h3,
.service-card p {
  padding: 0 1.75rem;
}

.service-card h3 {
  padding-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.service-card p {
  padding-bottom: 2.25rem;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 32px 55px -34px rgba(59, 130, 246, 0.35);
  border-color: rgba(59, 130, 246, 0.45);
}

.service-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  line-height: 1.4;
}

.service-card p {
  color: #4b5563;
  line-height: 1.55;
  margin: 0;
  font-size: 0.97rem;
}

/* Estilos para el nuevo botón */
.button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: -2.5rem; /* Subimos un poco el botón para que quede mejor centrado con el contenido */
}

.catalog-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 2.2rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #0b3b88, #052b63); /* Color de fondo fuerte */
  color: #f6f7fb;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  width: fit-content;
  box-shadow: 0 18px 32px -18px rgba(15, 23, 42, 0.5);
  border: 2px solid #0b3b88;
  transition: all 0.2s ease;
}

.catalog-button:hover {
    background: linear-gradient(135deg, #052b63, #0b3b88);
    transform: translateY(-2px);
    box-shadow: 0 20px 35px -15px rgba(15, 23, 42, 0.65);
}


/* Ajustes de responsividad */
@media (min-width: 1200px) {
    /* Forzamos 5 columnas iguales en escritorio para que todas queden en una fila y centradas */
    .services-grid {
        grid-template-columns: repeat(5, 1fr); 
        width: 100%;
        padding: 0 0 4rem 0; /* Aseguramos padding solo en la parte de abajo */
    }
}

@media (max-width: 768px) {
  .services-grid {
    gap: 1.4rem;
  }

  .service-card h3,
  .service-card p {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  .service-card p {
    padding-bottom: 1.9rem;
  }
}

@media (max-width: 540px) {
  .services-section {
    padding: 4.25rem 1.25rem 3.5rem;
  }
  
  .services-title {
    font-size: 2rem;
  }
}
</style>