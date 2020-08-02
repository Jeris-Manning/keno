import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";
import blankCard from "./blankCard";

const Game = () => {
    const [boardState, setBoardState] = useState(blankCard);

    function handleClick(e) {
        e.preventDefault();
        let temp = e.target.innerHTML - 1;

        setBoardState(...boardState, (boardState[temp] = 1));

        console.log(boardState);
    }

    return (
        <GameWrap>
            <Board state={boardState} handleClick={handleClick} />
        </GameWrap>
    );
};

export default Game;

const GameWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: darkslateblue;
    min-height: 100vh;
`;
