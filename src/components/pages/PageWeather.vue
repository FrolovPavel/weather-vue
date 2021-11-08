<template>
    <div class="weather">
        <div class="weather__left">
            <div class="weather__action">
                <div class="weather__action-left">
                    <SearchComponent class="weather__search"/>
                    <ButtonComponent
                        icon="search"
                        class="weather__btn"
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
            <div class="weather__card">
                <CardInfoComponent />
                <CardInfoComponent />
                <CardInfoComponent />
                <CardInfoComponent />
                <CardInfoComponent />
                <CardInfoComponent />
            </div>


        </div>

        <div class="weather__right">
            <CardInfoBigComponent></CardInfoBigComponent>
        </div>


    </div>
</template>

<script>
import ButtonComponent from "../ui/Button";
import SelectComponent from "../ui/Select";
import {mapState} from "vuex";
import CardInfoComponent from "../blanks/CardInfo";
import SearchComponent from "../ui/Search";
import CardInfoBigComponent from "../blanks/CardInfoBig";
export default {
    data: () => ({
        test: false,
    }),
    components: {
        ButtonComponent,
        SelectComponent,
        CardInfoComponent,
        SearchComponent,
        CardInfoBigComponent
    },
    computed: {
        ...mapState({
            selectOptionsWeather: state => state.selectOptionsWeather
        })
    },
    mounted() {
        console.log(this.selectOptionsWeather)
    }
}
</script>

