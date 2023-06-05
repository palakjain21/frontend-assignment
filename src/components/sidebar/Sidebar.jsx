import React from "react";
import search from "../../../assets/search.png";
import "./Sidebar.css";

const Sidebar = () => {
    return(
     <div className="bg-[#F9FBFC] h-screen">

            <input type="text" placeholder="Search Components" className="w-3/4 h-8 mt-8 p-4 ms-8 rounded-md border-2 text-sm border-gray-300 relative"/>

            <p className="text-[#707880] text-sm font-bold mt-4 ms-8">Components</p>
            <div className="flex ms-8 mt-6 ">
                <div className="w-12 h-12 bg-white shadow"></div>
                <div className="flex flex-col ms-4">
                    <span className="text-sm font-bold">Text Input</span>
                    <span className="text-sm text-[#707880]">Supports Markdown or HTML</span>
                </div>
          </div>
          <hr className="mt-4 ms-8 w-3/4"/>

          <div className="flex ms-8 mt-6 ">
                <div className="w-12 h-12 bg-white shadow"></div>
                <div className="flex flex-col ms-4">
                    <span className="text-sm font-bold">Button</span>
                    <span className="text-sm text-[#707880]">Trigger actions like run queries, export data etc.</span>
                </div>
          </div>
          <hr className="mt-4 ms-8 w-3/4"/>

          <div className="flex ms-8 mt-6 ">
                <div className="w-12 h-12 bg-white shadow"></div>
                <div className="flex flex-col ms-4">
                    <span className="text-sm font-bold">Dropdown</span>
                    <span className="text-sm text-[#707880]">Select from a set of options, with a dropdown.</span>
                </div>
          </div>
          <hr className="mt-4 ms-8 w-3/4"/>

          <div className="flex ms-8 mt-6 ">
                <div className="w-12 h-12 bg-white shadow"></div>
                <div className="flex flex-col ms-4">
                    <span className="text-sm font-bold">Table</span>
                    <span className="text-sm text-[#707880]">Display tabular data with pagination.</span>
                </div>
          </div>
            <hr className="mt-4 ms-8 w-3/4"/>
        </div>  
    );
    
}

export default Sidebar;
