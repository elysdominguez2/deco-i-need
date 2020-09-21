import React from "react";

function Agregar() {
    function handleClick(e) {
      e.preventDefault();
      console.log('Se agregó al carrito');
    }
  
    return (
        <div>
            <button className="btn btn-dark nav-link" href="#" onClick={handleClick}>
                Agregar al carrito
            </button>
        </div>
    );
  }

  export default Agregar;
  