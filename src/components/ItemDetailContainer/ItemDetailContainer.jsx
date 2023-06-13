import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../../service/config';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(dataBase, "inventario", idItem)
        getDoc(nuevoDoc)
            .then(resp => {
                const data = resp.data()
                const nuevoProd = { id: resp.id, ...data }
                setProducto(nuevoProd)
            })
            .catch(error => console.log(error))
}, [])


return (
    <div>
        <ItemDetail {...producto} />
    </div>
)
}

export default ItemDetailContainer