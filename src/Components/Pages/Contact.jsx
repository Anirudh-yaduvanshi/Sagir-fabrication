import React from "react";
import Footer from "../Header-Footer/Footer";
import Navbar from "../Header-Footer/Navbar";
import Card from "../Card";

import akarm from "../../Assets/akram.jpg";
import azam from "../../Assets/azam.jpg";
import sagir from "../../Assets/sagir.jpg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Contact = () => {
  useGSAP(() => { 
     gsap.from(".contactus", {
       scale: 0.2,
       opacity: 0.2,
       duration: 0.8,
     });
    
    
     gsap.from(".card", {
       scale: 0.2,
       opacity: 0.2,
       duration: 0.8,
     });
    
    
  })
  return (
    <div className="  contact overflow-x-hidden min-h-screen md:w-screen w-full bg-gray-900">
      <Navbar />

      <div className="w-full about h-fit  text-5xl gap-4 text-white font-semibold flex-col bg-gray-900 flex justify-center items-center">
        <span className="contactus heading">Contact Us</span>

        <div className="flex flex-col   items-center w-full md:w-screen h-full  gap-4">
          <Card
            image={sagir}
            name="Mr. Sageer Ansari"
            phone="9319039625"
            whatsapp="9319039625"
            gmail="---"
            designation="OWNER"
            id="../gallery"
            />
          <Card
            image={azam}
            name="Mr. Azam Ansari"
            phone="9760001118"
            whatsapp="9760001118"
            gmail="aazamansari9999@gmail.com"
            designation="TIN SHED"
            id="../gallery/#shed"
            
            />
          <Card
            image={akarm}
            name="Mr. Akram Ansari"
            phone="9837439465"
            whatsapp="9837439465"
            gmail="akramansari9837439465@gmail.com"
            designation="IRON FABRICATION"
            id="../gallery/#IRON"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
