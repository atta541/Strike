"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/assets/videoframe_8038.png",
    "/assets/videoframe_18140.png",
    "/assets/videoframe_21028.png",
    "/assets/videoframe_25111.png"
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="flex flex-col items-center">
            {/* Image Slider */}
            <div className="relative w-full h-[500px] overflow-hidden">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`Slide ${index + 1}`}
                            fill // This replaces layout="fill" and objectFit="cover"
                            className="object-cover"
                            priority={index === 0} // Load first image faster
                        />
                    </div>
                ))}
            </div>

            {/* Text Below the Images */}
            <div className="text-center text-white mt-6">
    <h1 className="text-6xl font-extrabold text-[#B4A596] uppercase">
        No Limits. <br /> No Excuses.
    </h1>
    <p className="text-lg mt-2 text-gray-300">
        Rise. Grind. Repeat. <br /> The only way is forward.
    </p>
</div>



        </div>
    );
};

export default Banner;
