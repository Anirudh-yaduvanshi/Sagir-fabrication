import React, { useEffect } from 'react'
import Footer from "../Header-Footer/Footer";
import Navbar from "../Header-Footer/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {shop ,IRON ,TIN} from '../Gallerydata';
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import { useLocation } from 'react-router';
const Gallery = () => {
  useGSAP(() => {
    gsap.from(".gallery , .grid", {
      scale: 0.2,
      opacity: 0.2,
      duration: 0.8,
    });
    gsap.from(".header", {
      x: -100,
      scale: 0.3,
      duration: 1,
      opacity: 0,
    })
  })

  let location = useLocation();
   useEffect(() => {
     if (location.hash) {
       const element = document.querySelector(location.hash); // Get the element by its ID
       if (element) {
         element.scrollIntoView({ behavior:"auto", block:"start" }); // Smoothly scroll to the element
       }
     }
   }, [location.hash]);

  console.log(location);
  return (
    <>
      <div className="min-h-screen w-screen bg-gray-900">
        <Navbar />
        <div className="heading gallery underline  text-5xl text-white font-semibold text-center">
          Gallery
        </div>

        <div className='md:padding'> 

        <div className="header margin border-b  text-3xl  text-white  " id='shed'>TIN SHED</div>

        <div className=" grid gap-2 items-center grid-cols-2 md:grid-cols-3 w-full">
          {TIN.map((TIN, idx) => (
            <a href={TIN.src} target="_blank" key={idx}>
              <LazyLoadImage
                src={TIN.src}
                alt={TIN.alt}
                className="photogallery border-gray-600 border-2 rounded-lg bg-center bg-cover  "
                effect="blur"               />
            </a>
          ))}
        </div>
            </div>
        <div className='md:padding'> 

        <div className="header margin border-b  text-3xl  text-white  " id='IRON'>IRON FABRICATION</div>

        <div className=" grid gap-2 items-center grid-cols-2 md:grid-cols-3 w-full">
          {IRON.map((TIN, idx) => (
            <a href={TIN.src} target="_blank" key={idx}>
              <LazyLoadImage
                src={TIN.src}
                alt={TIN.alt}
                className="photogallery border-gray-600 border-2 rounded-lg bg-center bg-cover  "
                effect="blur" 
              />
            </a>
          ))}
        </div>
        </div>
        
        
        <div className='md:padding'> 

        <div className="header margin border-b  text-3xl  text-white  " id='shop'>SHOP</div>

        <div className=" grid gap-2 items-center grid-cols-2 md:grid-cols-3 w-full">
          {shop.map((TIN, idx) => (
            <a href={TIN.src} target="_blank" key={idx}>
              <LazyLoadImage
                src={TIN.src}
                alt={TIN.alt}
                className="photogallery border-gray-600 border-2 rounded-lg bg-center bg-cover  "
                effect="blur" // Adds the blur effect while loading
              />
            </a>
          ))}
        </div>
      </div>
      <Footer />
      </div>
      </>
  );
}

export default Gallery