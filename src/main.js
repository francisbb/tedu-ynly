import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import axios from 'axios'
import '../public/css/common.css'//导入公用样式和重置样式
import '../public/css/iconfont-3.1.css'//导入iconfont
import ElementUI from 'element-ui';//导入element-ui
import 'element-ui/lib/theme-chalk/index.css';//导入element-ui样式
import 'swiper/dist/css/swiper.min.css';//导入swiper样式

import qs from 'qs';
Vue.prototype.qs = qs;

Vue.use(ElementUI);

Vue.config.productionTip = false


//注册全局组件
Vue.component("common-header",Header)
Vue.component("common-footer",Footer)

//添加axios默认路径
axios.defaults.baseURL="/api";
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
