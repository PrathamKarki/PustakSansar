'use client'
import React from 'react';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';
import { useSelector } from 'react-redux';

const HomePage = () => {
  return (
   <>

    <Navbar/>
    <Background/>
    </>
  )
}

export default HomePage;