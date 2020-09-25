import React from 'react';
import Button from './Button';
import './ItemCount.css'

function ItemCount(props) {

    const counter= props.count;
    const handleSumar= props.sumar;
    const handleRestar= props.restar;

    return (
        <div className= "botonProducto">
            <Button onClick={handleRestar} sign={"-"}/>
            <h4>{counter}</h4>
            <Button onClick={handleSumar} sign={"+"}/>
        </div>
    );
};

export default ItemCount;