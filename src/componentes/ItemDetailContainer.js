import React, { useState } from 'react';
import Almohadon1 from './imagenes/almohadon1.png';
import Alfombra1 from './imagenes/alfombra1.png';
import Cobertor1 from './imagenes/cobertor1.png';
import Florero1 from './imagenes/florero1.png';
import Portallaves1 from './imagenes/portallaves1.png';
import Loading from './Loading';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';

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
          <div className="esperar">
          <Loading/>
          </div>
        );
      } else {
        if (!error) {
          return (
            <ul className="producto">
              {producto.map((prod) => (
                <div key={prod.id}>
                <ItemDetail prod={prod}/>
                </div>
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
            {id: 'Almohadon', foto: <img src={Almohadon1} alt="..."/>, nombre: 'Cactus', descripcion:'Almohadon pintado con cactus', stock: 10, precio:'300'},
            {id: 'Alfombra', foto: <img src={Alfombra1} alt="..."/>, nombre:'Maline', descripcion:'alfombra bordada varios colores', stock: 5, precio:'400'},
            {id: 'Cobertor', foto: <img src={Cobertor1} alt="..."/>, nombre:'Feliz', descripcion:'cobertor tejido o manta artesanal', stock: 10, precio:'1000'},
            {id: 'Florero', foto: <img src={Florero1} alt="..."/>, nombre:'Frodo', descripcion:'florero de color', stock: 6, precio:'500'},
            {id: 'Portallaves', foto: <img src={Portallaves1} alt="..."/>, nombre:'Pajaritos', descripcion:'Hermoso y divertido para no perder más tus llaves', stock: 8, precio:'800'}
            ]);                                                              
         }, 3000);                                                          
       });                                                                  
    };
    
export default ItemDetailCont;