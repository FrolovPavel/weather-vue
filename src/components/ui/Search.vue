<template>
    <div class="search">
        <input
            class="search__input"
            type="text"
            @input="onInputSearch"
            :value="valueInputSearch"
            placeholder="Поиск..."
            autofocus
            ref="input"
        >
        <transition name="fade">
            <button
                v-if="valueInputSearch"
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
    methods: {
        ...mapActions({
            getSearchOptions: 'search/getSearchOptions'
        }),
        ...mapMutations({
            setIsShowOption: 'search/setIsShowOption',
            setValueInputSearch: 'setValueInputSearch'
        }),
        removeValue () {
            this.setValueInputSearch('')
            this.$refs.input.focus()
        },
        onInputSearch (e) {
            this.setValueInputSearch(e.target.value)
            this.setIsShowOption(true)
            this.getSearchOptions(this.valueInputSearch)
            this.$emit('input')
        },
        selectValue(option) {
            this.setValueInputSearch(option.geonameId)
            this.setIsShowOption(false)
            this.$emit('selectValue', 'id')
        }
    },
    computed: {
       ...mapState({
           isShowOption: state => state.search.isShowOption,
           searchOptions: state => state.search.searchOptions,
           valueInputSearch: state => state.valueInputSearch
       })
    },
    watch: {
        valueInputSearch(newValue) {
            if(!newValue) {
                this.setIsShowOption(false)
            }
        }
    }
}
</script>

<style>

</style>
