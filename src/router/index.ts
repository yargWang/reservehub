import { createRouter, createWebHistory } from 'vue-router'

import CustomerLayout from '../layouts/CustomerLayout.vue'
import HomeView from '../views/customer/HomeView.vue'
import RestaurantsView from '../views/customer/RestaurantsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: CustomerLayout,

      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'restaurants',
          name: 'restaurants',
          component: RestaurantsView,
        },
      ],
    },
  ],
})

export default router
