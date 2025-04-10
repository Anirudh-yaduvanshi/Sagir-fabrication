import React from "react";

const Card = ({ image, name, phone, whatsapp, gmail }) => {
  return (
    <div className=" card  w-3/4  md:h-64  grid grid-cols-2 gap-4">
      <div className="md:h-full w-11/12 h-52    flex  justify-center flex-col items-center gap-4  ">
        <img
          src={image}
          className="bg-center bg-cover hover:scale-105  md:h-56   rounded-full"
          alt="photo"
        />
      </div>
      <div className="md:h-full w-11/12 h-52  likha2 flex  justify-center flex-col items-start gap-4 ">
        <div className=" text-sm hover:scale-110 ">
          <i class="ri-user-3-line"></i> {"     "}
          {name}
        </div>
        <div className=" text-sm hover:scale-110 hover:text-green-600">
          {"  "}
          <a href={`tel:+91${phone}`}>
            <i class="ri-phone-line"></i> {"  "}
            {phone}
          </a>
        </div>
        <div className=" text-sm hover:scale-110 hover:text-green-300"> 
          {" "}
          <a href={`https://api.whatsapp.com/send?phone=91${whatsapp}`}>

          <i class="ri-whatsapp-line"></i>
          {"  "}
          {whatsapp}
          </a>
        </div>
        <div className=" text-sm hover:scale-110 hover:text-red-500">
          <a href={`mailto:${gmail}`}>
            <i class="ri-mail-line"></i>
            {"  "}
            {gmail}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
