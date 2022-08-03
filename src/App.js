
import './App.css';
// import { useState } from 'react';
import Navbar from './components/Navbar/Navbar/Navbar';
// import Counter  from './components/Navbar/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {
 
  return (
    <div className="App">
        <Navbar />
        {/* <Counter show = {show} stock = {10} initial = {1} onAdd ={handleOnAdd}/> */}
        <ItemListContainer  greeting = "Bienvenidos a Tienda"/>
        {/* <MercadoLibre/> */}
        <ItemDetailContainer />
    </div>
  );
}
        


export default App;
