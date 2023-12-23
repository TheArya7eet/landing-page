"use client";
import React from 'react';
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Link from 'next/link';

const Header = () => {
    const scrollPosition = useScrollPosition();
    return (
        <header className={`sticky top-0 z-50 transition-shadow ${
            scrollPosition > 0
              ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
              : "shadow-none"
          }`}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    
                    <Link href='/hero-section' className="mr-5 sm:p-2 hover:text-black hover:bg-gray-300 rounded-lg cursor-pointer">Home</Link>
                    <Link href='/content' className="mr-5 sm:p-2 hover:text-black hover:bg-gray-300 rounded-lg cursor-pointer">About</Link>
                    <Link href='/feature' className="mr-5 sm:p-2 hover:text-black hover:bg-gray-300 rounded-lg cursor-pointer">Projects</Link>
                    <Link href='/contact' className="mr-5 sm:p-2 hover:text-black hover:bg-gray-300 rounded-lg cursor-pointer">Contact</Link>
                   

                </nav>
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Get Started
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button> */}
            </div>
        </header>
    )
}

export default Header