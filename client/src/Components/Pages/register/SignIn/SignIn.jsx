import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignIn.css"

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const mouseLeave = (event) => {
        event.currentTarget.style.border = 'none';
    }
    const mouseClick = (event) => {
        event.currentTarget.style.border = '1px solid rgb(0, 217, 255)';
    }
    async function login() {
        await axios.post(`http://localhost:8000/auth/login`, {
            "email": email,
            "password": password
        })
    }
    return (
        <div className="register-container1">
            <div className="user-container">
                <i className="fa-solid fa-user-large"></i>
            </div>
            <div className="input-container">
                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" name="" id="email" className="input-for-register" value={email} onChange={e => setEmail(e.target.value)} onMouseLeave={mouseLeave} onClick={mouseClick} />
                    <label htmlFor="password" className="label label-top">Password</label>
                    <input type="password" name="" id="password" className="input-for-register" value={password} onChange={e => setPassword(e.target.value)} onMouseLeave={mouseLeave} onClick={mouseClick} />
                    <div className="button-contaier">
                        <button className="signIn-button" onClick={login}>Sign In</button>
                    </div>
                    <div className="forgot-password-container">
                        <span><Link className="forgot-password">Forgot Password</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}