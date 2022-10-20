import styled from "styled-components";
import { useEffect, useState } from "react";

import { AuthPagesWrapper, Left } from "../styles/AuthPagesWrapper.js";
import Logo from "../common/Logo.js";
import { FormWrapper } from "../styles/FormWrapper.js";
import { Link, useNavigate } from "react-router-dom";
import * as api from "../services/axios.js";

const SignUp = () => {
    // Logic
    const navigate = useNavigate(); 

    const [buttonBlocked, setButtonBlocked] = useState(false);

    const [form, setForm] = useState(
        {
            email: '',
            password: '',
            name: '',
            pictureUrl: ''
        }
    )
    const updateForm = field => setForm({ ...form, [field.name]: field.value});
    
    const trySignup = async click => {
        click.preventDefault();
        if(!buttonBlocked) {
            setButtonBlocked(true);
            const result = await signup();
        }
    }

    const signup = async () => {
        try {
            const register = await api.signUp(form);
            navigate("/");
        } catch (error) {
            setButtonBlocked(false);
            console.log(error);
            alert(error.response.data)
        }
    }

    // UI
    return (
        <AuthPagesWrapper>
            <Left>
                <Logo />                
            </Left>
            <div>
                <FormWrapper>
                    <input required type="email" name="email" placeholder="e-mail" value={form.email} onChange={e => updateForm(e.target)} />
                    <input required type="password" name="password" placeholder="password" value={form.password} onChange={e => updateForm(e.target)} />
                    <input required type="text" name="name" placeholder="username" value={form.name} onChange={e => updateForm(e.target)} />
                    <input required type="text" name="pictureUrl" placeholder="picture url" value={form.pictureUrl} onChange={e => updateForm(e.target)} />
                    <button onClick={trySignup} >{(buttonBlocked) ? <>Loading...</> : <>Sign Up</>}</button>
                </FormWrapper> 
                <Link to="/" >Switch back to log in</Link>               
            </div>

        </AuthPagesWrapper>
     
    )
}

export default SignUp;