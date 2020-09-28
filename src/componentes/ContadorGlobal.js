import React, {useContext} from "react";
import {CartContext} from '../context/cartContext';



function BotonAgregar(props) {
  const [agregarCarrito, cart] =useContext(CartContext);
    

    const enviarACarrito =() =>{
        const producto = props.id;
        agregarCarrito(producto, props.count);
    }
  
    return (
        <button className="btn btn-dark" onClick={enviarACarrito}>
          Agregar {props.count} al carrito
        </button>
    );
  }

  export default BotonAgregar;
  