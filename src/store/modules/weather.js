import axios from "axios";
import windDirection from "../../utils/windDirection";
import convertUnixDate from "../../utils/convertUnixDate";


export const weather = {
    state: () => ({
        selectOptionsWeather: [
            {
                id: 1,
                name: 'Погода сейчас',
                cnt: 1
            },
            {
                id: 2,
                name: 'Погода через 3ч.',
                cnt: 2
            },
            {
                id: 3,
                name: 'Погода через 6ч.',
                cnt: 3
            },
            {
                id: 4,
                name: 'Погода через 12ч.',
                cnt: 4
            }
        ],
        weatherDataCardBig: {},
        weatherDataCard: [],
        sentValueRequest: null,
        typeRequest: null,
        error: false,
        scopeRequest: 'weather',
        cnt: 2

    }),
    mutations: {
        setWeatherDataCardBig (state, weather) {
            console.log(weather)
            state.weatherDataCardBig = {
                title: weather.name,
                country: weather.sys.country,
                subtitle: weather.weather[0].description,
                icon: weather.weather[0].icon,
                temp: Math.round(weather.main.temp),
                feels: Math.round(weather.main.feels_like),
            }
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
        setWeatherDataCardBigOnSelect(state, weather) {
            console.log(weather)
            state.weatherDataCardBig = {
                title: weather.city.name,
                country: weather.city.country,
                subtitle: weather.list[weather.list.length -1].weather[0].description,
                icon: weather.list[weather.list.length -1].weather[0].icon,
                temp: Math.round(weather.list[weather.list.length -1].main.temp),
                feels: Math.round(weather.list[weather.list.length -1].main.feels_like)
            }
        },
        setWeatherDataCardOnSelect (state, weather) {
            state.weatherDataCard = [
                {
                    title: 'Влажность',
                    img: 'humidity',
                    value: weather.list[weather.list.length -1].main.humidity,
                    unit: '%'
                },
                {
                    title: 'Скорость ветра',
                    img: 'wind',
                    value: weather.list[weather.list.length -1].wind.speed,
                    unit: 'м/с'
                },
                {
                    title: 'Направление ветра',
                    img: 'compass',
                    value: windDirection(weather.list[weather.list.length -1].wind.deg),
                    unit: ''
                },
                {
                    title: 'Видимость',
                    img: 'binocular',
                    value: Math.round(weather.list[weather.list.length -1].visibility / 1000),
                    unit: 'км'
                },
                {
                    title: 'Восход',
                    img: 'sunrise',
                    value: convertUnixDate(weather.city.sunrise, weather.city.timezone),
                    unit: ''
                },
                {
                    title: 'Закат',
                    img: 'sunset',
                    value: convertUnixDate(weather.city.sunset, weather.city.timezone),
                    unit: ''
                }
            ]
        },
        setSentValueRequest (state, value) {
            state.sentValueRequest = value
        },
        setTypeRequest (state, type) {
            state.typeRequest = type
        },
        setError(state, bol) {
            state.error = bol
        },
        setScopeRequest (state, scope ) {
            state.scopeRequest = scope
        },
        setCnt (state, cnt) {
            state.cnt = cnt
        }
    },
    actions: {
        async getWeatherData({state, commit}){
            try {
                const response = await axios(
                    {
                        url: `https://api.openweathermap.org/data/2.5/${state.scopeRequest}?${state.typeRequest}=${state.sentValueRequest}&units=metric&cnt=${state.cnt}&APPID=5b5375b7952906a50e1d978e47509fc7&lang=ru`,
                        method: 'GET'
                    })
                commit('setError', false)
                if(state.scopeRequest === 'weather') {
                    commit('setWeatherDataCardBig', response.data)
                    commit('setWeatherDataCard', response.data)
                } else {
                    commit('setWeatherDataCardBigOnSelect', response.data)
                    commit('setWeatherDataCardOnSelect', response.data)
                }

            } catch (e) {
                commit('setError', true)
            }

        }
    },
    namespaced: true
}
