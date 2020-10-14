import React, {useState, useContext} from 'react';
import { InfoContext } from '../context/infoContext';
import {NavLink} from 'react-router-dom';


function Form() {
    const [data, setData]= useState([{name:'',user: '',email: '',pass: '',tel: ''}]);
    const infoContext = useContext(InfoContext); 
    
    
    // Traer user data del contexto
    
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

    //   function cerrar() {
    //     window.close();
    // }


      return(

        

            <div className="container">
                

                <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#modal1">
                Login
                </button>

                <div className="modal fade" id="modal1" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalLabel">Por favor ingresa tu email y contraseña</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail1">Email</label>
                                            <input type="email" name="email" onChange={handleChange} className="form-control" id="inputEmail1" aria-describedby="emailHelp"/>
                                            
                                            <small id="emailHelp" className="form-text text-muted">No compartiremos tu email.</small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword1">Password</label>
                                            <input type="password" name="pass" onChange={handleChange} className="form-control" id="inputPassword1"/>
                                        </div>
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="check1"/>
                                            <label className="form-check-label" htmlFor="check1">Recuerdame</label>
                                        </div>

                                        <button type="submit" className="btn btn-dark">Login</button>
                                        
                                    </form>
                            </div>
                        
                        </div>
                    </div>
                </div>

                <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#modal2">
                Crear cuenta
                </button>

                <div className="modal fade" id="modal2" tabIndex="-1" aria-labelledby="modalLabel2" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalLabel2">Por favor ingresa tus datos</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="inputAlias2">Usuario</label>
                                        <input type="text" name="user" onChange={handleChange} className="form-control" id="inputAlias2"/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputName2">Nombre y Apellido</label>
                                        <input type="text" name="name" onChange={handleChange} className="form-control" id="inputName2"/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputTel2">Telefono</label>
                                        <input type="text" name="tel" onChange={handleChange} className="form-control" id="inputTel2"/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail2">Email</label>
                                        <input type="email" name="email" onChange={handleChange} className="form-control" id="inputEmail2" aria-describedby="emailHelp"/>
                                        
                                        <small id="emailHelp" className="form-text text-muted">No compartiremos tu email.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPassword2">Password</label>
                                        <input type="password" name="pass" onChange={handleChange} className="form-control" id="inputPassword2"/>
                                        
                                    </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="check2"/>
                                    <label className="form-check-label" htmlFor="check2">Recuerdame</label>
                                </div>

                                <button type="submit" className="btn btn-dark" >Crear cuenta</button>
                                
                       

                                </form>
                            </div>
                           
                        
                        </div>
                    </div>
                </div> 


            </div> 


         );
    
}

export default Form;




