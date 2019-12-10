<template>
  <div id="app">
    <Navbar />
    <main
      role="main"
      class
    >
      <div class="album py-5 bg-light">
        <router-view />
      </div>
    </main>
  </div>
</template>
<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
<style scoped>
main {
  margin-top: 65px !important;
}
</style>
