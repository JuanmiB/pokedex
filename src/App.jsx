import './App.css';
//JSX es una sintaxis de JS

// 3 Caracteristicas fundamentales de los componentes:
//1) Renderizar un solo elemneto 
//2) Pueden recibir propiedades
//3) Pueden terner un estado

//¿Que es el estado?
//Es un objeto qu contiene informcaion del componente ue puede cambiar durante la ejecucion de la app

//Usamos "hooks", que son funciones de React que me perimten 

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';
import { CarritoProvider } from './context/CarritoContext';
function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h2>Sitio en constru</h2>} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          </CarritoProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
