<script setup lang="ts">
import RadioItem from './RadioItem.vue';
interface Props {
    list: any[]
    label?: string
    name?: string
    valueKey?: string
    children?: string,
    color?: string
}
withDefaults(defineProps<Props>(), {
    label: 'value',
    valueKey: 'id',
    children: 'children',
    name: 'name',
    color: '#ff0000'
})

const model = defineModel()

const inputChange = (e: any) => {
    model.value = e.target.value
}
</script>

<template>
    <form class="radio-tree">
        <RadioItem v-for="(item, index) in list" :name :label :item :children :valueKey :value="model"
            :key="`radio-item-${index}`" @input="inputChange" />
    </form>
</template>

<style lang="scss">
.radio-tree {
    *{
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
            &--expanded{
                color: v-bind('color');
            }
            span{
            }
        }

        input[type='radio'] {
            accent-color: v-bind('color');
        }

        &--selected {
            label {
                color: v-bind('color');
            }
        }
        &--children{
            margin-left: 1rem;
        }
    }
}
</style>