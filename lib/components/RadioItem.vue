<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RadioItem from './RadioItem.vue'
import type { IOptions } from '../'

interface Props {
    name: string
    label: string
    item: any
    value: string
    children: string
    dataValue: any
    disabled: boolean
    options?: IOptions
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
    if (props.dataValue?.toString() === props.item[props.value]?.toString()) {
        emits('expand')
    }
})

</script>

<template>
    <div class="radio-tree__item" :class="{ 'radio-tree__item--selected': item[value]?.toString() === dataValue?.toString() }">
        <input ref="input" type="radio" :name @input="emits('input', $event)" :value="item[value]" :disabled
            :checked="item[value]?.toString() === dataValue?.toString()">
        <label :class="{ 'label-colored': options?.labelColored }" @click="input ? input.click() : ''">{{ item[label] }}</label>
        <div v-if="item[children]?.length" @click="isExpanded = !isExpanded"
            class="radio-tree__item__toggler"
            :class="{ 'radio-tree__item__toggler--expanded': isExpanded }">
            <span> {{ isExpanded ? '-' : '+' }}</span>
        </div>
    </div>
    <div v-if="item[children]?.length" class="radio-tree__item--children" v-show="isExpanded">
        <RadioItem v-for="(i, index) in item[children]" @input="emits('input', $event)" @expand="expand" :disabled :options
            :dataValue="dataValue" :label :name :value :item="i" :children :key="`radio-item-${index}`" />
    </div>
</template>