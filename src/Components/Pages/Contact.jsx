import React from "react";
import Footer from "../Header-Footer/Footer";
import Navbar from "../Header-Footer/Navbar";
import Card from "../Card";
import profile from "/profile.png";
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
    <div className="  contact w-screen bg-gray-900">
      <Navbar />

      <div className="w-full about h-fit  text-5xl gap-4 text-white font-semibold flex-col bg-gray-900 flex justify-center items-center">
        <span className="contactus">Contact Us</span>

        <div className="flex flex-col bg-gray-900 items-center w-screen gap-4">
          <Card
            image={profile}
            name="Mr. Sageer Ansari"
            phone="9319039625"
            whatsapp="9319039625"
            gmail="Aazamansari9999@gmail.com"
          />
          <Card
            image={profile}
            name="Mr. Akram Ansari"
            phone="9837439465"
            whatsapp="9837439465"
            gmail="aansari@gmail"
          />
          <Card
            image={profile}
            name="Mr. Azam Ansari"
            phone="9760001118"
            whatsapp="9760001118"
            gmail="Aazamansari9999@gmail.com"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
