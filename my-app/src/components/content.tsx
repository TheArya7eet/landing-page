import React from 'react';

const Content = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-5xl text-2xl font-extrabold title-font mb-5 text-gray-900">About Me</h1>
          <p className="lg:w-1/2 w-full mb-2 leading-relaxed text-gray-500">My name is Aryajeet Ghosh.
            I am an electronics and communication engineering student from Haldia Institute of Technology.
            I love to design and develop websites.</p>

          <div className="flex space-x-7 mt-5">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-black">2020</span>
              <span className="">Completed schooling from Holy Child School</span>

            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-black">2024</span>
              <span className="">Graduated from Haldia Institute of Technology</span>
            </div>
          </div>

          <div className="bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer mt-10 p-4 rounded-lg">
            <a href="" className="flex text-gray-100">
              Download CV<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
          </div>
        </div>


        <div className='flex justify-center '>
          <div className=" grid gap-8 sm:grid-cols-2">
            
            <div className=" max-w-sm">
              <div className="border border-gray-200 p-6 rounded-lg shadow-md">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Programmer</h2>
                <p className="leading-relaxed text-base">I hold a firm grip in languages such as Java, C++, JavaScript and SQL.</p>
              </div>
            </div>

            <div className="max-w-sm">
              <div className="border border-gray-200 p-6 rounded-lg shadow-md">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="brackets-curly"><path fill="#6563FF" d="M6 6a2 2 0 0 1 2-2 1 1 0 0 0 0-2 4 4 0 0 0-4 4v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 4 4 1 1 0 0 0 0-2 2 2 0 0 1-2-2v-3a4 4 0 0 0-1.38-3A4 4 0 0 0 6 9Zm16 5a2 2 0 0 1-2-2V6a4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 1.38 3A4 4 0 0 0 18 15v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4v-3a2 2 0 0 1 2-2 1 1 0 0 0 0-2Z"></path></svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Developer</h2>
                <p className="leading-relaxed text-base">Currently, I'm a front-end developer building websites using React, Next.js, etc.</p>
              </div>
            </div>

            <div className="max-w-sm">
              <div className="border border-gray-200 p-6 rounded-lg shadow-md">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="palette"><path fill="#6563FF" d="M7.42,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41A1,1,0,0,0,7.42,15.54Zm0-8.49a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41A1,1,0,0,0,7.42,7.05Zm4.95,10a1,1,0,1,0,1,1A1,1,0,0,0,12.37,17Zm-6-6a1,1,0,1,0,1,1A1,1,0,0,0,6.37,11Zm6-6a1,1,0,1,0,1,1A1,1,0,0,0,12.37,5Zm3.54,2.05a1,1,0,1,0,1.41,0A1,1,0,0,0,15.91,7.05Zm6.3,0a11,11,0,1,0-7.85,15.74,3.87,3.87,0,0,0,2.5-1.65A4.2,4.2,0,0,0,17.47,18a5.65,5.65,0,0,1-.1-1,5,5,0,0,1,3-4.56,3.84,3.84,0,0,0,2.06-2.25A4,4,0,0,0,22.21,7.08Zm-1.7,2.44a1.9,1.9,0,0,1-1,1.09A7,7,0,0,0,15.37,17a7.3,7.3,0,0,0,.14,1.4,2.16,2.16,0,0,1-.31,1.65,1.79,1.79,0,0,1-1.21.8,8.72,8.72,0,0,1-1.62.15,9,9,0,0,1-9-9.28A9.05,9.05,0,0,1,11.85,3h.51a9,9,0,0,1,8.06,5A2,2,0,0,1,20.51,9.52ZM12.37,11a1,1,0,1,0,1,1A1,1,0,0,0,12.37,11Z"></path></svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Designer</h2>
                <p className="leading-relaxed text-base">I have a firm grip in Tailwind CSS, Figma and Adobe Photoshop.</p>
              </div>
            </div>

            <div className="max-w-sm">
              <div className="border border-gray-200 p-6 rounded-lg shadow-md">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="blogger"><path fill="#6563FF" d="M9.71008,10.46008h2.23883a.77084.77084,0,1,0,0-1.54168H9.71008a.77084.77084,0,1,0,0,1.54168Zm9.71826-8.45837H4.555A2.57277,2.57277,0,0,0,1.9917,4.56506V19.43829A2.57278,2.57278,0,0,0,4.555,22.00171H19.42822a2.57268,2.57268,0,0,0,2.56348-2.56329V4.56506A2.57267,2.57267,0,0,0,19.42834,2.00171ZM18.35577,11.6795l-.01965,2.67542a4.0515,4.0515,0,0,1-4.03857,4.02179h-4.639a4.04922,4.04922,0,0,1-4.04181-4.0249V9.65747A4.05258,4.05258,0,0,1,9.65851,5.62671h2.82373a4.45954,4.45954,0,0,1,3.1203,2.19971,3.15646,3.15646,0,0,1,.36182,1.36767c.06738.50556.10284.88123.33007,1.08942.31934.28949,1.50727.09448,1.74219.27844l.17883.13983.10889.22168.036.17755Zm-4.097,1.8639H9.71008a.75035.75035,0,1,0,0,1.5h4.54871a.75024.75024,0,1,0,0-1.5Z"></path></svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Blogger</h2>
                <p className="leading-relaxed text-base">I write blogs on anything related to football, music and cinema.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section >
  )
}

export default Content