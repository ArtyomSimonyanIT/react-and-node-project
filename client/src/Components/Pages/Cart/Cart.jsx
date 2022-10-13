import "./Cart.css"
import { Link } from "react-router-dom";
function Cart({ computers, cart }) {
    return (
        <div className="containerrr">
            <div className="cart-div-for-h1">CART</div>
            <div className="cart-diiv"></div>
            <div className="cart-container">
                {cart.length == 0 ? <div className="div-for-h1">NO ADDED PRODUCTS</div> : 
                    cart.map((e) => {
                        return (
                            <div className="divv2" key={Math.random()*100000}>
                                <img src={e.img} alt="" className="card-image1" /><div className="cardunique-text">
                                    <p>{e.title}</p>
                                    <p>{e.price}</p>
                                </div><div className="buttons-div-container">
                                    <Link to={`/${e.categories}/${e.id}`}><button className="myButton"><i className="fa-solid fa-bars"></i></button></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart;