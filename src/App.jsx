import React,{useMemo} from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Header } from "./components/header/Header";
import Board from "./components/board/Board";
import ButtonComponent from "./components/button/Button";
import Sidebar from "./components/sidebar/Sidebar";
import Table from "./components/table/Table";
import Dropdown from "./components/dropdown/Dropdown";
import Input from "./components/input/Input";
import { Canvas } from "./utils/Element";

const App = () => {
  const canvas=useMemo(()=>new Canvas(),[]) //creating a new canvas instance 
  return (
    <>
      {/* <Header />
      <div className="flex w-full">
        <Board className="w-3/4" />
        <Sidebar className="w-1/4 h-screen" />
      </div> */}
      <Header />
      <div className="flex w-full">
        <DndProvider backend={HTML5Backend}>
        <Board className="w-3/4" canvas={canvas} />
        <Sidebar className="w-1/4 h-screen" />
        </DndProvider>
      </div>
\    </>
  );
};

export default App;
