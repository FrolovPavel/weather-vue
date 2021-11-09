import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

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
        ],
        searchOptions: [],
        tokenSearch: "ab237855f0c699002d2157207ddd43736f6c9a9a",
        weatherData: []
    },
    mutations: {
        setSearchOptions (state, searchResult) {
            state.searchOptions = searchResult.filter((city, index, self) => {
                return index === self.findIndex(citySelf => {
                    return citySelf.data.geoname_id === city.data.geoname_id
                })
            }).map(city => {
                return {
                    geonameId: city.data.geoname_id,
                    value: city.value.split(',').reverse().join(', ')
                }
            })
        }
    },
    actions: {
        async getSearchOptions ({state, commit}, value) {
            const response = await axios({
                method: 'post',
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + state.tokenSearch
                },
                url: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
                data: JSON.stringify({
                    query: value,
                    from_bound: { value: "city" },
                    to_bound: { value: "settlement" },
                    locations: [
                        { country: "*" }
                    ]
                }),

            })
                commit('setSearchOptions', response.data.suggestions)

        },
        // async getWeatherData({state, commit},city){
        //     const response =  axios(
        //         {
        //             url: `https://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&APPID=5b5375b7952906a50e1d978e47509fc7&lang=ru`,
        //             method: 'GET'
        //         })
        // }
    },
    modules: {
    }
})
