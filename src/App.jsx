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
function App() {
  return (
  <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/' element={ <ItemListContainer/>} />
    <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
    <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
  </Routes>
  </BrowserRouter>

  </>
  );
}

export default App;
