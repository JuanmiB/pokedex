import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { idCategoria } = useParams()

    useEffect(() => {
    
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(err => console.log(err))
    }, [idCategoria])

    return (
        <div className="body">
            <div className="box">
            <h2>Productos</h2>
            <ItemList productos={productos} />
            </div>
        </div>
    )
}
export default ItemListContainer