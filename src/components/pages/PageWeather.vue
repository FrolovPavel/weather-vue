<template>
    <div class="weather">
        <div class="weather__left">
            <div class="weather__action">
                <div class="weather__action-left">
                    <SearchComponent
                        class="weather__search"
                        @selectValue="getWeatherBySelect"
                        @input="getValueInput"

                    />
                    <ButtonComponent
                        icon="search"
                        class="weather__btn"
                        @click="getWeatherByClickButton"

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
            <p class="weather__placeholder" v-else>Введите город...</p>

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
import {mapState, mapActions, mapMutations, mapGetters} from "vuex";
import CardInfoComponent from "../blanks/CardInfo";
import SearchComponent from "../ui/Search";
import CardInfoBigComponent from "../blanks/CardInfoBig";
export default {
    data: () => ({
        valueInputSearch: '',
    }),
    components: {
        ButtonComponent,
        SelectComponent,
        CardInfoComponent,
        SearchComponent,
        CardInfoBigComponent
    },
    computed: {
        ...mapState([
            'selectOptionsWeather',
            'weatherDataCardBig',
            'weatherDataCard'
        ]),
        ...mapGetters([
            'giveWeatherData'
        ])
    },
    methods: {
        ...mapActions([
            'getWeatherData'
        ]),
        ...mapMutations([
            'setSentValueRequest',
            'setTypeRequest',
            'setIsShowOption'
        ]),
        getWeatherBySelect(typeRequest, valueRequest) {
            this.setTypeRequest(typeRequest)
            this.setSentValueRequest(valueRequest)
            this.getWeatherData()
        },
        getWeatherByClickButton () {
            this.setTypeRequest('q')
            this.setSentValueRequest(this.valueInputSearch)
            this.getWeatherData()
            this.setIsShowOption(false)
        },
        getValueInput (value) {
            this.valueInputSearch = value
        }
    },
    mounted() {
        console.log(this.selectOptionsWeather)
    }
}
</script>

