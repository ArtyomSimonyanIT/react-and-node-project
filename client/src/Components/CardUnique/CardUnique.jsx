
import { Link } from "react-router-dom";
import "./CardUnique.css"
function CardUnique({ computers , cart, addToCart}) {
    return (
        <div className="cardUnique-container">
            <div key={computers[0].id} className="divv">
                <img src={computers[0].img} alt="" className="card-image" /><div className="cardunique-text">
                    <p>{computers[0].title}</p>
                    <p>{computers[0].price}</p> 
                </div><div className="buttons-div-container">
                    <Link to={`/${computers[6].categories}/${computers[0].id}`}><button className="myButton"><i className="fa-solid fa-bars"></i></button></Link>
                    <button className="myButton" onClick={() => addToCart(computers[0])}><i className="fa-solid fa-cart-shopping"></i> to cart</button>
                </div>
            </div>
            <div key={computers[1].id} className="divv">
                <img src={computers[1].img} alt="" className="card-image" /><div className="cardunique-text">
                    <p>{computers[1].title}</p>
                    <p>{computers[1].price}</p>
                </div><div className="buttons-div-container">
                    <Link to={`/${computers[1].categories}/${computers[1].id}`}><button className="myButton"><i className="fa-solid fa-bars"></i></button></Link>
                    <button className="myButton" onClick={() => addToCart(computers[1])}><i className="fa-solid fa-cart-shopping"></i> to cart</button>
                </div>
            </div>
            <div key={computers[9].id} className="divv">
                <img src={computers[9].img} alt="" className="card-image" /><div className="cardunique-text">
                    <p>{computers[9].title}</p>
                    <p>{computers[9].price}</p>
                </div><div className="buttons-div-container">
                    <Link to={`/${computers[9].categories}/${computers[9].id}`}><button className="myButton"><i className="fa-solid fa-bars"></i></button></Link>
                    <button className="myButton"  onClick={() => addToCart(computers[9])}><i className="fa-solid fa-cart-shopping"></i> to cart</button>
                </div>
            </div>
            <div key={computers[10].id} className="divv">
                <img src={computers[10].img} alt="" className="card-image" /><div className="cardunique-text">
                    <p>{computers[10].title}</p>
                    <p>{computers[10].price}</p>
                </div><div className="buttons-div-container">
                    <Link to={`/${computers[10].categories}/${computers[10].id}`}><button className="myButton"><i className="fa-solid fa-bars"></i></button></Link>
                    <button className="myButton" onClick={() => addToCart(computers[10])}><i className="fa-solid fa-cart-shopping"></i> to cart</button>
                </div>
            </div>
        </div>
    )
}

export default CardUnique;