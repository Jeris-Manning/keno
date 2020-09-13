import React, { useReducer } from "react";
import master from "../initializers/initial";
import boardReducer from "../reducers/boardReducer";
import styled from "styled-components";
import Board from "./Board";
import DrawEngine from "./DrawEngine";

const BoardControl = ({ game, dispatchGame }) => {
    const [board, dispatchBoard] = useReducer(boardReducer, master[0]);
    let drawCheck = !game.drawing;

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

    return (
        <div>
            <Board
                board={board}
                game={game}
                handleClick={handleClick}
                drawCheck={drawCheck}
            />
            <ButtonBox>
                <DrawBtn onClick={() => (drawCheck ? handleDraws() : null)}>
                    DRAW
                </DrawBtn>
                <ResetBtn onClick={() => (drawCheck ? resetPicks() : null)}>
                    Clear Picks
                </ResetBtn>


            </ButtonBox>
        </div>
    );
};

export default BoardControl;

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

const ButtonBox = styled.div`
    display: flex;
`;
