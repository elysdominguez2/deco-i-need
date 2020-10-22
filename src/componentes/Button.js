import React from 'react';

function Button(props) {
    return <button onClick = {props.onClick}className = "btn btn-dark" > {props.sign} </button>}

export default Button;