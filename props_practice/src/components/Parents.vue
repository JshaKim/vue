<script setup>
import { ref } from 'vue';

const propsData = defineProps({
    propsData: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <h3>부모 : {{ propsData }}</h3>
</template>

<style scoped>
h3{
    color: blue;
}
</style>