import "./CartWidget.css"

const CartWidget = () => {
    const imgCarrito = "https://img.icons8.com/?size=512&id=2212PsH6OEOq&format=png"
    return (
        <div className="container-carrito">
            <img className="imgCarrito" src={imgCarrito} alt="CarritoPng" />
        <span>4</span>
        </div>
    )
}

export default CartWidget