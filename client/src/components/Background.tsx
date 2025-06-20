'use client';
import React, { useState } from 'react'
import Link from 'next/link';

const Background = () => {

    const [current, setCurrent] = useState(0);

    const background = [
        {
            id: 1,
            // url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
            url: 'https://superdesk-pro-c.s3.amazonaws.com/sd-nepalitimes/20221109101148/636b781d9c7e80680e064684jpeg.jpg',
            title: 'Big Book Sale!',
            description: 'Enjoy up to 50% off on bestsellers and classics.',
        },


    ]
      return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000">
        {background.map((slide) => (
          <div
            className={` w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-3xl lg:text-3xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href='/'>
                <button className="rounded-md bg-black text-white py-3 px-4 ">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <img
                src={slide.url}
                alt=""
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
};

  
  

export default Background;