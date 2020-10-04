import React from "react";
import {NavLink} from 'react-router-dom';
import './Item.css';


      
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
                <NavLink to={`/favs`} className="nav-link"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                </NavLink>
              </div> 
            </div>
          
        
       </div>  
     );  
   };

   export default Item;