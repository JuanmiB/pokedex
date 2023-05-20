import "./CartWidget.css"
import carrito from "../../img/carrito.png"
const CartWidget = () => {
    return (
        <div className="container-carrito">
            <img className="imgCarrito" src={carrito} alt="CarritoPng" />
        <span>4</span>
        </div>
    )
}

export default CartWidget