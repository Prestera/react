import React from 'react';
import img from "./pipi.png";
import CardWidget from '../CardWidget/CardWidget';



const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    
    <img src={img} alt= "logo" width={50}/> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.google.com.ar/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.google.com.ar/">Carrito</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="https://www.google.com.ar/">Contacto</a>
        </li>
        <li className='nav item position-absolute end-0'>
        <CardWidget/>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar