import Vue from 'vue'
// import App from './App.vue'
import zero from './zero.vue'
import './plugins/iview.js'
import VueClipboards from 'vue-clipboard2'
Vue.use(VueClipboards);
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({
  render: h => h(zero),
}).$mount('#zero')
