import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, fnAdd}) => {
    const [contador, setContador] = useState(1)

    const incrementarContador = () => {
        if (contador < stock){
            setContador(contador + 1)
        }
        
    }

    const disminuirContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }




    return (
        <>
        <div>
        
            <h2>ItemCount</h2>
            <button onClick={disminuirContador}> - </button>
            <p> {contador} </p>
            <button onClick={incrementarContador}> + </button>
        </div>
        <button onClick={()=>fnAdd(contador)}>Agregar al carrito</button>
        </>

    )
}

export default ItemCount