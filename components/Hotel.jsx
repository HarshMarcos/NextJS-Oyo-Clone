import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotel = () => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-96 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={
            "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg"
          }
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-80 mr-3"
        />
        <div className="grid grid-rows-3 ">
          <Image
            src={
              "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 "
          />
          <Image
            src={
              "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
          <Image
            src={
              "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
          <Image
            src={
              "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 "
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-xl line-clamp-1">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-justify my-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequuntur ex porro dolore error inventore quidem impedit a iusto
            ut?
          </p>
          <p className="text-2xl my-5">
            <span className="font-bold">Facilities : </span>
            <span>Free wifi, Pet Care, Swimming Pool, Beaches, Resort</span>
          </p>
          <div className="flex items-center">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
              Price : Rs.4500
            </button>
            <Link
              href={"/hotels/2"}
              className="text-xl font-bold text-red-600 ml-10"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
