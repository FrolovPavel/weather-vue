import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import windDirection from '../utils/windDirection.js'
import convertUnixDate from '../utils/convertUnixDate.js'

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
        weatherDataCardBig: {},
        weatherDataCard: [],
        sentValueRequest: null,
        typeRequest: null,
        loading: false,
        isShowOption: false
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
        },
        setWeatherDataCardBig (state, weather) {
            console.log(weather)
            state.weatherDataCardBig = {
                title: weather.name,
                subtitle: weather.weather[0].description,
                icon: weather.weather[0].icon,
                temp: weather.main.temp,
                feels: weather.main.feels_like,
                country: weather.sys.country
            }
        },
        setSentValueRequest (state, value) {
            state.sentValueRequest = value
        },
        setTypeRequest (state, type) {
            state.typeRequest = type
        },
        setIsShowOption (state, show) {
            state.isShowOption = show
        },
        setWeatherDataCard (state, weather) {
            state.weatherDataCard = [
                {
                    title: 'Влажность',
                    img: 'humidity',
                    value: weather.main.humidity,
                    unit: '%'

                },
                {
                    title: 'Скорость ветра',
                    img: 'wind',
                    value: weather.wind.speed,
                    unit: 'м/с'
                },
                {
                    title: 'Направление ветра',
                    img: 'compass',
                    value: windDirection(weather.wind.deg),
                    unit: ''
                },
                {
                    title: 'Видимость',
                    img: 'binocular',
                    value: Math.round(weather.visibility / 1000),
                    unit: 'км'
                },
                {
                    title: 'Восход',
                    img: 'sunrise',
                    value: convertUnixDate(weather.sys.sunrise, weather.timezone),
                    unit: ''
                },
                {
                    title: 'Закат',
                    img: 'sunset',
                    value: convertUnixDate(weather.sys.sunset, weather.timezone),
                    unit: ''
                }
            ]
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
        async getWeatherData({state, commit}){
            const response = await axios(
                {
                    url: `https://api.openweathermap.org/data/2.5/weather?${state.typeRequest}=${state.sentValueRequest}&units=metric&APPID=5b5375b7952906a50e1d978e47509fc7&lang=ru`,
                    method: 'GET'
                })
                commit('setWeatherDataCardBig', response.data)
                commit('setWeatherDataCard', response.data)
        }
    },
    getters: {
        giveWeatherData(state) {
            return state.weatherData
        }
    },
    modules: {
    }
})
