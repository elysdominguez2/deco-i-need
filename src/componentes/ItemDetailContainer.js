import React, { useState } from 'react';
import Portallaves1 from './imagenes/portallaves1.png';
import Loading from './Loading';
import ItemDetail from './ItemDetail';

function ItemDetailCont() {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
   
    obtenerUnProducto()
      .then((producto) => {
        setLoading(false);
        setProducto(producto);
      })
      .catch((err) => {
        setError(err);   
      });
      if (loading) {
        return (
          <Loading/>
        );
      } else {
        if (!error) {
          return (
            <ul className="producto">
              {producto.map((prod) => (
                <ItemDetail prod={prod}/>
              ))}
            </ul>  
          );
        } else return <span>{error}</span>;
      }
     
  }
  
function obtenerUnProducto() {                                                                                          
     return new Promise((resolve, reject) => {                            
         setTimeout(() => {                                                 
           resolve([ 
            { id: 'Portallaves', foto: <img src={Portallaves1} alt="..."/>, nombre:'Pajaritos', descripcion:'Hermoso y divertido para no perder más tus llaves', stock: 8, precio:800},
            ]);                                                              
         }, 3000);                                                          
       });                                                                  
    };
    
export default ItemDetailCont;