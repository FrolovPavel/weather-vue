<template>
    <simplebar class="scroll" data-simplebar-auto-hide="false">
        <slot></slot>
    </simplebar>
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';
    export default {
        components: {
            simplebar
        }
    }
</script>
