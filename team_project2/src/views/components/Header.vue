<template>
    <div class="header">
      <h1>내 연락처</h1>
      <button @click="$emit('add-contact')">+</button>
    </div>
  </template>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #00bfa5;
    padding: 10px;
    color: white;
  }
  </style>