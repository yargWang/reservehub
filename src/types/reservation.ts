export type ReservationStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no-show'

export interface Reservation {
  id: string
  restaurantId: string
  userId: string
  guestCount: number
  reservationDate: string
  reservationTime: string
  status: ReservationStatus
  note?: string
}
