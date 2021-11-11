<template>
    <button
        class="btn"
        :class="setIcon"
        @click="$emit('click', 'q')"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        icon: String
    },
    computed: {
        setIcon () {
          return this.icon ? `icon-${this.icon}` : ''
        }
    }
}
</script>
