<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 0px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 0 auto 1rem;
  max-width: 100%;
  padding: 1rem;
  z-index: 0;
}
</style>