<template>
    <div class="weather">
        <ButtonComponent></ButtonComponent>
        <SelectComponent
            :options="selectOptionsWeather"
        />
        <br>
        <CardInfoComponent></CardInfoComponent>
        <br>
        <SearchComponent></SearchComponent>
        <br>
        <CardInfoBigComponent></CardInfoBigComponent>
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

