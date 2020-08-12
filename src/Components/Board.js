import React from "react";
import styled from "styled-components";
import DrawEngine from "./DrawEngine";
import Frog from "../assets/frogpadsquare.jpg";
import Pad from "../assets/justpadsquare.jpg";

const Board = ({ board, game, dispatchBoard, dispatchGame }) => {
    let drawCheck = !game.drawing;

    const handleClick = (num) => {
        resetDraws();
        if (board[num]["clicked"]) {
            dispatchGame({ type: "DECREASEPICKCOUNT" });
            dispatchBoard({ type: "DESELECT", num });
        } else if (board[num]["clicked"] === false && game.picks < 10) {
            dispatchGame({ type: "INCREASEPICKCOUNT" });
            dispatchBoard({ type: "SELECT", num });
        } else {
            return null;
        }
    };

    const resetDraws = () => {
        Object.keys(board).forEach((num) => {
            dispatchBoard({ type: "DRAWRESET", num });
        });
    };

    const resetPicks = () => {
        dispatchGame({ type: "RESETPICKCOUNT" });
        Object.keys(board).forEach((num) => {
            dispatchBoard({ type: "PICKRESET", num });
        });
    };

    const handleDraws = () => {
        dispatchGame({ type: "STARTDRAWING" });
        resetDraws();

        let draws = DrawEngine();
        let timer = 0;

        draws.forEach((num) => {
            num = num.toString();
            setTimeout(() => dispatchBoard({ type: "DRAW", num }), timer);
            timer += 300;
        });
        setTimeout(() => dispatchGame({ type: "FINISHDRAWING" }), 6500);
    };

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
            <DrawBtn onClick={() => (drawCheck ? handleDraws() : null)}>
                DRAW
            </DrawBtn>
            <ResetBtn onClick={() => (drawCheck ? resetPicks() : null)}>
                Clear Picks
            </ResetBtn>
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

const DrawBtn = styled.button`
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: "red";
`;

const ResetBtn = styled.button`
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: "red";
`;
