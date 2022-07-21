
import './App.css';
import Navbar from './components/Navbar/Navbar/Navbar';
import Counter  from './components/Navbar/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Counter />
        <ItemListContainer greeting = "Bienvenidos a Tienda"/>
       </div>
  );
}
        


export default App;
