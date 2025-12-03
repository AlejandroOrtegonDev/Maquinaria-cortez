<template>
  <section id="garantias" class="brands-section">
    <h2 class="brands-title">Nuestras Marcas</h2>

    <div class="brands-grid">
      <img :src="GenieImg" alt="Genie" class="brand-logo" />
      <img :src="skyjack" alt="Skyjack" class="brand-logo" />
      <img :src="jlgImg" alt="JLG" class="brand-logo" />
      <img :src="manitouImg" alt="Manitou" class="brand-logo" />
      <img :src="BobcatImg" alt="Bobcat" class="brand-logo" />
      <img :src="catImg" alt="CAT" class="brand-logo" />
    </div>
  </section>
</template>

<script>
import jlgImg from '../../../img/maquinaria/jlg.png'
import catImg from '../../../img/maquinaria/cat.png'
import GenieImg from '../../../img/maquinaria/genie.png'
import skyjack from '../../../img/maquinaria/Skyjack.png'
import manitouImg from '../../../img/maquinaria/manitou.png'
import BobcatImg from '../../../img/maquinaria/Bobcat.png'

export default {
  data() {
    return {
      jlgImg,
      catImg,
      GenieImg,
      skyjack,
      manitouImg,
      BobcatImg
    }
  }
}
</script>



<style scoped>
.brands-section {
  padding: 60px 20px;
  background: #ffffff;
  text-align: center;
}

.brands-title {
  font-size: 2.2rem;
  margin-bottom: 40px;
  font-weight: 700;
  color: #000000;
}

/* Grid responsivo */
.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  align-items: center;
  justify-items: center;
}

/* Logos */
.brand-logo {
  width: 120px;
  max-width: 100%;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: 0.3s ease;
}

.brand-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}

/* Responsivo */
@media (max-width: 480px) {
  .brands-title {
    font-size: 1.6rem;
  }

  .brand-logo {
    width: 90px;
  }
}
</style>
