import React from 'react'
import Footer from "../Header-Footer/Footer";
import Navbar from "../Header-Footer/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import galleryData from '../Gallerydata';
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
const Gallery = () => {
  useGSAP(() => {
    gsap.from(".gallery , .grid", {
      scale: 0.2,
      opacity: 0.2,
      duration: 0.8,
    });
  })
  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="heading w-full gallery text-5xl text-white font-semibold text-center">
          Gallery
        </div>

        <div className=" grid gap-2  items-center grid-cols-2 md:grid-cols-3 w-full">
          {galleryData.map((gallery, idx) => (
            <a href={gallery.src} target="_blank" key={idx}>
              <LazyLoadImage
                src={gallery.src}
                alt={gallery.alt}
                className="photogallery border-gray-600 border-2 rounded-lg bg-center bg-cover  "
                effect="blur" // Adds the blur effect while loading
              />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery