import React, { useState } from 'react';
import Button from './Button';
import './ItemCount.css'
import CountGlobal from './prueba';

function ItemCount(props) {

    const [counter, setCounter] = useState(0);

    const sumar = () => {
        if (counter >= props.max){
            return;
        }else{
        setCounter ((prevCounter) =>
        {return prevCounter +1;
        
        });
    }
};

    const restar = () => {
        if (counter <= props.min){
            return;
        }else{
        setCounter ((prevCounter) =>
        {return prevCounter -1;
           
        });
    }
};
    
    return (
        <div className= "botonProducto">
            <Button onClick={restar} sign={"-"}/>
            <h4>{counter}</h4>
            <Button onClick={sumar} sign={"+"}/>
        </div>
    );
};

export default ItemCount;