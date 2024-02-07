import { Children } from "react/cjs/react.production.min";

export default function AppLayout () {
    return (
        <>
            <header>This is header</header>
            <main>
                {Children}
            </main>
        </>
    )
}