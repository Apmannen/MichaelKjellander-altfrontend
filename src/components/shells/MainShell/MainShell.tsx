import { ReactNode } from "react";
import cssClasses from "./MainShell.module.css";
import { fontNotoSans } from "@/components/styling/GlobalCssClasses/functions";

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
			<div className={`${cssClasses.sidebar} pt-20`}>
				<a className={`text-3xl font-bold ${fontNotoSans}`} href="/">Michael Kjellander</a>
			</div>
		</>
	);
}
