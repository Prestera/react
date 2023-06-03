import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/NavBar/Navbar";
import Inico from "./components/Pages/Inicio";
import Carrito from "./components/Pages/Carrito";
import Contacto from "./components/Pages/Contacto";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";


function App() {
  
  return (
    <><div className="App">

      <Navbar />

    </div><div>
        <ItemsListContainer greeting=" Primer práctica con react :)" />
      </div></>
  );
}

export default App;