import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <header>
            <h1>Tienda Manga</h1>
            <nav>
                <ul>
                    <li>Manga</li>
                    <li>Indumentaria</li>
                    <li>Articulos</li>
                    <li>Posters</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar