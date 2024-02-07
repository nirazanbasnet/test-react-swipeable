export default function AppLayout({ children }) {
	return (
		<>
			<header className="flex items-center px-4 h-14 bg-slate-200">
				This is header
			</header>
			<main>{children}</main>
			<footer className="flex items-center px-4 h-14 bg-slate-300">
				This is footer
			</footer>
		</>
	);
}

