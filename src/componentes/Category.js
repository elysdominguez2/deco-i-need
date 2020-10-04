import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import { getFirestore } from '../firebase/index.js'

function Category() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [items, setItems] = useState([]);

     useEffect(() => {
       setLoading(true);
       const db = getFirestore();
       const itemCollection = db.collection("category")
       itemCollection.get()
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
     }, []);

     if (!loading) {
       console.log(items)
       return(
           <div className="productos">
             {items.map(producto => (
              <div key={producto.id}>
                 
                <a className="dropdown-item" href="#"><NavLink to={`/category/${producto.category}`}>{producto.name}</NavLink></a>
                         
              </div>
            ))}
          </div>
       );
     }
     if (loading) {
      return(
         <div className="esperar"></div>
      );
    }
    }
    
export default Category;








