// import { useState, createContext } from "react";

// //crear contexto
// //valor inicial es un objeto con la propiedad carrito con un array vacio

// export const CarritoContext = createContext({ carrito: [] })

// export const CarritoProvider = ({children }) => {
//     //estado local carrito
//     const [carrito, setCarrito] = useState([])

//     console.log(carrito)

//     const agregarProducto = (item, cantidad) => {
//         if (!yaEsta(item.id)) {
//             setCarrito(prev => [...prev, { item, cantidad }])
//         } else {
//             console.log("Producto ya agregado!");
//         }
//     }
//     //funcion auxiliar
//     const yaEsta = (id)=>{
//         return carrito.some(prod => prod.id === id)
        
//     }

//     //eliminar
//     const eliminarProducto = (id) => {
//         const carritoActualizado = carrito.filter(prod => prod.id !== id)
//         setCarrito(carritoActualizado)
//     }

//     //vacias
//     const vaciarCarrito = () => {
//         setCarrito([])
//     }
// // componente CarritoContex.provider para enviar el valor actual del carrito y los metodos a los componentes de mi aplicacion ue lo necesite.
// return(
//     <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito}}>
//         {children}
//     </CarritoContext.Provider>
// )

// }  
import { useState, createContext } from "react";


export const CarritoContext = createContext({ 
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    
    const agregarProducto = (item, cantidad) => {
    
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal( prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal( prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));

        }
    }


    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    
    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    

    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito, total, cantidadTotal }}>
            {children}

        </CarritoContext.Provider>
    )
}
