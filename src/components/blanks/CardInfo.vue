<template>
    <div class="card-info">
        <h3 class="card-info__title">{{title}}</h3>
        <div class="card-info__bottom">
            <div class="card-info__img">
                <img :src="require(`@/assets/images/${img}.png`)" alt="value">
            </div>
            <div class="card-info__info">
                <p class="card-info__value">{{value}}</p>
                <p class="card-info__unit">{{unit}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'img', 'value', 'unit']
    }
</script>

