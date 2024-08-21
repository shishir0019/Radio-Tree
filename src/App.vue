<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface IListItem {
  id: number | string
  value: string
  list?: IListItem[]
}

const list = ref<IListItem[]>([])

const guidGenerator = (): string => {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const genList = (number: number): IListItem[] => {
  let list: IListItem[] = []
  for (let index = 0; index < number; index++) {
    let item: IListItem = { id: guidGenerator(), value: `item-${index + 1}` }
    item.list = genList(Math.floor(Math.random() * index))
    list.push(item)
  }
  return list
}

onMounted(() => {
  list.value = genList(5)
})

const fromData = ref<any>({})

</script>

<template>
  <radio-tree v-model="fromData.selected" :list="list" children="list" label="value" color="red"></radio-tree>
</template>
