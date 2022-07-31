
import './App.css';
import Navbar from './components/Navbar/Navbar/Navbar';
import Counter  from './components/Navbar/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';
import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd =(quantity)=> {
    console.log ("cantidad de items agregados", quantity)
  }
  return (
    <div className="App">
        <Navbar />
        <Counter show = {show} stock = {10} initial = {1} onAdd ={handleOnAdd}/>
        <ItemListContainer show = {show} setShow = {setShow} greeting = "Bienvenidos a Tienda"/>
        {/* <MercadoLibre/> */}
        <itemDetailContainer show = {show} setShow = {setShow} greeting = "Ver detalle"/>
    </div>
  );
}
        


export default App;
