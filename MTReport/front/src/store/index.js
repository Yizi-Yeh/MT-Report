import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: ''
  },
  mutations: {
    login(state,data) {
      // state.login  = 傳進來的data
      state.login = data
    },
    logout(state,data) {
      // state.login  = 傳進來的data
      state.login = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
