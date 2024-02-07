export default function AppLayout({ children }) {
	return (
		<>
			<header className="h-14 bg-slate-200">This is header</header>
			<main>{children}</main>
			<footer className="h-14 bg">This is footer</footer>
		</>
	);
}

