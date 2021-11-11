<template>
    <button
        class="btn"
        :class="setIcon"
        @click="onClick"
    >
        <slot></slot>
    </button>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    props: {
        icon: String
    },
    computed: {
        setIcon () {
          return this.icon ? `icon-${this.icon}` : ''
        }
    },
    methods: {
        onClick () {
            this.setScopeRequest('weather')
            this.$emit('click', 'q')
        },
        ...mapMutations({
            setScopeRequest: 'weather/setScopeRequest',
        })
    }
}
</script>
