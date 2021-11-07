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
    </div>
</template>

<script>
import ButtonComponent from "../ui/Button";
import SelectComponent from "../ui/Select";
import {mapState} from "vuex";
import CardInfoComponent from "../blanks/CardInfo";
import SearchComponent from "../ui/Search";
export default {
    data: () => ({
        test: false,
    }),
    components: {
        ButtonComponent,
        SelectComponent,
        CardInfoComponent,
        SearchComponent
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

