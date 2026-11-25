// restaurantApi.ts

import { api } from './api'
import type { Restaurant } from '@/types/restaurant'

export async function getRestaurants() {
  const response = await api.get<Restaurant[]>('/restaurants')

  return response.data
}
