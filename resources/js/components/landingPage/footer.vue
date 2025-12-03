<template>
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="brand-logo">
          <div class="brand-text">
            <p class="brand-name">Maquinaria Cortes</p>
            <p class="brand-tagline">CQ S.A.S</p>
          </div>
        </div>
        <p class="brand-description">
          Especialistas en plataformas elevadoras, manlift y tijeras eléctricas para trabajos seguros y eficientes en altura. 
          Venta y alquiler de maquinaria de calidad con soporte técnico confiable.
        </p>
      </div>

      <div class="footer-links">
        <h4>Secciones</h4>
        <ul>
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#documentacion">Documentación</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h4>Contacto</h4>
        <ul>
          <li><strong>Teléfono:</strong> +57 313 288 6752</li>
          <li><strong>WhatsApp:</strong> +57 313 288 6752</li>
          <li><strong>Email:</strong> Maquineryexpo@gmail.com</li>
          <li><strong>Dirección:</strong> Calle 37 Sur #72A-03 · Barrio Carvajal · Bogotá</li>
          <li><strong>Horario:</strong> Lunes a viernes · 8:00 a.m. - 5:00 p.m.</li>
        </ul>
      </div>

      <div class="footer-newsletter">
        <div class="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
            <i class="ri-facebook-circle-fill"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
            <i class="ri-instagram-fill"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
            <i class="ri-youtube-fill"></i>
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener" aria-label="TikTok">
            <i class="ri-tiktok-fill"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ currentYear }} Maquinaria Cortes CQ S.A.S — Todos los derechos reservados.</p>
      <div class="footer-legal">
        <a href="#politica">Política de privacidad</a>
        <span>·</span>
        <a href="#terminos">Términos y condiciones</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background: linear-gradient(145deg, #061e43 0%, #0a3573 100%);
  color: #e2e8f0;
  padding: 4.5rem 1.75rem 2.5rem;
  margin-top: 4rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(1.75rem, 3vw, 3rem);
  max-width: 1200px;
  margin: 0 auto 2.5rem;
}

.footer h4 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #f8fafc;
  letter-spacing: 0.02em;
}

.footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer a:hover {
  color: #60a5fa;
  transform: translateX(2px);
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1rem;
}

.brand-icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(59, 130, 246, 0.2);
  display: grid;
  place-items: center;
  font-weight: 700;
  color: #93c5fd;
  letter-spacing: 0.08em;
}

.brand-name {
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0;
}

.brand-tagline {
  margin: 0;
  color: rgba(226, 232, 240, 0.75);
  font-size: 0.95rem;
}

.brand-description {
  margin: 0;
  line-height: 1.7;
  color: rgba(226, 232, 240, 0.85);
}

.footer-contact ul li,
.footer-links ul li {
  font-size: 0.98rem;
  line-height: 1.5;
  color: rgba(226, 232, 240, 0.9);
}

.footer-contact strong {
  font-weight: 600;
  color: #f8fafc;
}

.footer-newsletter p {
  margin: 0 0 1rem;
  color: rgba(226, 232, 240, 0.85);
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.newsletter-form input {
  border: none;
  border-radius: 999px;
  padding: 0.75rem 1.25rem;
  background: rgba(15, 23, 42, 0.35);
  color: #f8fafc;
  font-size: 0.95rem;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.newsletter-form input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.35);
}

.newsletter-form button {
  border: none;
  border-radius: 999px;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(37, 99, 235, 0.95));
  color: #f8fafc;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 15px 30px -18px rgba(59, 130, 246, 0.75);
}

.newsletter-form button:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 30px -14px rgba(37, 99, 235, 0.8);
}

.footer-social {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.footer-social a {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.4);
  display: grid;
  place-items: center;
  color: #cbd5f5;
  font-size: 1.3rem;
  transition: transform 0.2s ease, background 0.2s ease;
}

.footer-social a:hover {
  transform: translateY(-2px);
  background: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
}

.footer-bottom {
  border-top: 1px solid rgba(148, 163, 184, 0.3);
  margin-top: 2rem;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  color: rgba(226, 232, 240, 0.75);
  font-size: 0.92rem;
}

.footer-legal {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.footer-legal span {
  color: rgba(226, 232, 240, 0.45);
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 3.5rem 1.25rem 2rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .brand-logo {
    align-items: flex-start;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>