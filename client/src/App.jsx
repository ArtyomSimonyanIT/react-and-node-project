import { BrowserRouter, Routes, Route } from "react-router-dom"
import Body from "./Components/Body/Body";
import Layouts from "./Components/Pages/Layouts/Layouts";
import NotebooksPage from "./Components/Pages/Notebooks/NotebooksPage";
import ComputersPage from "./Components/Pages/Computers/ComputersPage";
import SinglePage from "./Components/Pages/SinglePage/SinglePage"
import { useState } from "react";
import SignIn from "./Components/Pages/register/SignIn/SignIn";
import SignUp from "./Components/Pages/register/SignUp/SignUp";
import About from "./Components/Pages/register/About/About";
import Cart from "./Components/Pages/Cart/Cart";
import { useCallback } from "react";
import "./App.css"

export default function App() {
  const [cart, setCart] = useState([]);
  const [computers, setComputers] = useState([
    {
      id: 1,
      title: "HYPERPC LUMEN",
      ram: "16GB Kingston Renegade RGB DDR4-3600 (2 x 8GB)",
      videocard: "NVIDIA GeForce RTX 3060 Ti",
      processor: "Intel® Core™ i5-12400(F)",
      motherboard: "MSI PRO B660M-A [DDR4, Wi-Fi]",
      ssd: "1TB WD Black SN750",
      psu: "750W HYPERPC [80+ Gold]",
      case: "HYPERPC LUMEN anthracite black with window",
      cooler: "Arctic P14 PWM PST ARGB Black",
      categories: "Computers",
      img: "../images/computer5.jpg",
      price: "1,100,000 AMD"
    },
    {
      id: 2,
      title: "HYPERPC LUMEN",
      ram: "16GB Kingston Renegade RGB DDR4-3600 (2 x 8GB)",
      videocard: "NVIDIA GeForce RTX 3060 Ti",
      processor: "Intel® Core™ i5-12400(F)",
      motherboard: "MSI PRO B660M-A [DDR4, Wi-Fi]",
      ssd: "1TB WD Black SN750",
      psu: "750W HYPERPC [80+ Gold]",
      case: "HYPERPC LUMEN anthracite black with window",
      cooler: "Arctic P14 PWM PST ARGB Black",
      categories: "Computers",
      img: "../images/computer5.jpg",
      price: "1,100,000 AMD"
    },
    {
      id: 3,
      title: "HYPERPC LUMEN",
      ram: "16GB Kingston Renegade RGB DDR4-3600 (2 x 8GB)",
      videocard: "NVIDIA GeForce RTX 3060 Ti",
      processor: "Intel® Core™ i5-12400(F)",
      motherboard: "MSI PRO B660M-A [DDR4, Wi-Fi]",
      ssd: "1TB WD Black SN750",
      psu: "750W HYPERPC [80+ Gold]",
      case: "HYPERPC LUMEN anthracite black with window",
      cooler: "Arctic P14 PWM PST ARGB Black",
      categories: "Computers",
      img: "../images/computer5.jpg",
      price: "1,100,000 AMD"
    },
    {
      id: 4,
      title: "HYPERPC LUMEN",
      ram: "16GB Kingston Renegade RGB DDR4-3600 (2 x 8GB)",
      videocard: "NVIDIA GeForce RTX 3060 Ti",
      processor: "Intel® Core™ i5-12400(F)",
      motherboard: "MSI PRO B660M-A [DDR4, Wi-Fi]",
      ssd: "1TB WD Black SN750",
      psu: "750W HYPERPC [80+ Gold]",
      case: "HYPERPC LUMEN anthracite black with window",
      cooler: "Arctic P14 PWM PST ARGB Black",
      categories: "Computers",
      img: "../images/computer5.jpg",
      price: "1,100,000 AMD"
    },
    {
      id: 5,
      title: "HYPERPC LUMEN",
      ram: "16GB Kingston Renegade RGB DDR4-3600 (2 x 8GB)",
      videocard: "NVIDIA GeForce RTX 3060 Ti",
      processor: "Intel® Core™ i5-12400(F)",
      motherboard: "MSI PRO B660M-A [DDR4, Wi-Fi]",
      ssd: "1TB WD Black SN750",
      psu: "750W HYPERPC [80+ Gold]",
      case: "HYPERPC LUMEN anthracite black with window",
      cooler: "Arctic P14 PWM PST ARGB Black",
      categories: "Computers",
      img: "../images/computer5.jpg",
      price: "1,100,000 AMD"
    },
    {
      id: 6,
      title: "HYPERPC LUMEN",
      ram: "16GB Kingston Renegade RGB DDR4-3600 (2 x 8GB)",
      videocard: "NVIDIA GeForce RTX 3060 Ti",
      processor: "Intel® Core™ i5-12400(F)",
      motherboard: "MSI PRO B660M-A [DDR4, Wi-Fi]",
      ssd: "1TB WD Black SN750",
      psu: "750W HYPERPC [80+ Gold]",
      case: "HYPERPC LUMEN anthracite black with window",
      cooler: "Arctic P14 PWM PST ARGB Black",
      categories: "Computers",
      img: "../images/computer5.jpg",
      price: "1,100,000 AMD"
    },
    {
      id: 7,
      title: "HYPERPC LUMEN",
      ram: "16GB Kingston Renegade RGB DDR4-3600 (2 x 8GB)",
      videocard: "NVIDIA GeForce RTX 3060 Ti",
      processor: "Intel® Core™ i5-12400(F)",
      motherboard: "MSI PRO B660M-A [DDR4, Wi-Fi]",
      ssd: "1TB WD Black SN750",
      psu: "750W HYPERPC [80+ Gold]",
      case: "HYPERPC LUMEN anthracite black with window",
      cooler: "Arctic P14 PWM PST ARGB Black",
      categories: "Computers",
      img: "../images/computer5.jpg",
      price: "1,100,000 AMD"
    },
    {
      id: 1,
      categories: "Notebooks",
      price: "335000 AMD",
      title: "Gaming super powerful notebook",
      ram: "16GB 2444mgh",
      videocard: "GEFORCE RTX 3060",
      processor: "Intel core i5 10400F",
      motherboard: "H510",
      ssd: "240Gb",
      psu: "650W",
      case: "ATX Aerocool SL-5200 Frost",
      cooler: "Intel",
      img: "../images/computer1.jpg",
      price: "1,640,000 AMD"
    },
    {
      id: 2,
      title: "Gaming super powerful notebook",
      ram: "16GB 2444mgh",
      videocard: "GEFORCE RTX 3060",
      processor: "Intel core i5 10400F",
      motherboard: "H510",
      ssd: "240Gb",
      psu: "650W",
      case: "ATX Aerocool SL-5200 Frost",
      cooler: "Intel",
      categories: "Notebooks",
      img: "../images/computer1.jpg",
      price: "1,640,000 AMD"
    },
    {
      id: 3,
      title: "Gaming super powerful notebook",
      ram: "16GB 2444mgh",
      videocard: "GEFORCE RTX 3060",
      processor: "Intel core i5 10400F",
      motherboard: "H510",
      ssd: "240Gb",
      psu: "650W",
      case: "ATX Aerocool SL-5200 Frost",
      cooler: "Intel",
      categories: "Notebooks",
      img: "../images/computer1.jpg",
      price: "1,640,000 AMD"
    },
    {
      id: 4,
      title: "Gaming super powerful notebook",
      ram: "16GB 2444mgh",
      videocard: "GEFORCE RTX 3060",
      processor: "Intel core i5 10400F",
      motherboard: "H510",
      ssd: "240Gb",
      psu: "650W",
      case: "ATX Aerocool SL-5200 Frost",
      cooler: "Intel",
      categories: "Notebooks",
      img: "../images/computer1.jpg",
      price: "1,640,000 AMD"
    },
    {
      id: 5,
      title: "Gaming super powerful notebook",
      ram: "16GB 2444mgh",
      videocard: "GEFORCE RTX 3060",
      processor: "Intel core i5 10400F",
      motherboard: "H510",
      ssd: "240Gb",
      psu: "650W",
      case: "ATX Aerocool SL-5200 Frost",
      cooler: "Intel",
      categories: "Notebooks",
      img: "../images/computer1.jpg",
      price: "1,640,000 AMD"
    },
    {
      id: 6,
      title: "Gaming super powerful notebook",
      ram: "16GB 2444mgh",
      videocard: "GEFORCE RTX 3060",
      processor: "Intel core i5 10400F",
      motherboard: "H510",
      ssd: "240Gb",
      psu: "650W",
      case: "ATX Aerocool SL-5200 Frost",
      cooler: "Intel",
      categories: "Notebooks",
      img: "../images/computer1.jpg",
      price: "1,640,000 AMD"
    },
    {
      id: 7,
      title: "Gaming super powerful notebook",
      ram: "16GB 2444mgh",
      videocard: "GEFORCE RTX 3060",
      processor: "Intel core i5 10400F",
      motherboard: "H510",
      ssd: "240Gb",
      psu: "650W",
      case: "ATX Aerocool SL-5200 Frost",
      cooler: "Intel",
      categories: "Notebooks",
      img: "../images/computer1.jpg",
      price: "1,640,000 AMD"
    }
  ])

  const addToCart = useCallback((product) => {
    const PRODUCT_EXIST = cart.find((item) => item.id === product.id && item.categories === product.categories);
    if (PRODUCT_EXIST) {

    } else {
      setCart([...cart, { ...product }])
    }
  }, [cart, setCart])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts cart={cart}/>}>
            <Route path="/" element={<Body computers={computers} cart={cart} addToCart={addToCart} />} />
            <Route path="/computers" element={<ComputersPage computers={computers} cart={cart} addToCart={addToCart} />} />
            <Route path="/notebooks" element={<NotebooksPage computers={computers} cart={cart} addToCart={addToCart} />} />
            <Route path="/:categories/:id" element={<SinglePage computers={computers} cart={cart} addToCart={addToCart} />} />
            <Route path="/Cart" element={<Cart cart={cart} />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}