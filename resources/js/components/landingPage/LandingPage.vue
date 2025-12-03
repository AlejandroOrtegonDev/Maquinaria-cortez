<template>
  <div id="landing-page">
    <Navbar />
    <Hero />
    <Features />
    <Contact />
    <Documentation />
    <Footer/>
    <WhatsAppButton />
  </div>
</template>

<script>
import Navbar from '../globlal/Navbar.vue'
import Hero from './herosection.vue'
import Features from './FeaturesSection.vue'
import Documentation from './document.vue'
import Contact from './contact.vue'
import Footer from './footer.vue'
import WhatsAppButton from '../globlal/WhatsAppButton.vue'


export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Hero,
    Features,
    Documentation,
    Contact,
    Footer,
    WhatsAppButton
  }
}
</script>

<style scoped>
#landing-page {
  min-height: 100vh;
}
</style>