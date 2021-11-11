<template>
    <div class="select" :class="{'active': isShowOptions}" @click="toggleOptions">

        <div class="select__value">{{optionValue}}</div>

        <transition name="option">
            <div class="select__options" v-if="isShowOptions">
                <ScrollBarComponent class="select__scroller">
                    <div
                            v-for="(option,index) in options"
                            :key="option.id"
                            class="select__option"
                            @click.stop="setOptionValue(option)"
                            :tabindex="index"
                    >
                        {{option.name}}
                    </div>
                </ScrollBarComponent>
            </div>
        </transition>

    </div>
</template>

<script>
export default {
    data: () => ({
        isShowOptions: false,
        optionValue: null,

    }),
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        toggleOptions () {
            this.isShowOptions = !this.isShowOptions
        },
        setOptionValue (option) {
            this.optionValue = option.name
            this.toggleOptions()
        }
    },
    computed: {

    },
    mounted() {
        this.optionValue = this.options[0].name
    }

}
</script>

