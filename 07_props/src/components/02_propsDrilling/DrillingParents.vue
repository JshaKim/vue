<script setup>
    import {provide, ref} from 'vue';
    import Child from './DrillingChilde.vue';
    const count = ref(0);
    provide('count', count);
</script>

<template>
  <div class="container">
    <h1>parents : {{ count }}</h1>
    <Child />
  </div>
</template>

<style scoped>
    .container{
        border: 1px solid #000;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
