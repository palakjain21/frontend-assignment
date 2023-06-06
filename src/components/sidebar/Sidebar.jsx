import React from "react";
import { useState, useEffect } from "react";
import search from "../../../assets/search.png";
import text from "../../../assets/text.png";
import dropdown from "../../../assets/dropdown2.png";
import table from "../../../assets/table.png";
import ButtonComponent from "../button/Button";
import "./Sidebar.css";

const Sidebar = ({canvas,setComponents}) => {

  const handleButtonClick = (componentType) => {
    const newComponent = {
      type: componentType,
      id: Math.random().toString(36).substring(7), // Generate a unique ID
      position: { x: 2, y: 5 }, // Initial position
    };
    canvas.addComponent({type:"button",coordinates:[5,5]},[5,5])
    setComponents([ newComponent]);
  };

//   canvas.observe((updatedComponents) => {
//     setComponents(updatedComponents);
//   });

// useEffect(() => {
//     canvas.observe(setComponents)})
useEffect(()=>{
    console.log(canvas.components);
    canvas.observe(setComponents)
},[canvas])



  return (
    <div className="bg-[#F9FBFC] h-screen">
      <input
        type="text"
        placeholder="Search Components"
        className="w-3/4 h-8 mt-8 p-4 ms-8 rounded-md border-2 text-sm border-gray-300 relative"
      ></input>

      <p className="text-[#707880] text-sm font-bold mt-4 ms-8">Components</p>
      <div
        className="flex ms-8 mt-6 "
        onClick={() => handleButtonClick("input")}
      >
        <div className="w-12 h-12 bg-white shadow flex justify-center items-center">
          <img src={text} alt="text" width="40px" height="40px" />
        </div>
        <div className="flex flex-col ms-4">
          <span className="text-sm font-bold">Text Input</span>
          <span className="text-sm text-[#707880]">
            Supports Markdown or HTML
          </span>
        </div>
      </div>
      <hr className="mt-4 ms-8 w-3/4" />

      <div
        className="flex ms-8 mt-6 "
        onClick={() => handleButtonClick("button")}
      >
        <div className="w-12 h-12 bg-white shadow flex justify-center items-center">
          <button className="bg-[#5046E4] rounded-sm w-8 h-4 text-white text-[8px]">
            ACTION
          </button>
        </div>
        <div className="flex flex-col ms-4">
          <span className="text-sm font-bold">Button</span>
          <span className="text-sm text-[#707880]">
            Trigger actions like run queries, export data etc.
          </span>
        </div>
      </div>
      <hr className="mt-4 ms-8 w-3/4" />

      <div
        className="flex ms-8 mt-6 "
        onClick={() => handleButtonClick("dropdown")}
      >
        <div className="w-12 h-12 bg-white shadow flex justify-center items-center">
          <img src={dropdown} alt="dropdown" width="30px" height="30px" />
        </div>
        <div className="flex flex-col ms-4">
          <span className="text-sm font-bold">Dropdown</span>
          <span className="text-sm text-[#707880]">
            Select from a set of options, with a dropdown.
          </span>
        </div>
      </div>
      <hr className="mt-4 ms-8 w-3/4" />

      <div
        className="flex ms-8 mt-6 "
        onClick={() => handleButtonClick("table")}
      >
        <div className="w-12 h-12 bg-white shadow flex justify-center items-center">
          <img src={table} alt="table" width="30px" height="30px" />
        </div>
        <div className="flex flex-col ms-4">
          <span className="text-sm font-bold">Table</span>
          <span className="text-sm text-[#707880]">
            Display tabular data with pagination.
          </span>
        </div>
      </div>
      <hr className="mt-4 ms-8 w-3/4" />
      
    </div>
  );
};

export default Sidebar;
