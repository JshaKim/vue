<script setup></script>

<template>
  <div class="container">
    <div class="north">
      <slot name="1"></slot>
    </div>
    <div class="east">
      <slot name="2"></slot>
    </div>
    <div class="west">
      <slot name="3"></slot>
    </div>
    <div class="south">
      <slot name="4"></slot>
    </div>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}

.north {
  grid-column: 1 / span 2;
  height: 200px;
}

.south {
  grid-column: 1 / span 2;
  height: 200px;
}

.east {
  width: 200px;
  height: 200px;
}

.west {
  width: 200px;
  height: 200px;
}
</style>
