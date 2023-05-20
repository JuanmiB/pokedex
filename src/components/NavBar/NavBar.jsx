import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../img/logo-anime.png"
import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <div className='navBar'>
            <header>
                <Link to={"/"}>
                <img src={logo} alt="logo" className='logo' />
                </Link>
                <h1>OTAKU TIENDA</h1>
                <nav>
                    <ul>
                        <li><NavLink to={"/"} >Home</NavLink></li>
                        <li><NavLink to={"/categoria/manga"} >Manga</NavLink></li>
                        <li><NavLink to={"/categoria/figuras"} >Figuras</NavLink></li>
                        <li>Plus Ultra + </li>
                    </ul>
                </nav>
                <CartWidget />
            </header>
        </div>
    )
}

export default NavBar