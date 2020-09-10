import React, { useState } from 'react';
import Item from "./Item";
import './ItemList.css';
import Almohadon1 from './imagenes/almohadon1.png';
import Alfombra1 from './imagenes/alfombra1.png';
import Cobertor1 from './imagenes/cobertor1.png';
import Florero1 from './imagenes/florero1.png';
import Portallaves1 from './imagenes/portallaves1.png';

function ItemsList() {
    const [productos, setProductos] = useState([]);               
    const [error, setError] = useState("");
   
    obtenerProductos()
      .then((productos) => {
        setProductos(productos);
      })
      .catch((err) => {
        setError(err);   
      });
     if (!error) {
       return (
         <ul className="productos">
           {productos.map((producto) => (
             <Item producto={producto} />
           ))}
         </ul>  
       );
     } else return <span>{error}</span>;
  }
  
function obtenerProductos() {                                                                                          
     return new Promise((resolve, reject) => {                            
         setTimeout(() => {                                                 
           resolve([                                                        
            {id: 'almohadon1', foto: <img src={Almohadon1} alt="..."/>, nombre: 'Cactus', descripcion:'Almohadon pintado con cactus', stock: 10},
            {id: 'alfombra1', foto: <img src={Alfombra1} alt="..."/>, nombre:'Maline', descripcion:'alfombra bordada varios colores', stock: 5},
            {id: 'cobertor1', foto: <img src={Cobertor1} alt="..."/>, nombre:'Feliz', descripcion:'cobertor tejido o manta artesanal', stock: 10},
            {id: 'florero1', foto: <img src={Florero1} alt="..."/>, nombre:'Frodo', descripcion:'florero de color', stock: 6},
            {id: 'portallaves1', foto: <img src={Portallaves1} alt="..."/>, nombre:'Pajaritos', descripcion:'portallaves divertido', stock: 8}
           ]);                                                              
         }, 2000);                                                          
       });                                                                  
    };
    
    export default ItemsList;





