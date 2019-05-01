import React from 'react';
import Brand from '../Brand/Brand';
import Input from '../Input/Input';
import FormButton from '../FormButton/FormButton';
import SocialButton from '../SocialButton/SocialButton';

import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <Brand style={{textAlign: "center"}}/>
            <Input 
                style={{width: "530px"}}
                placeholder="E-mail or Username" />
            <Input 
                type="password"
                style={{width: "530px"}}
                placeholder="Password" />
            <FormButton 
                text="Log In" 
                style={{margin: "16px auto"}} 
            />
            <p 
                style={{fontSize:"15px", color:"#808080"}}>
                or
            </p>
            <p 
                style={{fontSize:"20px", fontWeight:"bold", color:"#6a6a6a"}}>
                Log in using
            </p>
            <div className="social-buttons">
                <SocialButton social="twitter"/>
                <SocialButton social="google"/>
                <SocialButton social="reddit"/>
            </div>  
            <p style={{fontSize: "14px", color:"#5aacff", cursor: "pointer"}} >
                Don't have an accout yet?
            </p>
        </div>
    )
}

export default Login;