<template>
   <nav class="navbar">
    <div class="navbar-container">

      <!-- BRAND / LOGO -->
      <a href="/" class="brand-link" @click="closeMobileMenu">
        <div class="logo-container">
          <img src="../../../img/logo.png" alt="Logo Maquinaria Cortes CQ" class="logo-img" />
        </div>
      </a>

    </div>
      <div class="navbar-menu" :class="{ active: mobileMenuActive }">
        <a href="/" class="nav-link" @click="closeMobileMenu">Inicio
        </a>
        
        <div class="nav-accordion">
          <button 
            class="nav-link nav-accordion-toggle" 
            @click.prevent="toggleCatalog"
            :class="{ active: catalogOpen }"
          >
            Catalogo
            <span class="accordion-arrow" :class="{ open: catalogOpen }">▼</span>
          </button>
          <div class="nav-accordion-content" :class="{ open: catalogOpen }">
            <a href="/manlift-articulado" class="nav-accordion-link" @click="closeMobileMenu">Plataforma Elevadora Brazo Articulado</a>
            <a href="/minicargador" class="nav-accordion-link" @click="closeMobileMenu">Minicargador</a>
            <a href="/retroexcavadora" class="nav-accordion-link" @click="closeMobileMenu">Retroexcavadora</a>
            <a href="/telehandler" class="nav-accordion-link" @click="closeMobileMenu">Manipulador Telescópico</a>
            <a href="/scissor-lift" class="nav-accordion-link" @click="closeMobileMenu">Plataforma Elevadora Tipo Tijera</a>
          </div>
        </div>
        
        <a href="#contacto" class="nav-link" @click="closeMobileMenu">Ubicacion</a>
        <a href="/contacto" class="nav-link" @click="closeMobileMenu">Contacto</a>
        <a href="/quienes-somos" class="nav-link" @click="closeMobileMenu">¿Quienes somos?</a>
      </div>
      
      <button
        class="mobile-menu-toggle"
        :class="{ open: mobileMenuActive }"
        @click="toggleMobileMenu"
        type="button"
        aria-label="Alternar menú"
        :aria-expanded="mobileMenuActive.toString()"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    
  </nav>
</template>

<script>
import { ref } from 'vue';
import logo from '../../../img/logo.png'

export default {
  name: 'Navbar',
  setup() {
    const mobileMenuActive = ref(false);
    const catalogOpen = ref(false);

    const toggleMobileMenu = () => {
      mobileMenuActive.value = !mobileMenuActive.value;
    };

    const closeMobileMenu = () => {
      mobileMenuActive.value = false;
    };

    const toggleCatalog = () => {
      catalogOpen.value = !catalogOpen.value;
    };

    return {
      mobileMenuActive,
      catalogOpen,
      toggleMobileMenu,
      closeMobileMenu,
      toggleCatalog
    };
  }
};
</script>
