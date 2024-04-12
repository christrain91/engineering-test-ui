import type { ReactNode } from "react";

export const SectionHeader = ({ children }: { children: ReactNode }) => (
	<h2 className="text-4xl font-bold mb-4">{children}</h2>
);
