import Vue from 'vue';
import Vuex from 'vuex';
import {search} from "./modules/search";
import {weather} from "./modules/weather";

Vue.use(Vuex)

export default new Vuex.Store({
    state: () => ({
        valueInputSearch: ''

    }),
    mutations: {
      setValueInputSearch(state, value) {
          state.valueInputSearch = value
      }
    },
    modules: {
        search: search,
        weather: weather
    }
})
