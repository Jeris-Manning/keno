import React from "react";
import styled from "styled-components";
import Square from "./Square";
import blankCard from "./blankCard";

const Board = ({ handleClick, state }) => {
    return (
        <GameBoard>
            {state.map((state) => (
                <Square
                    val={state.id}
                    handleClick={handleClick}
                    state={state}
                    picked = {state.picked}
                />
            ))}
        </GameBoard>
    );
};

export default Board;

const GameBoard = styled.div`
    width: 890px;
    height: 710px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background: darkslategray;
`;
