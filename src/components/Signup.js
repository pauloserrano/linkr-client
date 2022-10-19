import styled from "styled-components";
import { useEffect, useState } from "react";

import { AuthPagesWrapper, Left } from "../styles/AuthPagesWrapper.js";
import Logo from "../common/Logo.js";
import { FormWrapper } from "../styles/FormWrapper.js";
import { Link } from "react-router-dom";

const SignUp = () => {
    // Logic
    const [form, setForm] = useState(
        {
            email: '',
            password: '',
            username: '',
            pictureUrl: ''
        }
    )
    const updateForm = field => setForm({ ...form, [field.name]: field.value});
    
    const signup = click => {
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
                    <input required type="text" name="username" placeholder="username" value={form.name} onChange={e => updateForm(e.target)} />
                    <input required type="text" name="pictureUrl" placeholder="picture url" value={form.name} onChange={e => updateForm(e.target)} />
                    <button onClick={signup} >Sign Up</button>
                </FormWrapper> 
                <Link to="/" >Switch back to log in</Link>               
            </div>

        </AuthPagesWrapper>
     
    )
}

export default SignUp;