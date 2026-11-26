<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <RouterLink :to="{ name: 'home' }" class="brand"> ReserveHub </RouterLink>

      <nav class="navigation" aria-label="主要導覽">
        <RouterLink :to="{ name: 'home' }"> 首頁 </RouterLink>

        <RouterLink :to="{ name: 'restaurants' }"> 探索餐廳 </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    max-width: 1200px;
    margin-inline: auto;
    padding: 1rem 1.5rem;
  }
}

.brand {
  color: #173f35;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
}

.navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  a {
    color: #68736d;
    text-decoration: none;
    transition: color 180ms ease;

    &:hover {
      color: #173f35;
    }

    &.router-link-exact-active {
      color: #173f35;
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }
}

@media (max-width: 600px) {
  .app-header__inner {
    flex-direction: column;
  }
}
</style>
