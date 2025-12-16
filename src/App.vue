<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
    <FloatingButtons />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import FloatingButtons from './components/FloatingButtons.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    FloatingButtons
  }
}
</script>

<style>
main {
  flex: 1;
}
</style>
