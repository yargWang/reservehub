<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <p>© {{ currentYear }} ReserveHub</p>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  padding: 1.5rem;
  background-color: #173f35;
  color: #fff;
  text-align: center;

  p {
    margin: 0;
    font-size: 0.875rem;
  }
}
</style>
