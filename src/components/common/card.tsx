import type { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => (
	<div className="bg-white p-4 rounded-lg shadow-md">{children}</div>
);

export const CardHeader = ({ children }: { children: ReactNode }) => (
	<div className="text-2xl mb-2 font-bold">{children}</div>
);
