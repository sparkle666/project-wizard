import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
          <h2 className="text-base font-semibold leading-7 text-blue-100 bg-blue-600 px-3 rounded-lg uppercase mb-4 lg:mb-8">
            You Came to the right place
          </h2>
          <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
            Why 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
               Choose Us?
            </span>
          </h1>
          <p className="mt-6 text-md text-gray-600 max-w-lg text-center">
          At ProjectWizard, we're not just about delivering projects - 
          we're about elevating your academic journey
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                  </svg>
                </div>
                🧠 Expert Developers at Your Service
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Our skilled web developers specialize in crafting custom s
              oftware tailored to your project requirements.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                  </svg>
                </div>
                📚 Comprehensive Project Support
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              From Chapter 1 to 5, we've got you covered. Our meticulous approach ensures well-formatted 
              content with page numbers, table of contents, and more.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                  </svg>
                </div>
                💡 Unique and Original Work
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Your project is crafted uniquely for you, guaranteeing originality and authenticity.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                  </svg>
                </div>
                🏆 Proven Success
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Join the ranks of 10+ satisfied students who not only passed 
              with flying colors but excelled in their project defense              
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs;

export const WhatsIncluded = () => {
  return(
     <div className="bg-gray-200 px-2 py-10">
      <div id="features" className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        🌟 What's Included?
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">Custom Software Development</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Tailored to your project specifications.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">Project Defense Preparation</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            We equip you for success with comprehensive support.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">Thorough Documentation</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Chapters 1 to 5 with precise formatting
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">Page Numbers & Table of Contents</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            A polished presentation for a professional touch.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">Revision Round</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Unlimied round of major revisions to ensure your project is perfect
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">Fully Hosted Solutions</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            All applications are hosted live and always working 24/7
            </p>
          </li>
          {/* Repeat similar structures for other features */}
        </ul>
      </div>

      {/* Additional content goes here */}
    </div>
  )
}

export const HowItWorks = () => {
  return (
   
    <div className="max-w-screen-lg mx-auto px-4 py-10 sm:px-6 lg:px-8 flex flex-col justify-between">

      <div className="text-center">

        <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
          How it <span className="text-indigo-600">Works?</span>
        </h3>
      </div>
      <div className="mt-20">
        <ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">
          <li className="bg-gray-100 p-5 pb-10 text-center">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 relative top-0 -mt-16">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  1
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg leading-6 font-semibold text-gray-900">Consultation</h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                Discuss your project requirements with our expert team.
                </p>
              </div>
            </div>
          </li>
          <li className="bg-gray-100 p-5 pb-10 text-center">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 relative top-0 -mt-16">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  2
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg leading-6 font-semibold text-gray-900">Development</h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                Watch as our skilled developers bring your vision to life.
                </p>
              </div>
            </div>
          </li>
          <li className="bg-gray-100 p-5 pb-10 text-center">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 relative top-0 -mt-16">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  3
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg leading-6 font-semibold text-gray-900">Writing</h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                Receive a meticulously crafted project with detailed writing.
                </p>
              </div>
            </div>
          </li>
          <li className="bg-gray-100 p-5 pb-10 text-center">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 relative top-0 -mt-16">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  3
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg leading-6 font-semibold text-gray-900">Success</h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                Defend your project with confidence and secure that coveted A grade.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  )
}