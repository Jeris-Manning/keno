import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";
import blankCard from "./blankCard";

const Game = () => {
    const [boardState, setBoardState] = useState(blankCard);

    const handleClick = (e) => {
        // console.log(e.target.innerHTML)
        let temp = e.target.innerHTML - 1;
        console.log(temp);
        setBoardState(boardState, boardState[temp]['picked'] = true);
        console.log(boardState);
    };

    return (
        <GameWrap>
            <Board handleClick={handleClick} state={boardState} />
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
