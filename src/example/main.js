import Vue from 'vue'
import App from './App'
import toast from 'toast'
Vue.use(toast, {theme: 'warning'})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
