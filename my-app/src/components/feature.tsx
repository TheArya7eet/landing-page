import React from 'react';

const Feature = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">My Projects</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">The following are the projects that I have worked on.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="clipboard-notes"><path fill="#6563FF" d="M13,14H9a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2ZM17,4H15.82A3,3,0,0,0,13,2H11A3,3,0,0,0,8.18,4H7A3,3,0,0,0,4,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V7A3,3,0,0,0,17,4ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm8,14a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H8V7A1,1,0,0,0,9,8h6a1,1,0,0,0,1-1V6h1a1,1,0,0,1,1,1Zm-3-9H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path></svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Todo List</h2>
              <p className="leading-relaxed text-base">A basic todo website using HTML, Tailwind CSS and JavaScript. I have also added advanced features such as LocalStorage.</p>
              <a href='' className="mt-3 text-indigo-500 inline-flex items-center">Visit site
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="football"><path fill="#6563FF" d="M20.07,6.11a9.85,9.85,0,0,0-4.3-3.36A10,10,0,0,0,2,12c0,.19,0,.38,0,.56A9.94,9.94,0,0,0,3.33,17a10,10,0,0,0,5.89,4.65h0A10.11,10.11,0,0,0,12,22a9.45,9.45,0,0,0,1.88-.18,10,10,0,0,0,8-8.41A9.46,9.46,0,0,0,22,12,9.83,9.83,0,0,0,20.07,6.11Zm-2,.77L17,9.74l-1.62.44L13,8.49V6.64l2.49-1.81A7.81,7.81,0,0,1,18.11,6.88ZM14,11.67,13.22,14H10.77L10,11.67l2-1.43ZM12,4a8,8,0,0,1,1.11.09L12,4.89l-1.11-.8A8,8,0,0,1,12,4ZM4.88,8.37l.4,1.32-1.13.79A7.88,7.88,0,0,1,4.88,8.37Zm1.37,9.17,1.38.05L8,18.92A8.32,8.32,0,0,1,6.25,17.54ZM8,15.6l-3.15-.11A7.83,7.83,0,0,1,4.07,13l2.49-1.74L8,11.88l.89,2.76Zm.86-5.53-1.56-.7-.91-3A7.93,7.93,0,0,1,8.5,4.83L11,6.64V8.49ZM13,19.93a8.08,8.08,0,0,1-2.63-.12l-.83-2.92.83-.89h3.07l.67,1Zm2.41-.7L15.87,18l1.36.07A7.83,7.83,0,0,1,15.38,19.23Zm3.46-3.12L15.76,16l-.71-1.1.89-2.76,1.51-.41,2.36,2A7.84,7.84,0,0,1,18.84,16.11Zm.05-5.83L19.4,9a7.4,7.4,0,0,1,.53,2.13Z"></path></svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Football Blog Website</h2>
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
              <a href='' className="mt-3 text-indigo-500 inline-flex items-center">Visit site
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
              <a href='' className="mt-3 text-indigo-500 inline-flex items-center">Visit site
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Feature