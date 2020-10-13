import React from 'react';
import './Home.css';
import Login from './Login';

    function Home(props) {
        return (
            <div className="Home">
                <h5>Hola! {props.name}</h5>
                <Login isLoggedIn={false}/> 
                
            </div>
        )

      }
      

export default Home;