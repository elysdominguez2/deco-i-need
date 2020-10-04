import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../firebase/index.js'

import Loading from './Loading';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';



function ItemDetailCont() {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    let {id} = useParams();

    useEffect (() => {
      setLoading (true)
      const db = getFirestore()
      const itemCollection = db.collection('items');
      const item = itemCollection.doc(id);

      item.get()
      .then((doc) => {
        if (!doc.exists){
          console.log("Este Item no existe!")
        }
        console.log("Item encontrado!");
        setProducto({id:doc.id, ...doc.data()});
      })
      .catch((error) => {
        console.log("Error buscando este Item: ", error);
      })
      .finally(() => {
        setLoading (false);
      })
    },[id]);


    if (!loading) {
      
      return(
             <div key={producto.id} className="producto">
             <ItemDetail producto={producto} />
             </div>
      );
    }
    if (loading) {
      return(
         <div className="esperar">
          <Loading/>
        </div>
      );
    }
}
    
export default ItemDetailCont;