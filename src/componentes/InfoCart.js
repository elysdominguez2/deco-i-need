import React, {useState, useContext} from 'react';
import { InfoContext } from '../context/infoContext';
import 'firebase/firestore';



function Form() {
    const [data, setData]= useState([{name:'',user: '',email: '',pass: '',tel: ''}]);
    const infoContext = useContext(InfoContext); 
    
    const handleChange =(e) => {
        setData({
          ...data, [e.target.name] : e.target.value
        })
      }
  
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('mostrar datos:' + data.name, data.user, data.email,  data.pass, data.tel);
        console.log(data);
        e.target.reset();
        infoContext.setUserData(data);
        console.log(infoContext.test);
        infoContext.setIsLogin(true);
        
      }

      function comprobarEmail(){
        const email2 = document.form1.email2.value;
        const email3 = document.form1.email3.value;

          if (email2 === email3)
          return;
          else
          alert("Los dos emails son diferentes, ingresalo nuevamente")
          
      }

      return(

            <div className="container">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail1">Email</label>
                                            <input type="email" name="email" onChange={handleChange} className="form-control" id="inputEmail1" aria-describedby="emailHelp" required/>
                                            
                                            <small id="emailHelp" className="form-text text-muted">No compartiremos tu email.</small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword1">Password</label>
                                            <input type="password" name="pass" onChange={handleChange} className="form-control" id="inputPassword1" required/>
                                        </div>

                                        <button type="submit" className="btn btn-dark">Login</button>
                                        
                                    </form>
                            
                                <form onSubmit={handleSubmit} name="form1">
                                    <div className="form-group">
                                        <label htmlFor="inputAlias2">Usuario</label>
                                        <input type="text" name="user" onChange={handleChange} className="form-control" id="inputAlias2" required/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputName2">Nombre y Apellido</label>
                                        <input type="text" name="name" onChange={handleChange} className="form-control" id="inputName2" required/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputTel2">Telefono</label>
                                        <input type="text" name="tel" onChange={handleChange} className="form-control" id="inputTel2" required/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail2">Email</label>
                                        <input type="email" name="email2" onChange={handleChange} className="form-control" id="inputEmail2" aria-describedby="emailHelp" required/>
                                        
                                        <small id="emailHelp" className="form-text text-muted">No compartiremos tu email.</small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inputEmail2">Por favor repite tu email</label>
                                        <input type="email" name="email3" onChange={handleChange} onBlur={comprobarEmail} className="form-control" id="inputEmail3" aria-describedby="emailHelp" required/>
                                        
                                        <small id="emailHelp" className="form-text text-muted">No compartiremos tu email.</small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inputPassword2">Password</label>
                                        <input type="password" name="pass" onChange={handleChange} className="form-control" id="inputPassword2" required/>
                                        
                                    </div>
                                

                                <button type="submit" className="btn btn-dark" >Crear cuenta</button>
                                
                                </form>

                                </div>
                  


         );
    
}

export default Form;




