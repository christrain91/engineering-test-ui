import { ParcService } from "../services/parc.service";
import { Card, CardHeader } from "./common/card";
import { SectionHeader } from "./common/section_header";

export async function Parcs({ className }: { className?: string }) {
	const parcService = new ParcService();
	const parcs = await parcService.list();

	return (
		<div className={className}>
			<SectionHeader>Parcs</SectionHeader>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{parcs.map((parc) => (
					<Card key={parc.id}>
						<CardHeader>{parc.name}</CardHeader>
						<p>{parc.description}</p>
					</Card>
				))}
			</div>
		</div>
	);
}
