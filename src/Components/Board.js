import React from "react";
import styled from "styled-components";
import Frog from "../assets/frogpadsquare.jpg";
import Pad from "../assets/justpadsquare.jpg";

const Board = ({ boardState, handleClick, drawCheck }) => {
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
                            key={num}
                            clicked={boardState?.[num]?.clicked}
                            drawn={boardState?.[num]?.drawn}
                            onClick={() =>
                                drawCheck ? handleClick(num) : null
                            }>
                            {boardState[num].clicked === true ? (
                                boardState[num].drawn === true ? (
                                    <img
                                        key={num + "frog"}
                                        src={Frog}
                                        alt="frog"
                                    />
                                ) : (
                                    <img
                                        key={num + "pad"}
                                        src={Pad}
                                        alt="lily pad"
                                    />
                                )
                            ) : (
                                num
                            )}
                        </Square>
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

const Square = styled.div`
    width: 80px;
    height: 80px;
    margin: 2px;
    font-family: "Chewy", cursive;
    background: ${(props) => (props.drawn ? "cornflowerblue" : "#2f4b24")};
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: #d5c5ad;
    box-shadow: ${(props) =>
        props.drawn ? "none" : "-4px 4px 5px -3px black"};
    img {
        border-radius: 7px;
    }
`;
