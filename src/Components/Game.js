import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";

const Game = () => {
    const baseState = [];
    for (let i = 0; i < 80; i++) {
        baseState.push({ id: i, value: i + 1, picked: false, drawn: false });
    }
    const [boardState, setBoardState] = useState(baseState);
    console.log(boardState);

    function handleClick(e) {
        setBoardState([...boardState], (boardState[e.target.id]["drawn"] = !boardState[e.target.id]["drawn"]));
    }

    return (
        <div>
            <Board boardState={boardState} handleClick={handleClick} />
        </div>
    );
};

export default Game;
