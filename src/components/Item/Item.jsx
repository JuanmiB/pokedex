import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"
const Item = ({ id, precio, nombre, img }) => {
    return (
        <div className='item-Box'>
            <img className='itemImg' src={img} alt={nombre} />
            <h3>{nombre} </h3>
            <p className='price'>${precio} </p>
            <Link className='details' to={`/item/${id}`}> Ver Detalles</Link>
        </div>
    )
}

export default Item