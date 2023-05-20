import "./ItemDetail.css"

const ItemDetail = ({ id, nombre, precio, img, cantidad }) => {
    return (
        <div className='contenedorItem'>
            <div className="contenedorImg">
            <img src={img} alt={nombre} />
            </div>
            <div className="contenedorInfo">
            <h2>{nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3> ID: {id} </h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum odit omnis modi consectetur beatae placeat a optio inventore cumque quod aspernatur sequi accusamus hic labore, vitae debitis blanditiis ad quisquam?</p>
            <p className="stock">{cantidad ? "Hay stock" : "No hay stock"}</p>
            <span>Unidades disponibles:{cantidad} </span>
            </div>
        </div>
    )
}
//renderizar la cantidad del producto
//crear una funcion ue muestre si hay productos, stock disponible y los productos
//si no hay stock =0 entonces un cartel que diga no hay stock
export default ItemDetail