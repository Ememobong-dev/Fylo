import Image from 'next/image';
import React from 'react';
import computerIcon from '@/assets/images/icon-access-anywhere.svg';
import securityIcon from '@/assets/images/icon-security.svg';
import realTimeIcon from '@/assets/images/icon-collaboration.svg';
import storageIcon from '@/assets/images/icon-any-file.svg';

const Services = () => {
  return (
    <div className='w-full' >
        <div className='flex gap-10 mb-24 justify-center items-center mx-auto'>
            <div className='w-[430px] flex flex-col justify-center text-center gap-3'>
                <Image className='mx-auto' src={computerIcon} alt='' />
                <h3>Get Started Access your files, anywhere</h3>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
            <div className='w-[430px]  flex flex-col justify-center text-center gap-3'>
                <Image className='mx-auto' src={securityIcon} alt='' />
                <h3>Get Started Access your files, anywhere</h3>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
        </div>
        <div className='flex gap-10  justify-center items-center mx-auto'>
            <div className='w-[430px] flex flex-col justify-center text-center gap-3'>
                <Image className='mx-auto' src={realTimeIcon} alt='' />
                <h3>Get Started Access your files, anywhere</h3>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
            <div className='w-[430px]  flex flex-col justify-center text-center gap-3'>
                <Image className='mx-auto' src={storageIcon} alt='' />
                <h3>Get Started Access your files, anywhere</h3>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
        </div>
    </div>
   
  )
}

export default Services