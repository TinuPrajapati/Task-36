import React, { useState } from "react";
import Loader from "./Loader";

export default function Form({ handleSubmit, setFile, loading }) {
  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");

  const showImage = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setImageName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setImageUrl("");
    setImageName("")
    handleSubmit(e);
  };

  return (
    <div className="rounded-md flex flex-col items-center gap-6 w-full h-[28vh] px-4 lg:w-[30%] lg:h-full ">
      {loading && <Loader />}
      <div className="flex flex-col items-center justify-evenly bg-white border-custom2 shadow-lg rounded-md h-full p-1 border-2 w-[80%] sm:w-[50%] lg:h-[30%] lg:p-4 lg:border-4 lg:w-full lg:gap-4">
        <h1 className="text-xl lg:text-2xl ">Image Upload</h1>
        <form
          className="flex items-center gap-2 w-full flex-col lg:flex-row "
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
        >
          <input
            type="file"
            id="image"
            name="image"
            className="hidden"
            onChange={showImage}
            accept="image/*"
          />
          <label
            htmlFor="image"
            className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-md flex justify-center items-center active:scale-90 duration-200 w-[70%] py-1 text-lg sm:w-[60%] lg:w-[50%] lg:py-2 lg:text-xl"
          >
            {imageName === "" ? "Choose Image" : imageName}
          </label>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md active:scale-90 duration-200 w-[70%] py-1 text-lg sm:w-[60%] lg:w-[50%] lg:py-2 lg:text-xl"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full h-[70%] flex-col items-center justify-evenly border-4 border-custom2 shadow-lg bg-white rounded-md p-4 hidden lg:flex">
        <p className="text-center text-xl">Preview Image</p>
        {imageUrl && (
          <img src={imageUrl} className="w-full h-[80%] rounded-lg" />
        )}
      </div>
    </div>
  );
}
