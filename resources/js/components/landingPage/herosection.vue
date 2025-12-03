<template>
  <main class="hero-section">
    <section class="hero-body">
      <div class="hero-copy">
        <h1 class="hero-title">Venta Y alquiler de maquinaria</h1>
        <p class="hero-description">
         En <strong>Maquinaria Cortes CQ SAS </strong> somos especialistas en plataformas elevadoras, manlift y tijeras eléctricas para trabajos seguros y eficientes en altura. Confía en nosotros para impulsar tus proyectos con equipos de calidad y soporte técnico confiable.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-outline" @click="$emit('scrollToSection', 'servicios')">
            Conoce Servicios
          </button>
          <button class="btn btn-primary" @click="$emit('scrollToSection', 'contacto')">
            Descargar Catálogo PDF
          </button>
        </div>
      </div>

      <div class="hero-visual">
        <img 
          :src="mainliftUrl" 
          alt="Plataforma elevadora tipo brazo articulado - Maquinaria Cortes CQ SAS" 
          class="hero-image"
          loading="eager"
          fetchpriority="high"
          width="400"
          height="300"
          
        >
      </div>
    </section>

    <footer class="hero-footer">
    </footer>
  </main>
</template>

<script setup>

import mainliftUrl from '../../../img/image (2).png' // imagen de la mainlift


</script>

