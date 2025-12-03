<template>
  <section id="contacto" class="contact-section">
    <div class="contact-wrapper">
      <div class="contact-copy">
        <p class="contact-eyebrow">nuestro contacto</p>
        <h2 class="contact-title">Habla con nosotros</h2>
        <ul class="contact-list">
          <li><strong>Dirección:</strong> Calle 37 Sur #72A-03 · Barrio Carvajal · Bogotá</li>
          <li><strong>Whatsapp:</strong> +57 313 288 6752</li>
          <li><strong>telefono:</strong> +57 313 288 6752</li>
          <li><strong>Email:</strong> maquinariaaracortes@gmail.com</li>
          <li><strong>Horario:</strong> Lunes a viernes · 8:00 a.m. - 5:00 p.m.</li>
        </ul>
        <a href="/contacto" target="_blank" rel="noopener" class="contact-button">
          envianos un correo
        </a>
      </div>
      
      <div class="contact-map">
        <iframe
          width="100%"
          height="450"
          style="border:0;"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          title="Ubicación de Maquinaria Cortes CQ SAS - Calle 37 Sur #72A-03, Barrio Carvajal, Bogotá"
          src="https://www.google.com/maps?q=Cl+37+Sur+%2372a-03,+Bogotá&output=embed">
        </iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.contact-section {
  padding: 4rem 1.5rem;
  /* Mantenemos el fondo */
  background: linear-gradient(145deg, #0b3b88 0%, #052b63 100%);
  color: #f8fafc;
}

.contact-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(15, 23, 42, 0.15);
  border-radius: 24px;
  
  /* CAMBIOS CLAVE: Mobile First - Una sola columna por defecto */
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  
  padding: 3rem clamp(2rem, 5vw, 3.5rem);
  align-items: start;
  box-shadow: 0 30px 60px -40px rgba(15, 23, 42, 0.65);
}

/* Eliminamos la regla 'grid-column: 1 / -1;' para .contact-map */
/* ya que es lo que lo obligaba a tomar el 100% */

/* Media Query para escritorio (768px es un buen punto de quiebre) */
@media (min-width: 768px) {
  .contact-wrapper {
    /* Escritorio: Cambiamos a dos columnas (lado a lado) */
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}

.contact-copy {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
}

.contact-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 600;
  color: rgba(224, 231, 255, 0.8);
  margin-bottom: -0.25rem;
}

.contact-title {
  font-size: clamp(2rem, 3vw, 2.6rem);
  font-weight: 700;
  margin: 0;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  font-size: 1.05rem;
  line-height: 1.6;
}

.contact-list strong {
  font-weight: 700;
  color: #f1f5f9;
  display: inline-block;
  min-width: 6.2rem;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.95), rgba(59, 130, 246, 0.95));
  color: #f8fafc;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  width: fit-content;
  box-shadow: 0 18px 32px -18px rgba(59, 130, 246, 0.65);
}


.contact-map {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px -30px rgba(15, 23, 42, 0.6);
}

.contact-map::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), transparent 65%);
  pointer-events: none;
}
</style>