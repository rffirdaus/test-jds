import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import VuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VuelidateErrorExtractor, {
  i18n: false,
  messages: {
    required: '{attribute} Tidak Boleh Kosong!',
    minLength: 'Karakter {attribute} Tidak Boleh kurang!',
    maxLength: 'Karakter {attribute} Tidak Boleh lebih!',
    hanyaemail: '{attribute} Hanya Alamat Email',
    notPhone: '{attribute} must phone number Indonesia format',
    email: '{attribute} is not a valid Email address.',
    hanyahuruf: '{attribute} Hanya huruf!',
    hanyahuruftampaspasi: '{attribute} Hanya huruf dan tidak boleh ada spasi!',
    tampaspasi: '{attribute} tidak boleh ada spasi!',
    hanyaangka: '{attribute} Hanya angka!',
    nopkurang18: 'Karakter {attribute} Tidak Boleh kurang 18!',
    noplebih18: 'Karakter {attribute} Tidak Boleh lebih 18!',
    isEmailAvailable:
      '{attribute} is not available. Must be at least 10 characters long.'
  }
})
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
