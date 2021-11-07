<template>
    <div id="app">
        <PagesMainLayoutComponent>
            <router-view></router-view>
        </PagesMainLayoutComponent>
    </div>
</template>

<script>
import PagesMainLayoutComponent from "./components/pages/PagesMainLayout";
export default {
    components: {
        PagesMainLayoutComponent
    }

}
</script>

<style lang="scss">
@import "assets/scss/main";
#app {
    height: 100%;
    position: relative;
}
</style>
