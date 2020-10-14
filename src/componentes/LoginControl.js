import React, {useState, useContext} from 'react';
import { InfoContext } from '../context/infoContext';
import './ItemList.css';
import LogOutButton from './LogOutButton';
import LogInButton from './LogInButton';
import Login from './Login';
import './LoginControl.css';

function LoginControl() {
    
    const infoContext = useContext(InfoContext);
    
    // const [isLogin, setIsLogin] = useState(false);

    const handleLoginClick = () => {
        // setIsLogin({isLoggedIn: true});
      };
    const handleLogoutClick =() => {
        // setIsLogin({isLoggedIn: false});
        infoContext.setIsLogin(false);
      }
    
 
    // const isLoggedIn = () => {
    //     let button;
    let button;
      if (infoContext.isLogin) {
        button = <LogOutButton logOut={handleLogoutClick} />;
      }else{
        button = <LogInButton onClick={handleLoginClick} />;
    }
    return (
      <div className="saludo">
        {button} 
        <Login  />
        
      </div>
    );
      
      
//   }

  
  };



export default LoginControl;

//-------------


// class LoginControl extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleLoginClick = this.handleLoginClick.bind(this);
//       this.handleLogoutClick = this.handleLogoutClick.bind(this);
//       this.state = {isLoggedIn: false};
//     }
//     handleLoginClick() {
//       this.setState({isLoggedIn: true});
//     }
//     handleLogoutClick() {
//       this.setState({isLoggedIn: false});
//     }
//     render() {
//       const isLoggedIn = this.state.isLoggedIn;
//       let button;
//       if (isLoggedIn) {
//         button = <LogOutButton onClick={this.handleLogoutClick} />;
//       } else {
//         button = <LogInButton />;
//       }
//       return (
//         <div className="saludo">
//           {button} 
//           <Login isLoggedIn={isLoggedIn} />
          
//         </div>
//       );
//     }
//   }
  
//   export default LoginControl;