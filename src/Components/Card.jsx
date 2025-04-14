import React from "react";

const Card = ({ image, name, phone, whatsapp, gmail, designation,id }) => {
  return (
    <div className=" card  w-4/5 margin md:h-64  grid md:grid-cols-2 md:gap-4">
      <div className="h-full  flex  justify-center  items-center  ">
        <img
          src={image}
          className="bg-center bg-cover hover:scale-105  md:h-56   rounded-full"
          alt="photo"
        />
      </div>
      <div className="md:h-full w-full h-52  likha2 flex  justify-center flex-col md:items-start items-center gap-4 ">
        <div className=" text-sm hover:scale-110 ">
          <i class="ri-user-3-line"></i> {"     "}
          {name}
        </div>
        <div className=" text-sm hover:scale-110 hover:text-green-600">
          {"  "}
          <a href={`https://api.whatsapp.com/send?phone=91${whatsapp}`}>
            <i class="ri-whatsapp-line"></i>
            {"  "}
          </a>
          <a href={`tel:+91${phone}`}>{phone}</a>
        </div>
        <div className=" text-sm text-wrap hover:scale-110 hover:text-red-500">
          <a href={`mailto:${gmail}`} className=" text-wrap">
            <i class="ri-mail-line"></i>
            {"  "}
            {gmail}
          </a>
        </div>
        <div className=" text-sm text-wrap hover:scale-110 hover:text-red-500">
          <a href={id} className=" text-wrap">
            <i class="ri-medal-line"></i> {"  "}
            {designation}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
