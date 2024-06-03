<script setup>
import {inject, ref} from 'vue';

const count = inject("count");

</script>

<template>
    <h3>손자 : {{ count }}</h3>
    <button @click="propsCountUp++">{{propsCount}}</button>
</template>
