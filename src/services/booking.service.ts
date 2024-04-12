import { ApiService } from './api.service';

export interface Booking {
  id: string;
  user: string;
  parc: string;
  bookingdate: string;
  comments: string;
}

export class BookingService extends ApiService {
   list() {
    return this.get<Booking[]>('bookings');
  }

   getById (id: number) {
    return this.get<Booking>(`bookings/${id}`);
  }

   create(Booking: Omit<Booking, 'id'>): Promise<Booking> {
    return this.post<Booking>('bookings', Booking);
  }

   remove(id: number) {
    return this.delete<Booking>(`bookings/${id}`);
  }
}