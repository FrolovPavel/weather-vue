<template>
    <button
        class="btn"
        :class="setIcon"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "button-component",
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

<style>

</style>
