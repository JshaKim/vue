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
        <img
          src="https://img.danawa.com/prod_img/500000/194/903/img/3903194_1.jpg?shrink=500:*&_v=20210525130318"
          alt="image"
        />
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
