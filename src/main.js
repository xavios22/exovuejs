import Vue from 'vue'
import App from './App.vue'
import '../public/mains.sass'
import'../node_modules/@fortawesome/fontawesome-free/css/all.css'
import VueCurrencyFilter from '../node_modules/vue-currency-filter'


Vue.config.productionTip = false,
Vue.use(VueCurrencyFilter,
  {
    symbol : '$',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })



new Vue({
  render: h => h(App),
}).$mount('#app')
