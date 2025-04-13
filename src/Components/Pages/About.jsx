import React from "react";
import Footer from "../Header-Footer/Footer";
import Navbar from "../Header-Footer/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../../App.css"
import family from "/Family.jpg"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      // Animation for screens 600px or smaller phone hai
      gsap.from(".about", {
        scale: 0.2,
        opacity: 0.2,
        duration: 0.8,
      });
      gsap.from(".likha1", {
        x: 300,
        opacity: 0.2,
        duration: 1,
      });

      gsap.from(".likha2", {
        x: -300,
        opacity: 0.2,
        duration: 1,
      });

      gsap.from(".ownership", {
        x: 300,
        opacity: 0.2,
        duration: 1,
      });
      gsap.from(".image", {
        x: 300,
        opacity: 0.2,
        duration: 1,
      });

      gsap.from(".company", {
        x: -300,
        opacity: 0.2,
        duration: 1,
      });
        gsap.from(".you", {
          x: 300,
          opacity: 0.2,
          duration: 1,
         
        });
        gsap.from(".map", {
          opacity: 0.2,
          duration: 1,
          scale: 0.3,
          
        });
    });

    mm.add("(min-width: 769px)", () => {
      // Animation for screens larger than 600px display
      gsap.from(".about", {
        scale: 0.2,
        opacity: 0.2,
        duration: 0.8,
      });
      gsap.from(".likha1", {
        x: 300,
        opacity: 0.2,
        duration: 1,
      });

      gsap.from(".likha2", {
        x: -300,
        opacity: 0.2,
        duration: 1,
      });

      gsap.from(".ownership", {
        x: 300,
        opacity: 0.2,
        duration: 1,
        scrollTrigger: {
          scroller: "body",
          trigger: ".owner",
          start: "top 95%",
        },
      });
      gsap.from(".image", {
        x: 300,
        opacity: 0.2,
        duration: 1,
        scrollTrigger: {
          scroller: "body",
          trigger: ".owner",
          start: "top 80%",
        },
      });

      gsap.from(".company", {
        x: -300,
        opacity: 0.2,
        duration: 1,
        scrollTrigger: {
          scroller: "body",
          trigger: ".owner",
          start: "top 80%",
        },
      });

         gsap.from(".you", {
           x: 300,
           opacity: 0.2,
           duration: 1,
           scrollTrigger: {
             scroller: "body",
             trigger: ".youm",
             start: "top 95%",
           },
         });
         gsap.from(".map", {
           opacity: 0.2,
           duration: 1,
                scale:0.3,
                scrollTrigger: {
                  scroller: "body",
                  trigger: ".youm",
                  start: "top 95%",
                },
              });
    });
  });

  return (
    <div className="md:min-h-screen w-screen ABOUT">
      <div className="about-written block">
        <Navbar />

        <div className="w-full heading about text-5xl text-white font-semibold flex justify-center items-center">
          About Us
        </div>

        <div className="md:h-screen w-3/4 gap-6 grid md:grid-cols-2">
          <div className="backdrop-blur-2xl bg-gray-300 opacity-75 md:h-3/4 w-full rounded-lg gap-4 likha1 flex justify-center flex-col items-center">
            <p className="text-3xl heading font-bold">Who We Are?</p>

            <p className="text-xl font-medium text-center w-11/12">
              <b>Sageer Fabrication</b> has been at the forefront of Haridwar's
              fabrication industry for more than <b>30 years</b>. With a team of
              skilled artisans and cutting-edge technology, we take pride in
              <b>
                {" "}
                creating durable, functional, and aesthetically superior
                products
              </b>
              . Our dedication to <b>quality and customer satisfaction</b> sets
              us apart.
            </p>
          </div>
          <div className="backdrop-blur-2xl bg-gray-300 opacity-75 md:h-3/4 w-full rounded-lg gap-4 likha2 flex justify-center flex-col items-center">
            <p className="text-3xl heading font-bold">Why Choose Us?</p>

            <p className="text-xl font-medium text-left w-11/12">
              <li>
                <strong>Expert Craftsmanship</strong>: Decades of industry
                expertise.
              </li>
              <li>
                <strong>Customized Solutions</strong>: Tailored to meet your
                unique needs.
              </li>
              <li>
                <strong>Reliable Service</strong>: On-time delivery and
                transparent communication.
              </li>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full owner bg-gray-800">
        <div className="w-full heading text-5xl h-1/6  ownership text-white font-semibold flex justify-center items-center">
          Ownership
        </div>
        <div className="h-5/6 w-full flex justify-center">
          <div className="grid md:grid-cols-12 gap-4 w-4/5 md:h-11/12 h-full">
            <div className="bg-white rounded-lg image col-span-6 md:col-span-4 overflow-hidden bg-center family h-full bg-gray-400 flex item-center justify-center">
              <img src={family} alt="ansari family" className="bg-cover" />
            </div>

            <div className="bg-gray-300 rounded-lg items-center flex justify-center col-span-6 md:col-span-8 md:h-full h-4/5">
              <div className="flex flex-col gap-4 company items-center h-11/12 w-11/12">
                <p className="md:text-4xl text-2xl heading w-full text-center font-bold sagir underline text-shadow-lg">
                  Mr. Sageer Ansari and Sons
                </p>
                <p className="md:text-2xl md:font-medium overflow-y-hidden text-left text-wrap sons w-full">
                  <br />
                  <b>Sageer Fabricators</b> is a family-owned business founded
                  by <b>Mr. Sageer Ansari</b>. With a legacy of craftsmanship,
                  the company is now run by his sons{" "}
                  <b> Mr. Akram Ansari and Mr. Azam Ansari</b>, who continue to
                  uphold the values of quality and integrity.
                  <br />
                  <br />
                  Our family-oriented approach ensures that every project is
                  executed with the utmost care and attention to detail.
                  <br />
                  <br />
                  We believe in building lasting relationships with our clients
                  and strive to provide a high-quality, reliable, and
                  aesthetically superior product.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full flex items-center youm flex-col  bg-gray-800">
        <div className="w-full capitalize md:text-5xl heading text-3xl h-1/6  you text-white font-semibold flex justify-center items-center">
          you can found us at
        </div>{" "}
        <iframe
          className="map w-3/4 h-3/5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.13545107560535!2d78.10332896104345!3d29.917087821036557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949b9b8afc053%3A0x1b60cbc9d0d1cc54!2sShiv%20dairy%20and%20confectionery!5e0!3m2!1sen!2sin!4v1744284554702!5m2!1sen!2sin"
          style={{ borde: 2 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <a href="https://www.google.com/maps?ll=29.917474,78.103448&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=1972800704440552532">
          {" "}
          <address className="text-white text-center w-full hover:text-blue-600 px-2">
            next to Shiv Dairy and confectionery, Sabji Mandi road, near Jatwara
            Bridge, Sitapur, Jwlapur, Haridwar, Uttrakhand-249407{" "}
          </address>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default About;
