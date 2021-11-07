<template>
    <div class="weather">
        <ButtonComponent></ButtonComponent>
        <SelectComponent
            :options="selectOptionsWeather"
        />
        <br>
        <CardInfoComponent></CardInfoComponent>
    </div>
</template>

<script>
    import ButtonComponent from "../ui/Button";
    import SelectComponent from "../ui/Select";
    import {mapState} from "vuex";
    import CardInfoComponent from "../blanks/CardInfo";
    export default {
        data: () => ({
            test: false,
        }),
        components: {
            ButtonComponent,
            SelectComponent,
            CardInfoComponent
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

