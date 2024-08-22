<script setup lang="ts">
import { ref } from 'vue';

//@ts-ignore
import { RadioTree } from '@shishir0019/radio-tree'
import '@shishir0019/radio-tree/style.css'

const list = ref<any[]>([
  {
    label: 'Option 1',
    value: 'option1',
    children: [
      { label: 'Sub-option 1', value: 'suboption1' },
      { label: 'Sub-option 2', value: 'suboption2' }
    ]
  },
  {
    label: 'Option 2',
    value: 'option2'
  }
]);

const fromData = ref<any>({ selected: 'suboption2' })

</script>

<template>
  <RadioTree v-model="fromData.selected" :list="list" :options="{ labelColored: true }"></RadioTree>
</template>
