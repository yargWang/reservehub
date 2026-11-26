<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppHeader from '../components/common/AppHeader.vue'
import AppFooter from '../components/common/AppFooter.vue'
</script>

<template>
  <div class="customer-layout">
    <AppHeader />

    <main class="customer-layout__main">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.customer-layout {
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  min-height: 100dvh;

  background-color: #f7f7f5;

  &__main {
    flex: 1;
    min-width: 0;
  }
}
</style>
