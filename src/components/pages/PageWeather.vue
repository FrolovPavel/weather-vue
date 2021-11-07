<template>
    <div class="weather">
        <ButtonComponent></ButtonComponent>
        <SelectComponent></SelectComponent>
    </div>
</template>

<script>
    import ButtonComponent from "../ui/Button";
    import SelectComponent from "../ui/Select";
    import {mapState} from "vuex";

    export default {
        data: () => ({
            test: false,
        }),
        components: {
            ButtonComponent,
            SelectComponent
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

