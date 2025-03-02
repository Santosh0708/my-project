import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>

            <Navbar />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>

                {cart.length === 0 ? (
                    <p>Your cart is empty. <Link to="/" className="text-blue-600">Go shopping!</Link></p>
                ) : (
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p>{item.price} x {item.quantity}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                                    Remove
                                </button>
                            </div>
                        ))}
                        <h3 className="text-xl font-bold">Total: {totalPrice.toFixed(2)}</h3>
                        <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
