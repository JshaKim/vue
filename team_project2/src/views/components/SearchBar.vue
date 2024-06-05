<template>
    <div class="search-bar">
      <input v-model="searchQuery" placeholder="검색" />
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    modelValue: String
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const searchQuery = ref(props.modelValue);
  
  watch(searchQuery, (newValue) => {
    emit('update:modelValue', newValue);
  });
  </script>
  
  <style scoped>
  .search-bar {
    margin: 10px 0;
  }
  </style>