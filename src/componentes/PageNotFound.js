import React from "react";
import {NavLink} from 'react-router-dom';

import Llanto from './imagenes/llanto.gif';

import './estilos/PageNotFound.css';


const PageNotFound = () => (

  <div className= "container">
    <div className= "llanto">
      <h2>Uy! Parece que este producto ya se vendió</h2>
      <img src={Llanto} alt="mujer-llorando"/>
      <p>No te preocupes, puedes encontrar más aquí</p>
      <button className="btn btn-dark">
        <NavLink to={`/`} className="nav-link">Elegir productos</NavLink>
      </button>
    </div>
  </div>
)
export default PageNotFound


