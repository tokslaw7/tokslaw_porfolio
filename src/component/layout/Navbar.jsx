import {Link} from "react-router";
import { useState } from "react";
import React from "react";
import "./Navbar.css";


const DropDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

export default function Navbar() {
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="/" className="logo">
                        Tokslaw
                    </a>
                    <div className="nav-links">
                        <a href="/" className="nav-item">Home</a>
                        <a href="#about" className="nav-item">About</a>
                        <a href="#blog" className="nav-item">Blog</a>
                        <a href="#project" className="nav-item">Projects</a>
                    </div>

                    <div className="nav-cta">
                        <a href="/contact" className="cta-btn">Contact Me!</a>
                    </div>

                    {/* Mobile Menu Button (Hamburger Icon) */}
                    {/*<div className="md:hidden">*/}
                    {/*    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">*/}
                    {/*        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMobileMenuOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>*/}
                    {/*        </svg>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>

                {/* Mobile Menu (conditionally rendered) */}
                {/*{isMobileMenuOpen && (*/}
                {/*    <div className="md:hidden mt-4">*/}
                {/*        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-700 rounded">Home</a>*/}
                {/*        <a href="/about" className="block py-2 px-4 text-sm hover:bg-gray-700 rounded">About</a>*/}
                {/*        <a href="/blog" className="block py-2 px-4 text-sm hover:bg-gray-700 rounded">Blog</a>*/}
                {/*        <a href="/project" className="block py-2 px-4 text-sm hover:bg-gray-700 rounded">Projects</a>*/}
                {/*        <a href="/contact" className="block mt-2 py-2 px-4 text-sm bg-blue-600 hover:bg-blue-700 rounded text-center font-bold">Contact Me!</a>*/}
                {/*    </div>*/}
                {/*)}*/}
            </nav>

        </>
    );
}

