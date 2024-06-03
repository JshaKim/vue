<script setup>
import { ref } from "vue";
import DynamicChild from "./DynamicChild.vue";

const dynamicName = ref("name");
</script>

<template>
  <div>
    <h1>DynamicSlot :</h1>
    <input v-model="dynamicName" />
    <DynamicChild>
      <template #[dynamicName]>
        {{ dynamicName }}
      </template>
    </DynamicChild>
  </div>
</template>

<style scoped>
.parentsContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid;
}
</style>


<!--
    1. 다이나믹 슬롯 입력값을 받기
    2. 
