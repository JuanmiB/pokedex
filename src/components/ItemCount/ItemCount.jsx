import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

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
        <div className='contador'>
            <button onClick={disminuirContador} className='btn'> - </button>
            <p> {contador} </p>
            <button onClick={incrementarContador} className='btn'> + </button>
        </div>
        <button onClick={()=>fnAdd(contador)} className='btn'>Agregar al carrito</button>
        </>

    )
}

export default ItemCount