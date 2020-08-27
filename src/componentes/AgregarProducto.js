import React from 'react';
import AlmoCactus from './AlmoCactus.png';
import './AgregarProducto.css';
import './ContadorCart.js';
import ContadorCart from './ContadorCart.js';

class AgregarProducto extends React.Component {
    render() {
      return (
        
        <div className="producto">
        <div className="AgregarProducto" style={{ width: '18rem' }}/>
        <img src={AlmoCactus} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Almohadón Cactus</h5>
            <p className="card-text">$800</p>
            <ContadorCart/>
        </div>
        
        </div>
        
      )
      
      
    }
  }
  export default AgregarProducto;

/*function AgregarProducto() {
    return (
        
    <div className="AgregarProducto">

        <div className="card" style="width: 18rem;"/>
        <img src="../public/pig404.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    
    </div>
      
    );
  }
  
  export default AgregarProducto;*/