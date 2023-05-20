const productos = [
    { nombre: "Figura Kokushibo", precio: 200, id: "1", img: "../productos/figura-kokushibo-kny.jpg", idCat: "figuras", cantidad: 0 },
    { nombre: "Figura Rengoku ", precio: 200, id: "2", img: "../productos/figura-rengoku-kny.jpg", idCat: "figuras", cantidad: 3 },
    { nombre: "Figura Zenitsu ", precio: 200, id: "3", img: "../productos/figura-zenitsu.jpg", idCat: "figuras", cantidad: 2 },
    { nombre: "Figura Tokito ", precio: 200, id: "4", img: "../productos/figura-tokito-kny.jpg", idCat: "figuras", cantidad: 1 },
    { nombre: "Figura Eren en cuero", precio: 200, id: "5", img: "../productos/figura-jagerista-eren.jpg", idCat: "figuras", cantidad: 0 },
    { nombre: "Figura Titan de Ataque", precio: 200, id: "6", img: "../productos/figura-titan-ataque-eren.jpg", idCat: "figuras", cantidad: 2 },
    { nombre: "Figura Levi", precio: 200, id: "7", img: "../productos/figura-levi.jpg", idCat: "figuras", cantidad: 0},
    { nombre: "Manga Jujutsu Kaisen", precio: 200, id: "8", img: "../productos/manga-jujutsu.jpg", idCat: "manga", cantidad: 0},
    { nombre: "Manga Kimetsu no Yaiba", precio: 200, id: "9", img: "../productos/manga-kny.jpg", idCat: "manga", cantidad: 1},
    { nombre: "Manga Shingeki", precio: 200, id: "10", img: "../productos/manga-snk.jpg", idCat: "manga", cantidad: 4},
    { nombre: "Manga Tokyo Revengers", precio: 200, id: "11", img: "../productos/manga-tokyorev.jpg", idCat: "manga", cantidad: 4},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 200)
    })
    
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una funcion que retorne una categoria de productos
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)
    })
}
