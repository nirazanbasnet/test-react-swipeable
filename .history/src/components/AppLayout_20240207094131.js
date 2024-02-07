export default function AppLayout({ children }) {
	return (
		<>
			<header className="h-">This is header</header>
			<main>{children}</main>
			<footer>This is footer</footer>
		</>
	);
}

