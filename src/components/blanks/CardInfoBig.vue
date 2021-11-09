<template>
    <div class="card-info-big">
        <div class="card-info-big__wrapper" v-if="weatherData.temp > 0">
            <h1 class="card-info-big__title">{{weatherData.title}}, {{weatherData.country}}</h1>
            <p class="card-info-big__subtitle">{{weatherData.subtitle}}</p>
            <div class="card-info-big__img">
                <img :src='require(`@/assets/images/${this.weatherData.icon}.svg`)' alt="weatherIcon">
            </div>
            <p class="card-info-big__temp">{{Math.round(weatherData.temp)}}°C</p>
            <p class="card-info-big__feels">Чувствуется как {{Math.round(weatherData.feels)}}°C</p>
        </div>
        <div class="card-info-big__screen" v-else>
            <div class="card-info-big__img">
                <img src='@/assets/images/splashscreen.svg' alt="screen">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            weatherData: Object
        }

    }
</script>

