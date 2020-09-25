import React from "react";

function BotonAgregar(props) {

    function handleClick() {
        console.log('agregar al carrito');
    }
  
    return (
        <button className="btn btn-dark" onClick={handleClick}>
          Agregar {props.count} al carrito
        </button>
    );
  }

  export default BotonAgregar;
  