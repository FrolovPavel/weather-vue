<template>
    <div id="app">
        <select-component
            :options="selectOptionsWeather"
        />
        <button-component class="test" @click="test = !test"></button-component>
    </div>
</template>

<script>
import ButtonComponent from "./components/ui/Button";
import SelectComponent from "./components/ui/Select"
import {mapState} from 'vuex'
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

<style lang="scss">
@import "assets/scss/main";
#app {
    width: 400px;
    height: 400px;
    margin: 100px auto;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: center;
}
.test {
    margin-top: 30px;
}
</style>
