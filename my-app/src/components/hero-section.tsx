import React from 'react'

const HeroSection = () => {
    return (
        <section className="text-gray-400  body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:flex-row">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center text-center rounded-xl shadow-xl" alt="Error: Cannot load image" src="" />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title sm:text-6xl text-4xl mb-4 font-extrabold text-black">Hey lads, this is Aryajeet.</h1>
                    <p className="leading-relaxed mb-3 text-2xl sm:text-3xl text-gray-500 font-bold">Frontend Developer  and Programmer</p>
                    <p className="leading-relaxed text-xl text-gray-500">I am passionate about web design and development. I produce some quality work.</p>
                    {/* <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default HeroSection