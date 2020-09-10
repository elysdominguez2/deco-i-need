import React from 'react';
import './Home.css';
import ItemsList from './ItemList';
import ItemCount from './ItemCount';



    function Home(props) {
        return (
            <div className="Home">
                <h5>Bienvenida {props.name}</h5>
                <ItemsList/>
                <ItemCount max="10" min="0"/>
                <button className="btn btn-dark">Agregar al Carrito</button>
                
            </div>
        )

      }
      

export default Home;