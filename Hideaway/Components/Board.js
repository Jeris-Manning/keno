import React from "react";
import styled from "styled-components";
import Square from "./Square";
import "../App.css";
import blankCard from "./blankCard";

const Board = ({ handleClick, state }) => {
    return (
        <GameBoard>
            {state.map((numState, idx) => (
                <Square
                    state={state}
                    val={numState ? idx : numState}
                    handleClick={handleClick}
                    numState={numState}
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

// {state.map((numState, idx) => (
//   <Square
//       state={state}
//       val={idx + 1}
//       handleClick={handleClick}
//       numState={numState}
//   />
// ))}
