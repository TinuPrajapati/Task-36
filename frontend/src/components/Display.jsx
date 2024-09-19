import React from "react";

const Display = ({ images }) => {
  return (
    <div className="w-[70%] h-full bg-white rounded-lg shadow-lg p-4 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-serif border-b-2 border-sky-500 ">
        Upload Images
      </h1>
      <div className="w-full h-[95%]  grid grid-cols-4 grid-rows-3 gap-4">
        {images.map((image, index) => (
          <img
            src={image.url}
            alt="no image"
            key={index}
            className="w-full bg-sky-500 h-full rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Display;
