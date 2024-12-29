import React from "react";
import Image from "./Image";
import Loader from "./Loader";

const Display = ({ images,handleDelete,loading }) => {
  return (
    <div className="bg-white rounded-md border-4 border-custom2 shadow-lg flex flex-col items-center gap-2 p-2 w-[90%] h-full lg:w-[70%] lg:h-full lg:p-4 lg:gap-4">
      {loading && <Loader/>}
      <h1 className="text-xl lg:text-2xl">
        Upload Images
      </h1>
      <div className="w-full flex flex-col items-center gap-4 md:grid-cols-2 lg:h-[90%] lg:grid lg:grid-cols-3 lg:grid-rows-2">
        {images.map((image, index) => (
          <Image image={image} key={index} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Display;
