import React, { useState } from "react";
import styled from "styled-components";

const Board = (props) => {

  const board = props.boardState

    return (
        <GameBoard>

            {board.map((state) => (
                <Square key={state.id} id={state.id} value={state.value} onClick={props.handleClick} picked= {state.picked}>
                    {state.value}
                </Square>
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

const Square = styled.div`
    width: 80px;
    height: 80px;
    margin: 2px;
    background: steelblue;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: ${(props) => (props.picked == true ? "red" : "white")};
`;
