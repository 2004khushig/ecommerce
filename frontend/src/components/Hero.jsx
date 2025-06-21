import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center border border-gray-200 rounded-xl shadow-md overflow-hidden bg-white">
            <div className="w-full sm:w-1/2 flex items-center justify-center px-6 py-10 sm:py-16 ">
                <div className="text-[#414141] max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 md:w-12 h-[2px] bg-[#414141]"></span>
                        <span className="font-medium text-sm md:text-base tracking-wide">OUR BESTSELLERS</span>
                    </div>
                    <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        Latest Arrivals
                    </h1>
                    <div className="flex items-center gap-3 group cursor-pointer w-fit">
                        <span className="font-semibold text-sm md:text-base group-hover:underline">SHOP NOW</span>
                        <span className="w-8 md:w-11 h-[1px] bg-[#414141] group-hover:w-14 transition-all duration-300"></span>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 flex items-center justify-center bg-white p-4">
                <img
                    src={assets.hero_img}
                    alt="Hero Banner"
                    className="max-w-full h-auto object-contain"
                />
            </div>
        </div>
    );
};

export default Hero;
