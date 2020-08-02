import React, { Fragment } from "react";
import "./App.css";
import Game from "./Components/Game";
import Board from "./Components/Board";

function App() {
    return (
        <Game>
            <Board></Board>
        </Game>
    );
}

export default App;
