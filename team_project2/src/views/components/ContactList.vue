<template>
    <div class="contact-list">
      <ul>
        <li v-for="contact in contacts" :key="contact">{{ contact }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    contacts: Array
  });
  </script>
  
  <style scoped>
  .contact-list {
    margin-top: 20px;
  }
  </style>