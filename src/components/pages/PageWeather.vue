<template>
    <div class="weather">
        <div class="weather__left">
            <div class="weather__action">
                <div class="weather__action-left">
                    <SearchComponent
                        class="weather__search"
                        @selectValue="getWeather"
                    />
                    <ButtonComponent
                        icon="search"
                        class="weather__btn"
                        @click="getWeather"
                    />
                    <ButtonComponent
                        icon="settings"
                        class="weather__btn"
                    />
                </div>
                <SelectComponent
                    :options="selectOptionsWeather"
                />
            </div>
            <transition name="metric">
                <div class="weather__card" v-if="weatherDataCard.length">
                    <CardInfoComponent
                        v-for="metric in weatherDataCard"
                        :key="metric.title"
                        :title="metric.title"
                        :value="metric.value"
                        :img="metric.img"
                        :unit="metric.unit"
                    />
                </div>
            </transition>
            <p class="weather__placeholder" v-if="!weatherDataCard.length && !error">Введите город...</p>
            <p class="weather__error" v-if="error">Вы ввели город не правельно!</p>

        </div>
        <div class="weather__right">
            <CardInfoBigComponent
                :weatherData="weatherDataCardBig"
            />
        </div>
    </div>
</template>

<script>
import ButtonComponent from "../ui/Button";
import SelectComponent from "../ui/Select";
import {mapState, mapActions, mapMutations} from "vuex";
import CardInfoComponent from "../blanks/CardInfo";
import SearchComponent from "../ui/Search";
import CardInfoBigComponent from "../blanks/CardInfoBig";

export default {
    components: {
        ButtonComponent,
        SelectComponent,
        CardInfoComponent,
        SearchComponent,
        CardInfoBigComponent
    },
    computed: {
        ...mapState({
            selectOptionsWeather: state => state.weather.selectOptionsWeather,
            weatherDataCardBig: state => state.weather.weatherDataCardBig,
            weatherDataCard: state => state.weather.weatherDataCard,
            error: state => state.weather.error,
            valueInputSearch: state => state.valueInputSearch
        }),
    },
    methods: {
        ...mapActions({
            getWeatherData: 'weather/getWeatherData'
        }),
        ...mapMutations({
            setSentValueRequest: 'weather/setSentValueRequest',
            setTypeRequest: 'weather/setTypeRequest',
            setIsShowOption: 'search/setIsShowOption',
            setValueInputSearch: 'setValueInputSearch'
        }),
        getWeather(typeRequest) {
            this.setTypeRequest(typeRequest)
            this.setSentValueRequest(this.valueInputSearch)
            this.getWeatherData()
            this.setIsShowOption(false)
            this.setValueInputSearch('')
        }
    }
}
</script>

