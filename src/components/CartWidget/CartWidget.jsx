import "./CartWidget.css"
import carro from "../../carrito.png"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    
     
     return (
        <Link to="/cart" >
        <div className="container-carrito">
            <img className="imgCarrito" src={carro} alt="CarritoPng" />
            {
                cantidadTotal > 0 && <span> {cantidadTotal} </span>
            }
        </div>
        </Link>
    )
}

export default CartWidget