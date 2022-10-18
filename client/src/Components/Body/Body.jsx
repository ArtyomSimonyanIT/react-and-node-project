import "./Body.css"
import CardUnique from './../CardUnique/CardUnique';
import Slider from './../SlideShow/Slider';

function Body({ computers, cart, addToCart}) {

    return (
        <div>
            <div className="text-container">
                <h1 className="h1-for-body">ONLINE SHOP</h1>
                <p className="ppp">In this shop you can buy computers and notebooks at low prices and sales</p>
            </div>
            <Slider />
            <div className="card-container">
                <CardUnique computers={computers}  cart={cart} addToCart={addToCart}/>
            </div>
        </div>
    )
}

export default Body;