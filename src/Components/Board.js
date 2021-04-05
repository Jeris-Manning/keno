import React from "react";
import styled from "styled-components";

import Square from "./Square";

const Board = ({ boardState, gameState, handleClick }) => {
    let gridRows = [];
    var k = 0;
    for (let i = 0; i < 8; i++) {
        gridRows[i] = [];
        for (let j = 0; j < 10; j++) {
            gridRows[i].push(j + k + 1);
        }
        k += 10;
    }

    return (
        <GameBoard>
            {gridRows.map((row, idx) => (
                <Row key={idx}>
                    {row.map((num) => (
                        <Square
                            gameState={gameState}
                            key={num}
                            num={num}
                            clicked={boardState?.[num]?.clicked}
                            drawn={boardState?.[num]?.drawn}
                            handleClick={handleClick}
                        />
                    ))}
                </Row>
            ))}
        </GameBoard>
    );
};

export default Board;

const GameBoard = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: cornflowerblue;
    max-width: 100vw;
    width: 890px;
`;
