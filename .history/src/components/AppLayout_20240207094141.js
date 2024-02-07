export default function AppLayout({ children }) {
	return (
		<>
			<header className="h-14 bg-slate-200">This is header</header>
			<main>{children}</main>
			<footer>This is footer</footer>
		</>
	);
}

