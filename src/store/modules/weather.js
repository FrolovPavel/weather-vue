import axios from "axios";
import windDirection from "../../utils/windDirection";
import convertUnixDate from "../../utils/convertUnixDate";


export const weather = {
    state: () => ({
        selectOptionsWeather: [
            {
                id: 1,
                name: 'Погода сейчас'
            },
            {
                id: 3,
                name: 'Погода на ближайшие 3ч.'
            },
            {
                id: 4,
                name: 'Погода на ближайшие 6ч.'
            },
            {
                id: 5,
                name: 'Погода на ближайшие 12ч.'
            }
        ],
        weatherDataCardBig: {},
        weatherDataCard: [],
        sentValueRequest: null,
        typeRequest: null,
        error: false,

    }),
    mutations: {
        setWeatherDataCardBig (state, weather) {
            console.log(weather)
            state.weatherDataCardBig = {
                title: weather.name,
                subtitle: weather.weather[0].description,
                icon: weather.weather[0].icon,
                temp: Math.round(weather.main.temp),
                feels: Math.round(weather.main.feels_like),
                country: weather.sys.country
            }
        },
        setSentValueRequest (state, value) {
            state.sentValueRequest = value
        },
        setTypeRequest (state, type) {
            state.typeRequest = type
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
        },
        setError(state, bol) {
            state.error = bol
        }
    },
    actions: {
        async getWeatherData({state, commit}){
            try {
                const response = await axios(
                    {
                        url: `https://api.openweathermap.org/data/2.5/weather?${state.typeRequest}=${state.sentValueRequest}&units=metric&APPID=5b5375b7952906a50e1d978e47509fc7&lang=ru`,
                        method: 'GET'
                    })
                commit('setError', false)
                commit('setWeatherDataCardBig', response.data)
                commit('setWeatherDataCard', response.data)
            } catch (e) {
                commit('setError', true)
            }

        }
    },
    namespaced: true
}
