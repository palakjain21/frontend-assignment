import React from "react";
import "./Header.css";
import ham from "../../../assets/ham.png";
import dropdown from "../../../assets/dropdown.png";
import play from "../../../assets/play.png";
export const Header = () => {
  return (
    <>
      <div className="flex w-full h-8 bg-grey-bg">
        <div className="w-1/2 h-8 flex items-center">
          <div className="circles1"></div>
          <div className="circles2"></div>
          <div className="circles3"></div>
        </div>
        <div className="w-1/2 h-8 flex text-sm items-center text-gray-500 mr-16">
          Zenskar App Builder
        </div>
      </div>
      <div className="w-full h-16 flex">
        <div className="w-3/4 h-16 flex items-center">
          <img src={ham} alt="hamburger-menu" className="w-6 h-6 ms-8" />
          <span className="ms-4 font-bold">Design Board</span>
          <span className="ms-2 text-gray-400">(Draft)</span>
        </div>
        <div className="w-1/4 h-16 ms-16 bg-[#F9FBFC] flex justify-center items-center p-2">
          <div className="dropdown z-50 ">
            <label tabIndex={0} className="text-sm m-1 w-[100px] h-[17px] flex bg-transparent border-none">
              81.2%
              <img src={dropdown} alt="dropdown" width="10px" height="17px"/>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>81.2%</a>
              </li>
              <li>
                <a>100%</a>
              </li>
            </ul>
          </div>
          <div className="button bg-[#DFE7FF] text-sm rounded-md">
                        <img src={play} alt="play" className="mr-2"     width="15px" height="15px" />

            Preview
          </div>
        </div>
      </div>
    </>
  );
};
