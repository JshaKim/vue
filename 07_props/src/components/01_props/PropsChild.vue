<script setup>
import {inject} from 'vue';


const {message} = inject('data');
const darkMode = inject('darkMode');
const darkState = inject('darkState');
const readValue = inject("readValue");

</script>

<template>

    <h3> 전달 받은 props : {{ message }}</h3>
    <button @click="darkMode">자식의 다크모드{{darkState}}</button>
</template>
