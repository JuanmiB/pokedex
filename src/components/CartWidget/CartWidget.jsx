import "./CartWidget.css"
import carro from "../../carrito.png"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
const CartWidget = () => {
    const {carrito} = useContext(CarritoContext)
     const totalCantidad = carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0)
    
     
     return (
        <Link to="/cart" >
        <div className="container-carrito">
            <img className="imgCarrito" src={carro} alt="CarritoPng" />
            {
                totalCantidad > 0 && <span> {totalCantidad} </span>
            }
        </div>
        </Link>
    )
}

export default CartWidget