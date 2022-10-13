import { Outlet } from "react-router-dom"
import Footer from './../../Footer/Footer';
import Header from './../../Header/Header';
function Layouts({cart}) {
    return (
        <div>
            <Header cart={cart}/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}


export default Layouts;