import styled from "styled-components";
import { useEffect, useState } from "react";

import { AuthPagesWrapper, Left } from "../styles/AuthPagesWrapper.js";
import Logo from "../common/Logo.js";
import { FormWrapper } from "../styles/FormWrapper.js";
import { Link } from "react-router-dom";

const Login = () => {
    // Logic
    const [form, setForm] = useState(
        {
            email: '',
            password: '',
        }
    )
    const updateForm = field => setForm({ ...form, [field.name]: field.value});
    
    const login = click => {
        click.preventDefault();
        console.log(form)
    }

    // UI
    return (
        <AuthPagesWrapper>
            <Left>
                <Logo />                
            </Left>
            <div>
                <FormWrapper>
                    <input required type="email" name="email" placeholder="e-mail" value={form.name} onChange={e => updateForm(e.target)} />
                    <input required type="password" name="password" placeholder="password" value={form.name} onChange={e => updateForm(e.target)} />
                    <button onClick={login} >Log In</button>
                </FormWrapper> 
                <Link to="/sign-up" >First time? Create an account!</Link>               
            </div>

        </AuthPagesWrapper>
     
    )
}

export default Login;