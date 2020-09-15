import React from 'react';
import './Home.css';

import ItemDetailCont from './ItemDetailContainer';




    function Home(props) {
        return (
            <div className="Home">
                <h5>Hola! {props.name}</h5>
                
                
                <ItemDetailCont/>
            
                
            </div>
        )

      }
      

export default Home;