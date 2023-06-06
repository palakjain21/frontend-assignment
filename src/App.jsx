import React,{useMemo,useState} from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Header } from "./components/header/Header";
import Board from "./components/board/Board";
import Sidebar from "./components/sidebar/Sidebar";
import { Canvas } from "./utils/Element";

const App = () => {
  const [components,setComponents]=useState()
  const canvas=useMemo(()=>new Canvas(),[]) //creating a new canvas instance 
  return (
    <>
      <Header />
      <div className="flex w-full">
        <DndProvider backend={HTML5Backend}>
        <Board className="w-3/4" canvas={canvas} components={components} />
        <Sidebar className="w-1/4 h-screen" canvas={canvas} setComponents={setComponents} />
        </DndProvider>
      </div>
\    </>
  );
};

export default App;
