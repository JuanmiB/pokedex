import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"
const Item = ({ id, precio, producto, img }) => {
    return (
        <div className='item-Box'>
            <img className='itemImg' src={img} alt={producto} />
            <h3>{producto} </h3>
            <p className='price'>${precio} </p>
            <Link className='details' to={`/item/${id}`}> Ver Detalles</Link>
        </div>
    )
}

export default Item