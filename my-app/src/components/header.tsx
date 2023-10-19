"use client";
import React from 'react';
import { useScrollPosition } from "@/hooks/useScrollPosition";

const Header = () => {
    const scrollPosition = useScrollPosition();
    return (
        <header className={`sticky top-0 z-50 transition-shadow ${
            scrollPosition > 0
              ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
              : "shadow-none"
          }`}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="user-circle"><path fill="#6563FF" d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"></path></svg>
                    <span className="ml-3 text-xl">Aryajeet Ghosh</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 sm:p-2 hover:text-black hover:bg-gray-300 rounded-lg cursor-pointer">Home</a>
                    <a className="mr-5 sm:p-2 hover:text-black hover:bg-gray-300 rounded-lg cursor-pointer">Content</a>
                    <a className="mr-5 sm:p-2 hover:text-black  hover:bg-gray-300 rounded-lg cursor-pointer">Features</a>
                    <a className="mr-5 sm:p-2 hover:text-black hover:bg-gray-300 rounded-lg cursor-pointer">Contact Me</a>
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