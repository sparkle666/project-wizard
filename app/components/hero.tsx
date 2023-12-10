import Image from 'next/image'
import React from 'react'
import HeroImage from "../../public/hero-image.png"

const FirstHero = () => {
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
          Crush Your Final Year with Expertly Crafted Projects 🚀 
          </h2>
          <p className='py-8 font-extralight text-gray-700'>Are you a final year computer science student striving for academic excellence? 
            Look no further! 
            ProjectWizard is your trusted ally in achieving top grades 
            and delivering impeccable projects from start to finish.</p>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded md:p-8">
          <div className="rounded-lg bg-white text-black w-full">
            <Image  
            src={HeroImage} 
            width={500} 
            height={500} 
            alt='A picture of a man' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstHero


