import { useState } from "react";
import "./About.css"

function About() {
    return (
        <div className="about-container">
            <div className="about-div-1">
                <h1 className="about-h1">ABOUT</h1>
                <div className="div-for-about-text">
                    <p className="about-text">This site was created by SFS students(by Garnik, Tigran, Vrej).
                        in this site you can buy computers and notebooks at low prices and sales.
                        this site created in 1 week.
                        this site created for react exam.
                        this site has a simple structure.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sunt sit est.
                        Facere provident corporis, dolorem repellat odit nisi officia porro
                        quam perspiciatis voluptas blanditiis consequatur laborum, earum vero nam.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid animi soluta,
                        molestias hic fugiat eum numquam eos dolores voluptas temporibus deserunt labore
                        reprehenderit aut error accusantium qui eaque doloribus expedita voluptates
                        porro officiis? Nobis suscipit, repudiandae repellat inventore,
                        ea nulla corporis quibusdam voluptatem ab earum eaque animi nam autem. Nostrum.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, quidem opti
                        o numquam reiciendis nobis consequatur nihil libero rerum laborum aut deleniti,
                        deserunt exercitationem tempora, ullam hic incidunt commodi qui! Ipsam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit quaerat
                        sed sint exercitationem cumque animi suscipit quia adipisci laudantium!
                    </p>
                </div>
            </div>
            <div className="about-div-2">
                <div className="delivery-container">

                    <div className="delivery-div1">
                        <div className="div-for-truck"><i className="fa-solid fa-truck"></i></div>
                        <div className="div-for-div1"><h1 className="about-h1" style={{ color: "#4f4f4f" }}>DELIVERY</h1>
                            <p style={{ width: "80%", margin: "0 auto", paddingBottom: "50px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nam enim fugit excepturi libero minima pariatur earum quae. Incidunt commodi
                                repellat numquam velit laboriosam esse quae id, provident, dolor ut vel?Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Eligendi facere
                                qui in aspernatur ea unde cum beatae similique atque!</p></div>

                    </div>
                    <div className="delivery-div2">
                        <div className="div-for-truck"><i className="fa-solid fa-address-book"></i></div>
                        <div className="div-for-div1"><h1 className="about-h1" style={{ color: "#4f4f4f" }}>CONTACT</h1>
                            <p style={{ width: "80%", margin: "0 auto", paddingBottom: "50px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nam enim fugit excepturi libero minima pariatur earum quae. Incidunt commodi
                                repellat numquam velit laboriosam esse quae id, provident, dolor ut vel?Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Eligendi facere
                                qui in aspernatur ea unde cum beatae similique atque!</p></div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default About;