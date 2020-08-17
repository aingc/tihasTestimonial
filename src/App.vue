<template> 
  <div id="app">
    <h1>Our Testimonials</h1>
    <Testimonial v-bind:testimonialList="testimonialList" />
  </div>
</template>

<script>
import Testimonial from './components/Testimonial.vue'

export default {
  name: 'App',
  components: {
    Testimonial
  },
  data() {
    return {
      testimonialList: [
        {
          id: '1',
          name: 'Yannic McDagan',
          company: 'Sardari Sardines Ltc',
          location: 'Preston',
          info: 'delectus aut autem'
        }, {
          id: '2',
          name: 'Yannic Myulic',
          company: 'Malik DualEdge',
          location: 'Lisburn',
          info: 'quis ut nam facilis et officia qui'
        }, {
          id: '3',
          name: 'Yulic Myannicle',
          company: 'Muffagan Bakery',
          location: 'Liverpool',
          info: 'fugiat veniam minus'
        }, {
          id: '4',
          name: 'Kelly Wooters',
          company: 'Mumford and sons',
          location: 'Manchester',
          info: 'et porro tempora'
        }
      ]
    }
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
