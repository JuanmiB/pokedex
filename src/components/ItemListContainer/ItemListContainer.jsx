import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { dataBase } from "../../service/config"
import { collection, getDocs, where, query } from "firebase/firestore"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { idCategoria } = useParams()

    useEffect(() => {
        const misProductos = idCategoria ? query(collection(dataBase, "inventario"), where("idCat", "==", idCategoria)) : collection(dataBase, "inventario")
        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(nuevosProductos)

            })
    }, [idCategoria])

    return (
        <div className="body">
            <div className="box">
                <h2>Productos de la tienda</h2>
                <ItemList productos={productos} />
            </div>
        </div>
    )
}
export default ItemListContainer