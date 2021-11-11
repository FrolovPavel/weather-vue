import axios from "axios";


export const search = {
    state: () => ({
        searchOptions: [],
        tokenSearch: "ab237855f0c699002d2157207ddd43736f6c9a9a",
        isShowOption: false
    }),
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
        setIsShowOption (state, show) {
            state.isShowOption = show
        },
    },
    namespaced: true
}
