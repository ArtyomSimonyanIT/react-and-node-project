import { Link } from "react-router-dom"
import "./Notebooks.css"
import { useState, useEffect } from "react"
function NotebooksPage({ computers, cart, addToCart }) {
    const [computerss, setComputerss] = useState([])
    useEffect(() => {
        const computersss = computers.filter((e) => e.categories == "Notebooks")
        setComputerss([...computersss])
    }, [])
    return (
        <div>
            <div className="dd">
                <h1 className="h1" style={{ display: "block" }}>Notebooks</h1>
            </div>
            <div className="cardUnique-container1">
                {computerss.map(computer => {
                    return (
                        <div key={computer.id} className="divv1">
                            <img src={computer.img} alt="" className="card-image" /><div className="cardunique-text">
                                <p>{computer.title}</p>
                                <p>{computer.price}</p>
                            </div><div className="buttons-div-container">
                                <Link to={`/${computer.categories}/${computer.id}`}><button className="myButton"><i className="fa-solid fa-bars"></i></button></Link>
                                <button className="myButton" onClick={() => addToCart(computer)}><i className="fa-solid fa-cart-shopping"></i> to cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NotebooksPage;