import React from 'react';
import Brand from '../Brand/Brand';
import Input from '../Input/Input';
import FormButton from '../FormButton/FormButton';
import SocialButton from '../SocialButton/SocialButton';

import './SignUp.css';

const SignUp = () => {
    return (
        <div className="signup">
            <Brand style={{textAlign: "center"}}/>
            <Input 
                type="email"
                placeholder="E-mail"
                style={{width: "530px"}} 
            />
            <Input 
                type="text"
                placeholder="Username (used for identification, not changeable)"
                style={{width: "530px"}} 
            />
            <Input 
                type="text"
                placeholder="Nickname (used for display)"
                style={{width: "530px"}} 
            />
            <Input 
                type="password"
                placeholder="Password"
                style={{width: "530px"}} 
            />
            <Input
                type="password"
                placeholder="Confirm password"
                style={{width: "530px"}} 
            />
            <p style={{fontSize: "14px", color:"#6a6a6a"}}>
                Passwords should be <span style={{fontWeight: "bold"}}>at least 6 characters long</span> and include <span style={{fontWeight: "bold"}}>atleast 1 number.</span>
            </p>
            <FormButton 
                text="Sign Up"
                style={{margin: "16px auto"}}
            />
            <p style={{fontSize:"15px", color:"#808080"}}>
            or
            </p>
            <p style={{fontSize:"20px", fontWeight:"bold", color:"#6a6a6a"}}>
            Sign up Using
            </p>
            <div className="social-buttons">
                <SocialButton social="twitter"/>
                <SocialButton social="google"/>
                <SocialButton social="reddit"/>
            </div> 
            <p style={{fontSize: "14px", color:"#5aacff", cursor: "pointer"}}>Already have an account?</p>
        </div>
    )
}

export default SignUp;
