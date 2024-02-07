export default function AppLayout () {
    return (
        <>
            <header>This is header</header>
            <main>
                {children}
            </main>
            <footer>
                This is footer
            </footer>
        </>
    )
}