<template>
    <div class="search">
        <input
            class="search__input"
            type="text"
            @input="onInputSearch"
            :value="value"
            placeholder="Поиск..."
            autofocus
            ref="input"
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
                <ScrollBarComponent class="search__scroller">
                    <div
                            v-for="(option, index) in searchOptions"
                            :key="option.geonameId"
                            class="search__option"
                            @click="selectValue(option)"
                            :tabindex="index"
                    >
                        {{option.value}}
                    </div>
                </ScrollBarComponent>
            </div>
        </transition>
    </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'

export default {
    name: "search-component",
    data:() => ({
        value: '',
    }),
    methods: {
        ...mapActions({
            getSearchOptions: 'search/getSearchOptions'
        }),
        ...mapMutations({
            setIsShowOption: 'search/setIsShowOption',
        }),
        removeValue () {
            this.value = ''
            this.$refs.input.focus()
        },
        onInputSearch (e) {
            this.value = e.target.value
            this.setIsShowOption(true)
            this.getSearchOptions(this.value)
            this.$emit('input', this.value)
        },
        selectValue(option) {
            this.value = option.value
            this.setIsShowOption(false)
            this.$emit('selectValue', 'id', option.geonameId)
        }
    },
    computed: {
       ...mapState({
           isShowOption: state => state.search.isShowOption,
           searchOptions: state => state.search.searchOptions
       })
    },
    watch: {
        value(newValue) {
            if(!newValue) {
                this.setIsShowOption(false)
            }
        }
    }
}
</script>

<style>

</style>
