import styled from "styled-components";
import { useEffect, useState } from "react";

import { AuthPagesWrapper, Left } from "../styles/AuthPagesWrapper.js";
import Logo from "../common/Logo.js";
import { FormWrapper } from "../styles/FormWrapper.js";
import { Link, useNavigate } from "react-router-dom";
import * as api from "../services/axios.js";
import useGlobalContext from "../hooks/useGlobalContext.js";


const Login = () => {
    // Logic
    const navigate = useNavigate();

    const { setUser } = useGlobalContext()

    const [form, setForm] = useState(
        {
            email: '',
            password: '',
        }
    )

    const [buttonBlocked, setButtonBlocked] = useState(false);

    const updateForm = field => setForm({ ...form, [field.name]: field.value});
    
    const tryLogin = async click => {
        click.preventDefault();
        if(!buttonBlocked) {
            setButtonBlocked(true);
            const result = await login();
        }
    }

    const login = async () => {
        try {
            const signin = await api.login(form);
            localStorage.setItem("accessToken", signin.data.token);
            localStorage.setItem("refreshToken", signin.data.refreshToken);
            setUser(signin.data.user)
            navigate("/timeline");
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
                    <button onClick={tryLogin} >{(buttonBlocked) ? <>Loading...</> : <>Log In</>}</button>
                </FormWrapper> 
                <Link to="/sign-up" >First time? Create an account!</Link>               
            </div>

        </AuthPagesWrapper>
     
    )
}

export default Login;