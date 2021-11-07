import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectOptionsWeather: [
      {
        id: 1,
        name: 'Погода сейчас'
      },
      {
        id: 3,
        name: 'Погода на сегодня'
      },
      {
        id: 4,
        name: 'Погода погода на завтра'
      },
      {
        id: 5,
        name: 'Погода на 3 дня'
      },
      {
        id: 6,
        name: 'Погода на 5 дней'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
