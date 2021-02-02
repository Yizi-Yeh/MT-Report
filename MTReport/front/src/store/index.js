import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Persistedstate from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      id: ''
    },
    products:[],
    newplans:[],
    orders:[],
  },
  mutations: {

    login (state, data) {
      state.user.name = data.account
      state.user.id = data._id
    },
    logout (state) {
      state.user.name = ''
      state.user.id = ''
    },
    setProductsInfo (state, data) {
      state.products = data;
    },
    setNewplansInfo (state, data) {
      state.newplans = data;
    },
    currentNumber (state, data) {
      state.currentNumbe = data.currentNumber
    },
    addCart (state, data) {
      state.orders.push(data)
    },
    delCart (state, data) {
      state.orders.splice(data, 1)
    },
    
  },

  actions: {
    // 取得所有行程資訊
    getProductsInfo({ commit, state}) {
      const api = `${process.env.VUE_APP_API}`+ '/products'
      Axios.get(api).then(res => {
        if(res.data.success) {
          commit('setProductsInfo',res.data.result)
        }
      })
    },
    // 取得所有開團資訊
    getNewPlansInfo({ commit, state}) {
      const api = `${process.env.VUE_APP_API}`+ '/newplans'
      Axios.get(api).then(res => {
        if(res.data.success) {
          commit('setNewplansInfo',res.data.result)
          commit('currentNumber',res.data.result)
        }
      })
    }, 
  },
  modules: {
  },
  getters: {
    orders (state) {
      return state.orders
    },
  },
  plugins: [Persistedstate()]
})
