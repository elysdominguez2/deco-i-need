import React from 'react';
import AlmoCactus from './AlmoCactus.png';
import './AgregarProducto.css';
import ItemCount from './ItemCount';

class AgregarProducto extends React.Component {
    render() {
      return (
        
        <div className="producto">
        <div className="AgregarProducto" style={{ width: '18rem' }}/>
        <img src={AlmoCactus} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Almohadón Cactus</h5>
            <p className="card-text">$800</p>
            <ItemCount max="10" min="0"/>
            <button className="btn btn-dark">Agregar al Carrito</button>
        </div>
        
        </div>
        
      )
      
      
    }
  }
  export default AgregarProducto;

