import React from 'react';
import './Home.css';


    function Home(props) {
        return (
            <div className="Home">
                <h5>Bienvenida {props.name}</h5>
            </div>
        )

      }
      

export default Home;