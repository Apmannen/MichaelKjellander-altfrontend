import { ReactNode } from "react";
import cssClasses from "./MainShell.module.css";

export function MainShell({ children }: { children: ReactNode }) {
	return (
		<>
			<div className={`${cssClasses.container}`}>
				<Sidebar />
				<main className={`${cssClasses.main} pt-20`}>{children}</main>
			</div>
		</>
	);
}

function Sidebar() {
	return (
		<>
			<div className={`${cssClasses.sidebar} pt-20`}>Michael Kjellander</div>
		</>
	);
}
