import React from 'react';
import Image from 'next/image';
import profile from 'profile.jpg';

const HeroSection = () => {
    return (
        <section className="text-gray-400  body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:flex-row">
                <div className="group relative rounded-3xl shadow-xl  space-y-6 overflow-hidden">
                    <div className="group relative rounded-3xl shadow-xl  space-y-6 overflow-hidden">
                        <Image
                            src="/profile.jpg"
                            alt='pfp'
                            loading="lazy"
                            width="640"
                            height="805"
                            className="mx-auto h-[26rem] w-full object-cover object-top transition duration-500 group-hover:scale-110 group-hover:grayscale text-center"
                        />
                        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-indigo-500 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                            <div>
                                <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Aryajeet Ghosh</h4>
                                <span className="block text-sm text-gray-300">Frontend Developer  and Programmer</span>
                            </div>
                            <p className="mt-8 text-gray-300 dark:text-gray-600">I am passionate about web design and development. I produce some quality work.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5 lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-6xl text-4xl mb-4 font-extrabold text-black">Hey lads, this is Aryajeet.</h1>
                    <p className="leading-relaxed mb-3 text-2xl sm:text-3xl text-gray-500 font-bold"></p>
                    <p className="leading-relaxed text-xl text-gray-500"></p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection