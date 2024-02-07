"use client";

import { useEffect } from "react";

export default function AppLayout({ children }) {
    useEffect(() => {
			const updateDocumentHeight = () => {
				const doc = document.documentElement;
				doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
			};

			window.addEventListener("resize", updateDocumentHeight);
			updateDocumentHeight();

			return () => window.removeEventListener("resize", updateDocumentHeight);
		}, []);
        
	return (
		<>
			<header className="flex items-center px-4 h-14 bg-slate-200">
				Header
			</header>
			<main className="flex-1 overflow-hidden bg-sky-300">{children}</main>
			<footer className="flex items-center px-4 h-14 bg-slate-300">
				Footer
			</footer>
		</>
	);
}