import React from 'react';
import './FormButton.css';

const FormButton = ({text="text", style=null}) => {
    return (
        <button style={style} className="form-button">
            {text}
        </button>
    )
}

export default FormButton;