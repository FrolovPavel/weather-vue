<template>
    <div class="search">
        <input
            class="search__input"
            type="text"
            @input="onInputSearch"
            :value="value"
            placeholder="Введите город"
            autofocus
        >
        <transition name="fade">
            <button
                    v-if="value"
                    @click="removeValue"
                    class="search__btn"
            >
            </button>
        </transition>
        <transition name="option">
            <div class="search__options" v-if="isShowOption">
                <div
                    v-for="(option, index) in searchOptions"
                    :key="option.geonameId"
                    class="search__option"
                    @click="selectValue(option)"
                    :tabindex="index"
                >
<!--                    <span v-if="option.nameCity">{{option.nameCity}}, </span>-->
<!--                    <span v-if="option.settlement">{{option.settlement}}, </span>-->
<!--                    <span>{{option.regionType}}, </span>-->
                    <span>{{option.value}}</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: "search-component",
    data:() => ({
        value: '',
        isShowOption: false
    }),
    methods: {
        ...mapActions([
            'getSearchOptions'
        ]),
        removeValue () {
            this.value = ''
        },
        onInputSearch (e) {
            this.value = e.target.value
            this.showOption()
            this.getSearchOptions(this.value)
        },
        selectValue(option) {
            this.value = option.value
            this.unshowOption()
        },
        unshowOption () {
            this.isShowOption = false
        },
        showOption () {
            this.isShowOption = true
        }
    },
    computed: {
       ...mapState([
           'searchOptions'
       ])
    }
}
</script>

<style>

</style>
