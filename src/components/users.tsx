import { UserService } from "../services/user.service";
import { SectionHeader } from "./common/section_header";

export async function Users({ className }: { className?: string }) {
	const userService = new UserService();
	const users = await userService.list();

	return (
		<div className={className}>
			<SectionHeader>Users</SectionHeader>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{users.map((user) => (
					<div key={user.id} className="bg-white p-4 rounded-lg shadow-md">
						<h2 className="text-2xl font-bold">{user.name}</h2>
						<p>{user.email}</p>
					</div>
				))}
			</div>
		</div>
	);
}
