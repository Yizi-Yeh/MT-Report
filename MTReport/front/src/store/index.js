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
    plans:[],
    categories: [],
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
    setPlansInfo (state, val) {
      state.plans = val;
    },
    CATEGORIES(state, payload) {
      const categories = new Set();
      payload.forEach((item) => {
        categories.add(item.category);
      });
      state.categories = Array.from(categories);
    },
  },
  actions: {
    getPlansInfo({ commit, state}) {
      // 取得所有行程資訊
      const api = `${process.env.VUE_APP_API}`+ '/products'
      Axios.get(api).then(res => {
        if(res.data.success) {
          commit('setPlansInfo',res.data.result)
          commit('CATEGORIES', res.data.result);
        }
      })
    },
    
  },
  modules: {
  }
})
