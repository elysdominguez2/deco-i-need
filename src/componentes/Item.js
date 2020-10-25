import React from "react";
import {NavLink} from 'react-router-dom';

import './estilos/Item.css';


function Item(props) {  
    return (  
       <div className= "card-deck">  
            <div className="card" key={props.producto.id}>
              <img className="card-img-top" src={props.producto.img} alt="..."/>
              <div className="card-body">
                <h4 className="card-title">{props.producto.name}</h4>
                <h3 className="card-title">{props.producto.title}</h3>
                <h5 className="card-text">${props.producto.price}</h5>
                <button className="btn btn-dark">
                  <NavLink to={`/item/${props.producto.id}`} className="nav-link">Ver más</NavLink>
                </button>
              </div> 
            </div>
        </div>  
      );  
  };

export default Item;