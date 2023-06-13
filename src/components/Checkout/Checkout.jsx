import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { dataBase } from '../../service/config'
import { collection, addDoc } from 'firebase/firestore'

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrderId] = useState("")

    const manejadorSubmit = (event) => {
        event.preventDefault()

        //validar ue los coampos del formulario esten completos
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completa todos los campos por favor")
            return
        }

        //validar que los emails coincidan
        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden!")
            return
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.producto,
                cantidad: producto.cantidad
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(dataBase, "ordenes"), orden)
            .then((docRef) => {
                setOrderId(docRef.id)
                vaciarCarrito()
            })
            .catch((error) => {
                console.log("error al crear la orden", error);
                setError("errro al generar la orden de compra, intente mas tarde")
            })

    }


    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={manejadorSubmit}>
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>{producto.item.producto} X {producto.cantidad} </p>
                        <p>Precio: $ {producto.item.precio} </p>
                        <hr />

                    </div>
                ))
                }
                <hr />
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Confirmacion de email</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                {
                    error && <p> {error} </p>
                }
                <button type='submit'>Finalizar Orden</button>
                {
                    ordenId && (
                        <strong>Gracias! tu numero de orden es: {ordenId} </strong>
                    )
                }
            </form>

        </div>



    )
}

export default Checkout