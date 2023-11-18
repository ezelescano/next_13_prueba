const  Link  = require("next/link")

const Navbar = () => {
    return (
        <nav>
            <h1>NavBar</h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;