<script setup lang="ts">
import RadioItem from './RadioItem.vue'
import type { IOptions } from '../'

interface Props {
    list: any[]
    label?: string
    name?: string
    value?: string
    children?: string
    color?: string
    disabled?: boolean
    options?: IOptions
}

withDefaults(defineProps<Props>(), {
    label: 'label',
    value: 'value',
    children: 'children',
    color: '#005CC8',
    name: 'name',
})

const model = defineModel<string | number>()

const inputChange = (e: any) => {
    model.value = e.target.value
}

</script>

<template>
    <form class="radio-tree">
        <RadioItem v-for="(item, index) in list" :name :label :item :children :value :dataValue="model" :options
            :disabled="!!disabled" :key="`radio-item-${index}`" @input="inputChange" />
    </form>
</template>

<style lang="scss">
.radio-tree {
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    &__item {
        display: flex;
        align-items: center;
        gap: .4rem;

        label {
            cursor: pointer;
        }

        &__toggler {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 1rem;
            width: 1rem;
            border-radius: 50%;

            &:hover {
                color: v-bind('color');
            }

            &--expanded {
                color: v-bind('color');
            }

            span {}
        }

        input[type='radio'] {
            cursor: pointer;
            accent-color: v-bind('color');
        }

        &--selected {
            .label-colored {
                color: v-bind('color');
            }
        }

        &--children {
            margin-left: 1rem;
        }
    }
}
</style>