<script setup>
import { reactive } from "vue";
import NamedChild from "./NamedChild.vue";

const obj = reactive({
  name: "vue",
  founder: "Evan You",
  img: "https://images.ctfassets.net/s5uo95nf6njh/2fEr6ctL9FxPtOPhUcM4FA/773007e573bfa16aebdb736f767b45fa/evan-you-hero.jpg",
});
</script>

<template>
  <div class="container">
    <h1>NamedSlot</h1>
    <NamedChild>
      <template v-slot:name>
        <h2>name :{{ obj.name }}</h2>
      </template>
      <template #founder>
        <p>founder : {{ obj.founder }}</p>
      </template>
      <template v-slot:img>
        <img :src="obj.img" alt="image" />
      </template>
    </NamedChild>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
}

.img {
  width: 80px;
  height: 80px;
}
</style>
