import React from 'react'
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import Navbar from './Navbar';
import ProductList from './ProductList';

const Footer = () => {
    return (
        <div>
            <Navbar />
            <ProductList />
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Company Info */}
                        <div>
                            <h2 className="text-xl font-bold">SC Mart</h2>
                            <p className="text-gray-400 mt-2">
                                Your one-stop shop for amazing products at great prices.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h2 className="text-lg font-semibold">Quick Links</h2>
                            <ul className="mt-2 space-y-2">
                                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                                <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h2 className="text-lg font-semibold">Follow Us</h2>
                            <div className="flex gap-4 mt-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Facebook size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Twitter size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Instagram size={24} />
                                </a>
                                <a href="mailto:support@example.com" className="text-gray-400 hover:text-white">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
                        &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer