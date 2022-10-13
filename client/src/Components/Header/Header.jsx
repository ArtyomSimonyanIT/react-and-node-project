import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
import "./Header.css"
import "./HeaderScreen.css"


function Header({ cart }) {
    const [screenDisplay, setScreenDisplay] = useState("none")
    const [screenDisplay1, setScreenDisplay1] = useState("block")
    const [screenDisplay2, setScreenDisplay2] = useState("block")
    const seeAllComponents = () => {
        if (screenDisplay === "none" && window.screen.width <= 400) {
            setScreenDisplay("block")
        } else {
            setScreenDisplay("none")
        }
        if (screenDisplay2 === "none" && window.screen.width <= 400) {
            setScreenDisplay2("block")
        } else {
            setScreenDisplay2("none")
        }
        
    }
    useEffect(() => {
        if (window.screen.width <= 400) {
            setScreenDisplay1("none")
        }
    }, [])
    return (
        <header className="header" style={{ top: "0" }}>
            <div className={`screen-div-${screenDisplay}`}>
                <div><Link to={"/About"} className={`text display-${screenDisplay}`}>About</Link></div>
                <div><Link to={"/Computers"} className={`text display-${screenDisplay}`}>Computers</Link></div>
                <div><Link to={"/Notebooks"} className={`text display-${screenDisplay}`}>Notebooks</Link></div>
            </div>
            <div className="div-container">
                <div className={`header-div-container-${screenDisplay2}`}>
                    <div><Link to={"/"} className="text">Home</Link></div>
                    <div><Link to={"/About"} className={`text display-${screenDisplay1}`}>About</Link></div>
                    <div><Link to={"/Computers"} className={`text display-${screenDisplay1}`}>Computers</Link></div>
                    <div><Link to={"/Notebooks"} className={`text display-${screenDisplay1}`}>Notebooks</Link></div>
                </div>
                <div className={`header-div-container1-${screenDisplay2}`}>
                    <div className={screenDisplay2}>{cart.length !== 0 ? <div className="spanForNumbers">{cart.length}</div> : <></>}<Link to={"/Cart"} className="text"><i className="fa-solid fa-cart-shopping mard"></i></Link></div>
                    <div className={screenDisplay2}><Link to={"../SignUp"} className="text"><button className="register-button"><i className="fa-solid fa-user"></i>  Sign Up</button></Link></div>
                    <div><i className="fa-solid fa-bars bar" style={{ fontSize: "22px" }} onClick={seeAllComponents} /></div>
                </div>
            </div>

        </header>
    )
}

export default Header;