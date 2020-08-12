import React from "react";
import styled from "styled-components";
import Frog from "../assets/frogpadsquare.jpg";
import Pad from "../assets/justpadsquare.jpg";

const Board = ({ board, handleClick, drawCheck }) => {
    return (
        <GameBoard>
            <Grid>
                {Object.keys(board).map((num) => (
                    <Square
                        key={num.key}
                        clicked={board[num]["clicked"]}
                        drawn={board[num]["drawn"]}
                        onClick={() => (drawCheck ? handleClick(num) : null)}>
                        {board[num]["clicked"] === true ? (
                            board[num]["drawn"] === true ? (
                                <img src={Frog} alt="frog" />
                            ) : (
                                <img src={Pad} alt="lily pad" />
                            )
                        ) : (
                            num
                        )}
                    </Square>
                ))}
            </Grid>
        </GameBoard>
    );
};

export default Board;

const GameBoard = styled.div`
    display: flex;
    flex-direction: column;
`;

const Grid = styled.div`
    max-width: 100vw;
    width: 890px;
    height: 710px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background: darkslategray;
    cursor: pointer;
`;

const Square = styled.div`
    width: 80px;
    height: 80px;
    margin: 2px;
    background: ${(props) => (props.drawn ? "green" : "steelblue")};
    // background: steelblue;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: ${(props) => (props.clicked ? "orange" : "white")};
`;
