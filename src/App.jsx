import React from "react";
import "./App.css";

// You can split your components
import Editor from "./Editor";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Home from "./home/Home";
import { Header } from "./components/header/Header";
import Board from "./components/board/Board";
import ButtonComponent from "./components/button/Button";
import Sidebar from "./components/sidebar/Sidebar";
import Table from "./components/table/Table";
import Dropdown from "./components/dropdown/Dropdown";
import Input from "./components/input/Input";

const App = () => {
  return (
    <>
      {/* <DndProvider backend={HTML5Backend}> */}
      <Header />
      <div className="flex w-full">
        <Board className="w-3/4" />
        <Sidebar className="w-1/4 h-screen" />
      </div>
      {/* </DndProvider> */}
    </>
  );
};

export default App;
