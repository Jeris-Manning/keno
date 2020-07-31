import React from "react";
import Board from "./Components/Board";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Board />
        </div>
    );
}

export default App;
