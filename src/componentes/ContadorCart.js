import React, { useState } from 'react';
import './ContadorCart.css';


function ContadorCart() {

    const [counter, setCounter] = useState(0);

    const incrementar = () => {
        setCounter ((prevCounter) =>
        {return prevCounter +1;
        
    });
};

return (
    <div className= "botonProducto">
        <button onClick={incrementar} className="btn btn-dark">Comprar</button>
        <br/>
        <span>En mi carrito:{counter}</span>
    </div>
    
);


}

export default ContadorCart;


