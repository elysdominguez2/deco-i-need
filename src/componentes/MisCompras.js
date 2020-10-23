import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext';

function MisCompras() {
    
    const infoContext = useContext(InfoContext);
    
      if (infoContext.isLogin) {
          
    return (
      <div className="saludo">
        <p>Este es mi Id de compra {infoContext.myPurchase}</p>
      </div>
    ); } 
     
  };

export default MisCompras;