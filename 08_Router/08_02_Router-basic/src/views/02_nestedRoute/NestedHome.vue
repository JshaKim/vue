<script setup>
import { useRouter } from "vue-router";
const routre = useRouter();
</script>

<template>
  <div>
    <h1>NestedHome</h1>
    <button @click="() => Router.push('/nested/hidden')">숨긴 화면</button>
    <button @click="() => Router.go(1)">앞으로 가기</button>
  </div>
</template>
