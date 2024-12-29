import React, { useState } from 'react'

const Image = ({ image,handleDelete }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`flex flex-col ${hovered?"gap-1":"gap-0"} duration-200 hover:bg-custom2 hover:rounded-md hover:p-1 relative w-[90%] h-[40vh] lg:w-full lg:h-full`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={image.url}
                alt="no image"
                className={`w-full bg-sky-500 ${hovered ? "h-[80%]" : "h-full"} duration-200 rounded-md`}
            />
            <button
                className={`bg-red-500 ${hovered ? "opacity-100 h-[20%]" : "opacity-0 h-0"} transition-opacity duration-200 rounded-md`}
                onClick={() => handleDelete(image._id)}
            >
                Delete
            </button>
        </div>
    )
}

export default Image;
