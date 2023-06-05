import React from "react";
import { Header } from "../components/header/Header";
import Board from "../components/board/Board";
import ButtonComponent from "../components/button/Button";


const Home = () => {
    return(
        <div className="App">
        <Header/>
        <Board/>
        <ButtonComponent/>
      {/* <Editor /> */}
    </div>
    );
}

export default Home;