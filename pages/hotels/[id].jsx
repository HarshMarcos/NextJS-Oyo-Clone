import Image from "next/image";
import React from "react";

const SingleHotel = () => {
  return (
    <div className="w-7/12 mx-auto my-10">
      <Image
        src={
          "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg"
        }
        alt="hotel"
        width={2000}
        height={2000}
        className="w-full h-large-box mb-5 my-5 "
      />
      <div className="">
        <h3 className="text-3xl font-bold">Lorem ipsum dolor sit.</h3>
        <p className="text-xl my-5 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed
          soluta modi iusto sunt laboriosam officia fugit numquam architecto
          animi.
        </p>
        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
          Price : Rs.4500
        </button>
        <p className="text-3xl font-bold my-5">Facilities : </p>
        <ul className="flex text-xl justify-between">
          <li>Swimming Pool</li>
          <li>Dogs</li>
          <li>Garden</li>
          <li>Loundry</li>
          <li>Cricket</li>
        </ul>
        <button className="w-60 h-14 rounded-lg bg-red-400 text-lg my-5">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleHotel;
