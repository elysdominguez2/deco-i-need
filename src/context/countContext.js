import React, {useState} from 'react';

export const CountContext = React.createContext([]);

export const CountProvider = (props) =>{
    const [count, setCount] = useState([]);

    return(
        <CountContext.Provider value={[count, setCount]}>
            {props.children}
        </CountContext.Provider>
    )
}