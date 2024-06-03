<script setup>
    import {inject} from 'vue';
    const readValue = inject("readValue");
     
</script>

<template>
  <h3>전달 받은 props : {{ message }}</h3>
  자식의 : <input v-model="readValue" />
</template>
