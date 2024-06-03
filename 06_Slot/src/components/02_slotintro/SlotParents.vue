<script setup>
import { ref } from "vue";
import Child from "./SlotChild.vue";
const props = ref("hello! data");
</script>

<!-- 
    slot
    슬롯은 vue 컴포넌트에서 컨텐츠를 전달하는 매커니줌, 부모 컴포넌트에서 자식 컴포넌트로 데이터나 구조를 전달하는 용도로 사용됨
    슬롯을 사용하면 부모 컴포넌트에서 자식 컴포넌트의 일부를 동적으로 결정할 수 있음
    재사용도 가능함
    일반적으로 컴포넌트 내의 마크업에서 슬롯 요소를 사요하여 슬롯을 정의하며, 이는 자식 컴포넌트에서 해당 영역에 부모 컴포넌트로부터 전달된 컨텐츠를 표시하도록 지시함.
-->

<template>
  <div class="parentsContainer">
    <h1>Parents</h1>
    <Child>
      {{ props }}
    </Child>
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
