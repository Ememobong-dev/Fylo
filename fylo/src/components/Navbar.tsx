import Image from 'next/image';
import React from 'react';
import brandLogo from '@/assets/images/logo.svg';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full bg-navbarBlue py-8 px-14 ">
        <div className='flex justify-between items-center'>
            <div className='brandImg'>
                <Image src={brandLogo} alt="brand image" />
            </div>
            <div>
                <ul className='flex gap-10 items-center'>
                    <li>
                      <Link href={'/'}>Features</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Team</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Sign In</Link>
                    </li>
                </ul>
            </div>

        </div>
        
    </div>
  )
}

export default Navbar