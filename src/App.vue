<template> 
  <div id="app">
    <Testimonial />
  </div>
</template>

<script>
import Testimonial from './components/Testimonial.vue'

export default {
  name: 'App',
  components: {
    Testimonial
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
