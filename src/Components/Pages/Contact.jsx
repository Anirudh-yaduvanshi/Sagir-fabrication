import React from "react";
import Footer from "../Header-Footer/Footer";
import Navbar from "../Header-Footer/Navbar";
import Card from "../Card";
import profile from "/profile.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// 

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
            name="Sagir Ansari"
            phone="7017138942"
            whatsapp="7017138924"
            gmail="aansari@gmail"
          />
          <Card
            image={profile}
            name="Akram Ansari"
            phone="7017138942"
            whatsapp="7017138924"
            gmail="aansari@gmail"
          />
          <Card
            image={profile}
            name="Azam Ansari"
            phone="7017138942"
            whatsapp="7017138924"
            gmail="aansari@gmail"
            
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

// import React from "react";
// import Footer from "../Header-Footer/Footer";
// import Navbar from "../Header-Footer/Navbar";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   useGSAP(() => {
//      let mm = gsap.matchMedia();

//      mm.add("(max-width: 768px)", () => {
//        // Animation for screens 600px or smaller
// 
//  gsap.from(".likha1", {
//    x: 300,
//    opacity: 0.2,
//    duration: 1,
//  });

//  gsap.from(".likha2", {
//    x: -300,
//    opacity: 0.2,
//    duration: 1,
//  });

//  gsap.from(".ownership", {
//    x: 300,
//    opacity: 0.2,
//    duration: 1,

//  });
//  gsap.from(".image ", {
//    x: 300,
//    opacity: 0.2,
//    duration: 1,

//  });

//  gsap.from(".company ", {
//    x: -300,
//    opacity: 0.2,
//    duration: 1,

//  });

//      });

//      mm.add("(min-width: 769px)", () => {
//        // Animation for screens larger than 600px
//         gsap.from(".about", {
//           scale: 0.2,
//           opacity: 0.2,
//           duration: 0.8,
//         });
//         gsap.from(".likha1", {
//           x: 300,
//           opacity: 0.2,
//           duration: 1,
//         });

//         gsap.from(".likha2", {
//           x: -300,
//           opacity: 0.2,
//           duration: 1,
//         });

//         gsap.from(".ownership", {
//           x: 300,
//           opacity: 0.2,
//           duration: 1,
//           scrollTrigger: {
//             scroller: "body",
//             trigger: ".owner",
//             start: "top 95%",

//           },
//         });
//         gsap.from(".image ", {
//           x: 300,
//           opacity: 0.2,
//           duration: 1,
//           scrollTrigger: {
//             scroller: "body",
//             trigger: ".owner",
//             start: "top 80%",

//           },
//         });

//         gsap.from(".company ", {
//           x: -300,
//           opacity: 0.2,
//           duration: 1,
//           scrollTrigger: {
//             scroller: "body",
//             trigger: ".owner",
//             start: "top 80%",

//           },
//         });

//      });

//   })

//   return (
//     <div className=" md:min-h-screen w-screen ABOUT">
//       <div className="about-written  block ">
//         <Navbar />

//         <div className="w-full about  text-5xl text-white font-semibold  flex justify-center items-center">
//           About Us
//         </div>

//         <div className="md:h-screen  w-3/4 gap-6  grid md:grid-cols-2 ">
//           <div className="backdrop-blur-2xl  bg-gray-300 opacity-75 md:h-3/4 w-full rounded-lg  gap-4  likha1 flex justify-center flex-col items-center">
//             <p className="text-3xl font-bold">Who We Are</p>

//             <p className="text-xl font-medium text-center w-11/12">
//               <b> Sagir Fabrication</b> has been at the forefront of Haridwar's
//               fabrication industry for more than <b>30 years</b>. With a team of
//               skilled artisans and cutting-edge technology, we take pride in
//               <b>
//                 {" "}
//                 creating durable, functional, and aesthetically superior
//                 products
//               </b>
//               . Our dedication to <b> quality and customer satisfaction</b> sets
//               us apart.
//             </p>
//           </div>
//           <div className="backdrop-blur-2xl  bg-gray-300 opacity-75 md:h-3/4 w-full rounded-lg  gap-4  likha2 flex justify-center flex-col items-center">
//             <p className="text-3xl font-bold">Why Choose Us?</p>

//             <p className="text-xl font-medium text-left w-11/12">
//               <li>
//                 <strong>Expert Craftsmanship</strong>: Decades of industry
//                 expertise.
//               </li>
//               <li>
//                 <strong> Customized Solutions</strong>: Tailored to meet your
//                 unique needs.
//               </li>
//               <li>
//                 <strong> Reliable Service</strong>: On-time delivery and
//                 transparent communication.
//               </li>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className=" w-full owner  bg-black  ">
//         <div className="w-full  text-5xl h-1/6 underline ownership  text-white font-semibold  flex justify-center items-center">
//           Ownership
//         </div>
//         <div className="h-5/6 w-full   flex justify-center ">
//           <div className="grid md:grid-cols-12   gap-4 w-4/5 md:h-11/12 h-full  ">
//             <div className="bg-white rounded-lg image col-span-6 md:col-span-4 family  h-full "></div>

//             <div className="bg-gray-300 rounded-lg items-center flex justify-center col-span-6 md:col-span-8 md:h-full h-4/5">
//               <div className=" flex flex-col gap-4 company items-center h-11/12 w-11/12 ">
//                 <p className="md:text-4xl text-2xl  w-full text-center font-bold sagir  underline text-shadow-lg">
//                   Mr. Sagir Ansari and Sons
//                 </p>
//                 <p className="md:text-2xl  md:font-medium text-left sons w-full">
//                   <br />
//                   <b> Sagir Fabrication</b> is a family-owned business founded
//                   by <b>Mr. Sagir Ansari</b>. With a legacy of craftsmanship,
//                   the company is now run by his sons Mr. Akram Ansari and Mr.
//                   Azam Ansari, who continue to uphold the values of quality and
//                   integrity.
//                   <br />
//                   <br />
//                   Our family-oriented approach ensures that every project is
//                   executed with the utmost care and attention to detail.
//                   <br />
//                   <br />
//                   We believe in building lasting relationships with our clients,
//                   and strive to provide a high-quality, reliable, and
//                   aesthetically superior product.
//                   <br />
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default About;
