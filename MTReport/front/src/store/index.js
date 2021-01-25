import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      id: ''
    },
    products:[],
    newplans:[],
    productsId:{
      _id:''
    },
    
  },
  mutations: {
    logout (state) {
      state.user.name = ''
      state.user.id = ''
    },
    login (state, data) {
      state.user.name = data.account
      state.user.id = data._id
    },
    setProductsInfo (state, val) {
      state.products = val;
    },
    setNewplansInfo (state, val) {
      state.newplans = val;
    },
    getProductsId (state, data) {
      if (data) state.productsId = data

    },
    
  },

  actions: {
    getProductsInfo({ commit, state}) {
      // 取得所有行程資訊
      const api = `${process.env.VUE_APP_API}`+ '/products'
      Axios.get(api).then(res => {
        if(res.data.success) {
          commit('setProductsInfo',res.data.result)
          commit('getProductsId',res.data.result)
        }
      })
    },
    getNewPlansInfo({ commit, state}) {
      // 取得所有行程資訊
      const api = `${process.env.VUE_APP_API}`+ '/newplans'
      Axios.get(api).then(res => {
        if(res.data.success) {
          commit('setNewplansInfo',res.data.result)
        }
      })
    },
  },
  modules: {
  }
})
