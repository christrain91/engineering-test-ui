import { BookingService } from "../services/booking.service";
import { SectionHeader } from "./common/section_header";
import { SingleBooking } from "./single_booking";

export async function Bookings({ className }: { className?: string }) {
	const bookingService = new BookingService();
	const bookings = await bookingService.list();

	return (
		<div className={className}>
			<SectionHeader>Bookings</SectionHeader>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{bookings.map((booking) => (
					<SingleBooking key={booking.id} booking={booking} />
				))}
			</div>
		</div>
	);
}
