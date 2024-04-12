export function FailedToLoadMessage({ entity }: { entity: string }) {
	return (
		<div className="flex items-center justify-center h-64 text-gray-500 p-8">
			<div className="text-center">
				<h2 className="text-2xl font-bold mb-4">Failed to load {entity}</h2>
				<p>Something went wrong while trying to load {entity}.</p>
			</div>
		</div>
	);
}
