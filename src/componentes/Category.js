import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import { getFirestore } from '../firebase/index.js'

function Category() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [categories, setCategories] = useState([]);

     useEffect(() => {
       setLoading(true);
       const db = getFirestore();
       const categoryCollection = db.collection("category")
       categoryCollection.get()
       .then((querySnapshot) => {
         if(querySnapshot.size === 0) {
           console.log('No results!');
         }
         setCategories(querySnapshot.docs.map(doc => {
            return({ id: doc.id, ...doc.data()});
       }));  
       }).catch((error) => {
         console.log("Error searching items", error);
       }).finally(() => {
         setLoading(false);
       });
     }, []);

     if (!loading) {
       console.log(categories)
       return(
           <div className="productos">
             {categories.map(category => (
              <div key={category.id}>
                 
                <a className="dropdown-item" href="#"><NavLink to={`/category/${category.category}`}>{category.name}</NavLink></a>
                         
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








