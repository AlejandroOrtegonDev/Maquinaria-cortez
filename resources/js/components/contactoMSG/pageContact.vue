<template>
  <div id="page-contact">
    <Navbar />
    <formEmail />
    <Footer/>
    <WhatsAppButton />
  </div>
</template>

<script>
import Navbar from '../globlal/Navbar.vue'
import Footer from '../landingPage/footer.vue'
import formEmail from './formEmail.vue'
import WhatsAppButton from '../globlal/WhatsAppButton.vue'

export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Footer,
    formEmail,
    WhatsAppButton
  }
}
</script>


<style scoped>
#landing-page {
  min-height: 100vh;
}
</style>