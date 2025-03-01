import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { products } from "./Products";


const ProductList = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="grid grid-cols-3 gap-6 p-4">
            {products.map((product) => (
                <h1 key={product.id} className="p-4">
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                    <p>
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <p className="text-lg">${product.price}</p>
                        <button className="bg-amber-300 rounded-md p-2 text-sm font-medium" onClick={() => addToCart(product)}>Add to Cart</button>

                    </p>
                </h1>
            ))}
        </div>
    );
};

export default ProductList;
