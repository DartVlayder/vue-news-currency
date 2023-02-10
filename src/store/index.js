import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      news: JSON.parse(localStorage.getItem('news')) ?? []
    }
  },
  getters: {
    NEWS(state) {
      return state.news 
    },
    getIdNEWS: (state) => (id) => {
      for (let i = 0; i < state.news[0].length; i++) {
        if (i == id) {
          return state.news[0][id]
        }
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
