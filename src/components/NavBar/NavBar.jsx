import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../logo-anime.png"
import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <div className='navBar'>
            <header>
                <Link to={"/"}>
                    <img src={logo} alt="logo" className='logo' />
                </Link>
                <h1><NavLink to={"/"} >OTAKU TIENDA</NavLink></h1>
                <nav>
                    <ul>
                        <li><NavLink to={"/categoria/manga"} >Manga</NavLink></li>
                        <li><NavLink to={"/categoria/figuras"} >Figuras</NavLink></li>
                        <li><NavLink to={"/categoria/taza"} > Tazas </NavLink></li>
                    </ul>
                </nav>
                <CartWidget />
            </header>
        </div>
    )
}

export default NavBar