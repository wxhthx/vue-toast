import Vue from 'vue'
import App from './App'
import toast from '../lib/toast/toast'
Vue.use(toast, {theme: 'warning', globalPosition: {left: '30%', top: '60%'}})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
