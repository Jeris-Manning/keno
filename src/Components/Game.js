import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";

const Game = () => {
    var [numPicked, setNumPicked] = useState(0);
    const baseState = [];
    for (let i = 0; i < 80; i++) {
        baseState.push({ id: i, value: i + 1, picked: false, drawn: false });
    }
    const [boardState, setBoardState] = useState(baseState);

    function handleClick(e) {
        if (!boardState[e.target.id]["picked"]) {
            setNumPicked(...numPicked + 1);
        } else {
            setNumPicked(...numPicked - 1);
        }
        setBoardState(
            [...boardState],
            (boardState[e.target.id]["picked"] = !boardState[e.target.id][
                "picked"
            ])
        );
        console.log(numPicked);
    }

    return (
        <div>
            <Board boardState={boardState} handleClick={handleClick} />
        </div>
    );
};

export default Game;
