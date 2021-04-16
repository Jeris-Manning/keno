import React from "react";
import styled from "styled-components";
import Square from "./Square";

const Board = ({ state, handleClick }) => {
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
                            state={state}
                            key={num}
                            num={num}
                            clicked={state.board[num].clicked}
                            drawn={state.board[num].drawn}
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
    max-width: 100vw;
    // width: 890px;
    width: 1000px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    // background: cornflowerblue;
    background: #886d57;
    // max-width: 100vw;
    // width: 890px;
`;
