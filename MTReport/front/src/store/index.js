import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: '',
    plans:[]
  },
  mutations: {
    login(state,data) {
      // state.login  = 傳進來的data
      state.login = data
    },
    logout(state,data) {
      // state.login  = 傳進來的data
      state.login = ''
    },
    setPlansInfo (state, val) {
      state.plans = val;
    },
  },
  actions: {
    getPlansInfo({ commit, state}) {
      // 取得所有行程資訊
      const api = `${process.env.VUE_APP_API}`+ '/products'
      Axios.get(api).then(res => {
        if(res.data.success) {
          commit('setPlansInfo',res.data.result)
        }
      })
    },
    
  },
  modules: {
  }
})
