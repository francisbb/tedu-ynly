import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 维护一个变量，表示当前登录状态
    islogin: sessionStorage.getItem('user') ? 1 : 0,
    // 存储当前登录用户信息
    user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) :{},
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
