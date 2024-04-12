import { Bookings } from "@/components/bookings";
import { FailedToLoadMessage } from "@/components/common/failed-to-load-message";
import { Parcs } from "@/components/parcs";
import { Users } from "@/components/users";
import { Suspense } from "react";

export default function Home() {
	return (
		<main className="flex justify-center">
			<div className="p-8 max-w-[1600px] grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-x-32 xl:gap-y-16">
				<Suspense fallback={<FailedToLoadMessage entity="Parcs" />}>
					<Parcs className="flex-1" />
				</Suspense>
				<Suspense fallback={<FailedToLoadMessage entity="Bookings" />}>
					<Bookings className="flex-1" />
				</Suspense>
				<Suspense fallback={<FailedToLoadMessage entity="Users" />}>
					<Users className="xl:col-span-2 flex-1" />
				</Suspense>
			</div>
		</main>
	);
}

export const revalidate = 60; // Revalidate every 60 seconds
