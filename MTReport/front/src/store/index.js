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
    setProductsInfo (state, val) {
      state.products = val;
    },
    setNewplansInfo (state, val) {
      state.newplans = val;
    },
    getOrdersInfo (state, data) {
      state.orders = data
    }
    
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
        }
      })
    },
     // 建立訂單
     createOrders (id) {  
      const api = `${process.env.VUE_APP_API}`+ '/users/order/'+ `${this.user.id}`
      Axios.post(api,{p_id:id}).then((response) => {
        if(response.data.succuss){
          this.orders = response.data.result
          console.log(response.data.result)
        } 
      })
    },
    // 取得訂單
  
    
  },
  modules: {
  },
  plugins: [Persistedstate()]
})
