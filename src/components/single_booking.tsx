import { isValid as isValidDate, formatDate } from "date-fns";
import type { Booking } from "../services/booking.service";
import { Card, CardHeader } from "./common/card";

export function SingleBooking({ booking }: { booking: Booking }) {
	const date = new Date(booking.bookingdate);

	if (!isValidDate(date)) {
		return null;
	}

	return (
		<Card>
			<CardHeader>{formatDate(date, "do LLL yyyy")}</CardHeader>
			<p>{booking.comments}</p>
		</Card>
	);
}
