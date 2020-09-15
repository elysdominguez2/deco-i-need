import React from "react";

function Comprar() {
    function handleClick(e) {
      e.preventDefault();
      console.log('Se agregó al carrito');
    }
  
    return (
        <div>
            <button className="btn btn-dark" href="#" onClick={handleClick}>
                Agregar al carrito
            </button>
        </div>
    );
  }

  export default Comprar;