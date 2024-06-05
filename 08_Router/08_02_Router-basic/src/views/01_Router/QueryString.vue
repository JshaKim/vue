<script setup>

import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();
onMounted(() => {
  console.log(route.query.q);
});
</script>

<template>
  <h2>name :{{ $route.query.name }} age :{{ $route.query.age }}</h2>
</template>
