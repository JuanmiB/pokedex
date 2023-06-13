import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CarritoContext"

const ItemDetail = ({ id, producto, precio, img, stock }) => {
    const [cantidad, setCantidad] = useState(0)


    const {agregarProducto} = useContext(CarritoContext)

    const manejadorCant = (cantidad) => {
        setCantidad(cantidad)

        const item = {id, producto, precio};
        agregarProducto(item, cantidad) 
    }
    return (
        <div className='contenedorItem'>
            <div className="contenedorImg">
                <img src={img} alt={producto} className="img-prod" />
            </div>
            <div className="contenedorInfo">
                <h2>{producto} </h2>
                <h3>Precio: {precio} </h3>
                <h3> ID: {id} </h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum odit omnis modi consectetur beatae placeat a optio inventore cumque quod aspernatur sequi accusamus hic labore, vitae debitis blanditiis ad quisquam?</p>
                {/* ternario que muestre si hay productos, stock disponible si no hay stock =0 entonces un cartel que diga no hay stock */}
                <p className="stock">{stock ? "Hay stock" : "No hay stock"}</p>
                <span>Unidades disponibles:{stock} </span>
            </div>
            
            {
                cantidad > 0 ? (<Link to="/cart">Terminar compra</Link>) : (<ItemCount stock={stock} fnAdd={manejadorCant} />)
            }

        </div>
    )
}
//renderizar la cantidad del producto
export default ItemDetail