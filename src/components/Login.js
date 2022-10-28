import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthPagesWrapper, Left } from "../styles/AuthPagesWrapper.js";
import Logo from "../common/Logo.js";
import { FormWrapper } from "../styles/FormWrapper.js";
import { login as apiLogin, getUser, getAllFollowed } from "../services/axios.js";
import useGlobalContext from "../hooks/useGlobalContext.js";
import useForm from "../hooks/useForm.js";


const Login = () => {
    // Logic
    const navigate = useNavigate();
    const [buttonBlocked, setButtonBlocked] = useState(false);
    const [form, handleForm] = useForm({ email: '', password: '' })
    const { setUser, setFollows } = useGlobalContext()
    
    
    const login = async (e) => {
        e.preventDefault()
        setButtonBlocked(true);

        try {
            const signin = await apiLogin(form);
            localStorage.setItem("accessToken", signin.data.token);
            localStorage.setItem("refreshToken", signin.data.refreshToken);

            const { data: { name, pictureUrl, id: userId }} = await getUser()
            const { data: followed } = await getAllFollowed()

            setFollows(followed)
            setUser({ name, pictureUrl, userId })
            
            navigate("/timeline");
        
        } catch (error) {
            console.log(error);
            alert(error.response.data)
        }
        
        setButtonBlocked(false);
    }

    // UI
    return (
        <AuthPagesWrapper>
            <Left>
                <Logo />                
            </Left>
            <div>
                <FormWrapper>
                    <input 
                        required 
                        type="email" 
                        name="email" 
                        placeholder="e-mail" 
                        value={form.email} 
                        onChange={handleForm} />
                    <input 
                        required 
                        type="password" 
                        name="password" 
                        placeholder="password" 
                        value={form.password} 
                        onChange={handleForm} 
                    />
                    <button onClick={login}>
                        {(buttonBlocked) ? "Loading..." : "Log In"}
                    </button>
                </FormWrapper> 
                <Link to="/sign-up">First time? Create an account!</Link>               
            </div>

        </AuthPagesWrapper>
     
    )
}

export default Login;