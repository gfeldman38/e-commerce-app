
import './App.css';
import Navbar from './components/Navbar/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import ItemCount from './components/ItemCount/ItemCount';
// import Animation from './components/Animation/Animation';
// import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
     
        <Navbar />
        {/* <Animation/> */}
        {/* <MercadoLibre/> */}
        <ItemCount/>
        <Routes>
          <Route path='/' element = {<ItemListContainer greeting="Bienvenidos al sitio de compras"/>}/>
          <Route path='/category/:categoryId' element ={<ItemListContainer greeting="Buscando"/>}/>
          <Route path='/ detail/:productId' element = {<ItemDetailContainer />}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}
        


export default App;
