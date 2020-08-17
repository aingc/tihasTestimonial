import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import Testimonial from './components/Testimonial'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify
}).$mount('#app')

export { Testimonial };