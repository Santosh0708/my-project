import React from "react";
import { CartProvider } from './Components/CartContext'
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";


const App = () => {
  return (
    <CartProvider>
      <div className="container mx-auto p-4">
        <Navbar />
        <ProductList />

      </div>
    </CartProvider>

  );
};

export default App;
