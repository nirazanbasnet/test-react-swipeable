export default function AppLayout({ children }) {
	return (
		<>
			<header className="h-14 bg-slate-200 f">This is header</header>
			<main>{children}</main>
			<footer className="h-14 bg-slate-300">This is footer</footer>
		</>
	);
}

