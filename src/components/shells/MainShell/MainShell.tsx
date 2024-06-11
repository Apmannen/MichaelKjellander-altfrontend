import { ReactNode } from "react";

export function MainShell({ children }: { children: ReactNode }) {
	return (
		<>
			<main>{children}</main>
		</>
	);
}
