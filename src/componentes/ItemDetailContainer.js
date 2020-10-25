import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../firebase/index.js'

import Loading from './Loading';
import ItemDetail from './ItemDetail';
import PageNotFound from './PageNotFound.js';

import './estilos/ItemDetailContainer.css';

function ItemDetailCont() {
    const [producto, setProducto] = useState([]);
    const [productoEncontrado, setProductoEncontrado] = useState(false);
    const [loading, setLoading] = useState(true);
    let {id} = useParams();

    useEffect (() => {
      setLoading (true)
      const db = getFirestore()
      const itemCollection = db.collection('items');
      const item = itemCollection.doc(id);

      item.get()
      .then((doc) => {
        if (!doc.exists){
          console.log("Este Item no existe!");
          setProductoEncontrado(false);
          
        } else{
          console.log("Item encontrado!");
          setProductoEncontrado(true);
          setProducto({id:doc.id, ...doc.data()});
        }
      })
      .catch((error) => {
        console.log("Error buscando este Item: ", error);
      })
      .finally(() => {
        setLoading (false);
      })
    },[id]);


    if (!loading) {

      if(productoEncontrado){
        return(
          <div key={producto.id} className="producto">
            <ItemDetail producto={producto}/>
          </div>
        );
      }else{
        return(
          <PageNotFound/>
        )
      }
    } else {
      return(
         <div className="esperar">
            <Loading/>
          </div>
        );
    }
  }
    
export default ItemDetailCont;