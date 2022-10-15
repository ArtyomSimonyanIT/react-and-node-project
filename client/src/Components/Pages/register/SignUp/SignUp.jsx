import axios from "axios";
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const mouseLeave = (event) => {
        event.currentTarget.style.border = 'none';
    }
    const mouseClick = (event) => {
        event.currentTarget.style.border = '1px solid rgb(0, 217, 255)';
    }
    async function register() {
        await axios.post(`http://localhost:8000/auth/registration`,{
            "email": email,
            "password": password,
            "confirmPassword": confirmPassword
        })
    }
    return (
        <div className="register-container">
            <div className="img-div">
            <i className="fa-solid fa-user-large"></i>
            </div>
            <div className="input-container">
                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                    console.log('You clicked submit.');
                }}>
                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" name="" id="email" className="input-for-register" value={email} onChange={e => setEmail(e.target.value)} onMouseLeave={mouseLeave} onClick={mouseClick}/>
                    <label htmlFor="password" className="label label-top" >Password</label>
                    <input type="password" name="" id="password" className="input-for-register" value={password} onChange={e => setPassword(e.target.value)} onMouseLeave={mouseLeave} onClick={mouseClick} />
                    <label htmlFor="confirm-password" className="label label-top">Confirm Password</label>
                    <input type="password" name="" id="confirm-password" className="input-for-register" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} onMouseLeave={mouseLeave} onClick={mouseClick}/>
                    <div className="button-contaier">
                        <button className="signUp-button" id="open" onClick={register}>Sign Up</button>
                        <div className="div-for-span">
                            <span className="sign-in-span">already registered?  <Link to={"../SignIn"} className="sign-in">Sign In</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;