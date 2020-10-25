import React, { useState, useEffect } from 'react';
import { getFirestore } from '../firebase/index.js';
import {useParams} from 'react-router-dom';

import Item from "./Item";
import Loading from './Loading';

function CategoryList() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    let {id} = useParams();

     useEffect(() => {
       setLoading(true);
       const db = getFirestore();
       const itemCollection = db.collection("items");
       const catObjetos = itemCollection.where("category", "==", id);

       catObjetos.get()
       .then((querySnapshot) => {
         if(querySnapshot.size === 0) {
           console.log('No results!');
          }
         setItems(querySnapshot.docs.map(doc => {
            return({ id: doc.id, ...doc.data()});
          }));  
        }).catch((error) => {
              console.log("Error searching items", error);
            }).finally(() => {
            setLoading(false);
        });
      }, [id]);

     if (!loading) {
       console.log(items)
       return(
           <div className="productos">
              {items.map(producto => (
                  <div key={producto.id}>
                    <Item producto={producto}/>
                  </div>
                ))}
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
    
export default CategoryList;