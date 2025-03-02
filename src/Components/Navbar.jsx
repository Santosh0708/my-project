import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ProductList from "./ProductList";

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div>
            <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    <Link to="/">SC Mart</Link>
                </h1>
                <ul className="flex gap-6">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="relative">
                    <Link to="/cart" aria-label="Shopping Cart">
                        <ShoppingCart className="w-6 h-6" />
                    </Link>
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                            {totalItems}
                        </span>
                    )}
                </div>

            </nav>

        </div>
    );
};

export default Navbar;
