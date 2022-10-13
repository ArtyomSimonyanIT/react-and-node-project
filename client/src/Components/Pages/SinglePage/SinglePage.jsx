import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SinglePage.css'
{/* <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap" rel="stylesheet"></link> */ }

export default function SinglePage({ computers, cart, addToCart }) {
    const { id } = useParams()
    const { categories } = useParams()
    const [computerss, setComputerss] = useState(
        computers.filter((comp) => comp.id == id && comp.categories == categories)
    );
    const [fCart, setFCart] = useState(
    cart.find((item) => item.id == id && item.categories === categories)
    )
    return (
        <div>
            <div style={{ marginBottom: "100px" }}></div>
            <div className='continer'>
                <div className='div'>
                    <img src={computerss[0].img} className='image'></img>
                    <div className='div1'>
                        <h1 className='h'>{computerss[0].title}</h1>
                        <div className='div2'>
                            <p className='pp'>{computerss[0].price}</p>
                            <div className='div5'>
                                <div className='div3'></div>
                            </div>
                            <div className='div4'>
                                <p style={{ textAlign: "left"}}>case : {computerss[0].case}<br />
                                    videocard : {computerss[0].videocard} <br />
                                    CPU : {computerss[0].processor} <br />
                                    RAM : {computerss[0].ram} <br />
                                    Video card : Iris XE Graphics <br />
                                    motherboard: {computerss[0].motherboard} <br />
                                    SSD : {computerss[0].ssd} <br />
                                    cooler : {computerss[0].cooler} <br />
                                    psu : {computerss[0].psu} </p>
                            </div>
                            <div className='div6'></div>
                            <div className='div8'>
                                <button className='button1'>Buy </button>
                                {!fCart ? <button className='button' onClick={() => addToCart(computerss[0])}>To cart</button> : console.log()}                                 
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}