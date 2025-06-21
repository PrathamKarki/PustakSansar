'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Sheet, SheetContent,SheetDescription,SheetHeader,SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@/redux/reducerSlices/userSlice';

const Navicons = () => {
   const {isLoggedIn} = useSelector(state => state.user);
   const dispatch = useDispatch();

    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleLogout = () =>{
      dispatch(logoutUser());
    }

  return (
    <div className='flex items-center gap-4 xl:gap-8 relative'>
        <Image src="/notification.png" alt='notification' width={22} height={22} className='cursor-pointer'/>
        
    <div className='relative cursor-pointer'>
        <Image src="/cart.png" alt='cart' width={22} height={22} className='cursor-pointer' onClick={()=> setIsCartOpen((prev) => !prev)}/> {isCartOpen && 
        (
             <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
          <SheetContent side="right" className="w-[350px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Your Cart</SheetTitle>
              <SheetDescription>
                Here are the items in your shopping cart.
              </SheetDescription>
            </SheetHeader>

            {/* Cart content here */}
            <div className="mt-4">
              <p>Your cart is empty.</p>
            </div>
          </SheetContent>
        </Sheet>
      )}
      <div className="absolute -top-4 -right-4  w-6 h-6 bg-[#F35C7A] rounded-full text-wh  text-white text-sm flex items-center justify-center">2</div>
       </div>
      {isLoggedIn ? (
          <div>
            <Button onClick={handleLogout} className='px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200'  > <Link href="/login">Log out</Link></Button>
          </div>
      ): (
        <div className='flex gap-5 items-center justify-center'>
           <Button className='px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200'  > <Link href="/login">Log In</Link></Button>
           <Button className='px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition duration-200'> <Link href="/register">Register</Link></Button>

       </div> 

      ) }
        
    </div>
  )
}

export default Navicons