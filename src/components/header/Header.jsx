import React from "react";
import "./Header.css";
import ham from "../../../assets/ham.png";
export const Header = () => {
    return (
        <>
        <div className="flex w-full h-8 bg-grey-bg">
            <div className="w-1/2 h-8 flex items-center">
                <div className= "circles1"></div>
                <div className= "circles2"></div>
                <div className= "circles3"></div>


        </div>
        <div className="w-1/2 h-8 flex text-sm items-center text-gray-500 mr-16">
            Zenskar App Builder
            </div>
        </div>
        <div className="w-full h-16 flex">
            <div className="w-3/4 h-16 flex items-center">
                <img src={ham} alt="hamburger-menu" className="w-6 h-6 ms-8" />
                <span className="ms-4 font-bold">Design Board</span><span className="ms-2 text-gray-400">(Draft)</span>
            </div>
            <div className="w-1/4 h-16 ms-16 bg-[#F9FBFC]">
                </div>
        </div>
        </>
    
    );
    }
