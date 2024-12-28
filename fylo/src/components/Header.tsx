import Image from 'next/image';
import React from 'react';
import illustrationIntro from '@/assets/images/illustration-intro.png';
import curvyBG from '@/assets/images/bg-curvy-desktop.svg';




const Header = () => {
  return (
    <div className='w-full' >
        <div className='flex items-center flex-col text-center py-16'>
            <span className='header_illustration h-2/5 '>
                <Image src={illustrationIntro} className='w-4/5 mx-auto' alt='illustration intro' />
            </span>
            <h2 className='text-[36px] text-center w-4/5 mx-auto' >All your files in one secure location,  <br /> accessible anywhere. </h2>
            {/* Curvy Background with Text Overlay */}
            <div className="relative w-full">
                <Image src={curvyBG} className="w-full" alt="Curvy Background" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <p className="text-base -mt-24  font-medium text-center leading-relaxed">
                        Fylo stores all your most important files in one secure location. <br />
                        Access them wherever you need, share and collaborate with <br />
                        friends, family, and co-workers.
                    </p>
                    <button className='py-3 px-10 my-5 rounded-full w-fu bg_getStarted text-white'>
                        Get Started
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Header