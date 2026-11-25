export interface Restaurant {
  id: string
  name: string
  description: string
  cuisine: string[]
  rating: number
  reviewCount: number
  priceLevel: 1 | 2 | 3 | 4
  city: string
  district: string
  address: string
  coverImage: string
  isFavorite: boolean
}
