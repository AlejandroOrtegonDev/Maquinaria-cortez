<template>
  <section class="description-section">
    <div class="description-card">
      <h2>Equipo comprometido con cada detalle</h2>
      <p>
        Maquinaria Cortes CQ SAS nació con la meta de acercar soluciones
        de maquinaria confiables a empresas de la región Caribe y el resto del país.
        Desde entonces hemos ampliado nuestro catálogo con plataformas articuladas,
        tijeras eléctricas, montacargas y equipos de apoyo que responden a distintas
        industrias.
      </p>
      <p>
        Nuestro enfoque humano nos permite entender las necesidades reales de
        nuestros clientes. No solo entregamos maquinaria: acompañamos la planeación,
        la operación y el mantenimiento para que cada proyecto avance sin contratiempos.
      </p>
    </div>
  </section>
</template>

<style scoped>
.description-section {
  display: flex;
  justify-content: center;
}

.description-card {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 1.5rem;
  padding: clamp(1.5rem, 4vw, 3rem);
  border: 1px solid rgba(255, 255, 255, 0.05);
  max-width: 960px;
  color: rgba(245, 245, 247, 0.9);
  line-height: 1.75;
}

.description-card h2 {
  margin-top: 0;
  font-size: clamp(2rem, 3vw, 2.4rem);
  color: #ffffff;
}

.description-card p + p {
  margin-top: 1rem;
}
</style>
