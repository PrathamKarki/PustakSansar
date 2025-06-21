import React from 'react';
import Image from 'next/image';
import Menu from './Menu';
import Link from 'next/link';
import SearchBar from './SearchBar';
import Navicons from './Navicons';



const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
         {/* Mobile Scrrent */}
        <div className="h-full flex  items-center justify-between md:hidden">
            <Image src='/logo.png' alt='logo' width={120} height={180}/>
            <Menu/>
        </div>
        {/* bigger screen */}
        <div className="hidden md:flex items-center justify-between gap-7 h-full">
            {/* Left section */}
            <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                <Link href="/" className='flex items-center gap-3'>
                <Image src="/logo.png" alt='logo' width={120} height={180}/>
                </Link>
                <div className="hidden xl:flex gap-6 font-medium text-gray-700">
                    <Link href="/" className="hover:text-black hover:underline underline-offset-4 transition">Home</Link>
                    <Link href="/" className="hover:text-black hover:underline underline-offset-4 transition">Products</Link>
                    <Link href="/" className="hover:text-black hover:underline underline-offset-4 transition">Categories</Link>
                </div>
            </div>
            
            {/* Right section */}
            <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-7">
                <SearchBar/>
                <Navicons/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;