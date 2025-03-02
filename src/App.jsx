import React from "react";
import { CartProvider } from './Components/CartContext'
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="container mx-auto p-4">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Footer />} />

          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>

  );
};

export default App;
