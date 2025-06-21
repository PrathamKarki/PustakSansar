'use client'
import React from 'react';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const {email} = useSelector (state=> state.user)
  return (
   <>

   {email}
    <Navbar/>
    <Background/>
    </>
  )
}

export default HomePage;