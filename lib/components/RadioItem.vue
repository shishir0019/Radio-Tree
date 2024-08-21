<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RadioItem from './RadioItem.vue'
interface Props {
    name: string
    label: string
    item: any
    valueKey: string
    children: string
    value: any
}
const props = defineProps<Props>()
const emits = defineEmits(['input', 'expand'])

const input = ref<HTMLInputElement | null>(null)

const isExpanded = ref(false)

const expand = () => {
    isExpanded.value = true
    emits('expand')
}

onMounted(() => {
    if (props.value?.toString() === props.item[props.valueKey]?.toString()) {
        emits('expand')
    }
})

</script>

<template>
    <div class="radio-tree__item" :class="{ 'radio-tree__item--selected': item[valueKey]?.toString() === value?.toString() }">
        <input ref="input" type="radio" :name @input="emits('input', $event)" :value="item[valueKey]" v-bind="$attrs"
            :checked="item[valueKey]?.toString() === value?.toString()">
        <label @click="input ? input.click() : ''">{{ item[label] }}</label>
        <div v-if="item[children].length" @click="isExpanded = !isExpanded"
            class="radio-tree__item__toggler"
            :class="{ 'radio-tree__item__toggler--expanded': isExpanded }">
            <span> {{ isExpanded ? '-' : '+' }}</span>
        </div>
    </div>
    <div v-if="item[children].length" class="radio-tree__item--children" v-show="isExpanded">
        <RadioItem v-for="(i, index) in item[children]" @input="emits('input', $event)" @expand="expand" v-bind="$attrs"
            :value="value" :label :name :valueKey :item="i" :children :key="`radio-item-${index}`" />
    </div>
</template>