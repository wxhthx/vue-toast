import Vue from 'vue'
import App from './App'
import toast from '../lib/toast/toast'
Vue.use(toast, {theme: 'success', globalPosition: {top: '10%'}})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
