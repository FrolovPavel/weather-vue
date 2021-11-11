<template>
    <div class="card-info-big">
        <transition name="weather">
            <div v-if="Object.keys(weatherData).length !== 0" class="card-info-big__wrapper">
                <h1 class="card-info-big__title">{{weatherData.title}}, {{weatherData.country}}</h1>
                <p class="card-info-big__subtitle">{{weatherData.subtitle}}</p>
                <div class="card-info-big__img">
                    <img :src='require(`@/assets/images/${this.weatherData.icon}.svg`)' alt="weatherIcon">
                </div>
                <p class="card-info-big__temp">{{weatherData.temp}}°C</p>
                <p class="card-info-big__feels">Чувствуется как {{weatherData.feels}}°C</p>
            </div>
        </transition>
        <div v-if="Object.keys(weatherData).length === 0" class="card-info-big__screen">
            <div class="card-info-big__img">
                <img src='@/assets/images/splashscreen.svg' alt="screen"/>
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

