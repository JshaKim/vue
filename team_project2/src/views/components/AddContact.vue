<template>
    <div class="add-contact">
      <input v-model="newContact" placeholder="새 연락처 입력" />
      <button @click="addNewContact">추가</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const newContact = ref('');
  
  const emit = defineEmits(['add-contact']);
  
  const addNewContact = () => {
    emit('add-contact', newContact.value);
    newContact.value = '';
  };
  </script>
  
  <style scoped>
  .add-contact {
    margin-top: 20px;
  }
  </style>