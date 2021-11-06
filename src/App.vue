<template>
    <div id="app">
        <Button
            icon="search"
        />
    </div>
</template>

<script>
    import Button from "./components/ui/Button";
    export default {
        components: {
            Button
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
</style>
