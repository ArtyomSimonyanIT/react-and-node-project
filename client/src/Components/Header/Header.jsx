import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
import "./Header.css"


function Header({ cart }) {
    
    return (
        <header className="header" style={{ top: "0" }}>
                <div className={`header-div-container`}>
                    <div><Link to={"/"} className="text">Home</Link></div>
                    <div><Link to={"/About"} className={`text`}>About</Link></div>
                    <div><Link to={"/Computers"} className={`text`}>Computers</Link></div>
                    <div><Link to={"/Notebooks"} className={`text`}>Notebooks</Link></div>
                </div>
                <div className={`header-div-container1`}>
                    <div>{cart.length !== 0 ? <div className="spanForNumbers">{cart.length}</div> : <></>}<Link to={"/Cart"} className="text"><i className="fa-solid fa-cart-shopping mard"></i></Link></div>
                    <div><Link to={"../SignUp"} className="text"><button className="register-button"><i className="fa-solid fa-user"></i>  Sign Up</button></Link></div>
            </div>

        </header>
    )
}

export default Header;