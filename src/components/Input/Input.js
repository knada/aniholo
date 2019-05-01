import React from 'react';
import './Input.css';

const Input = ({ type="text", placeholder=null, style=null }) => {
    return (
        <input 
            class="primary-input" 
            placeholder={placeholder} 
            type={type} 
            style={style} 
        />
    )
}
 
export default Input;
