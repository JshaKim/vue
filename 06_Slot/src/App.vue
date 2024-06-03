<script setup>
import MyComponent from "./components/01_component/MyComponent.vue";
import Parents from "./components/02_slotintro/SlotParents.vue";
import NamedParents from "./components/03_slotnamed/NamedParents.vue";
import DynamicParents from "./components/04_dynamicslot/DynamicParents.vue";
</script>

<template>
  <div>
    <h1>component Container</h1>
    <MyComponent />
  </div>

  <main>
    <Parents />
    <div class="test">
      <NamedParents />
    </div>
    <DynamicParents />
  </main>
</template>

<style scoped></style>
