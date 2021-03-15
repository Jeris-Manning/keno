import React from "react";
import styled from "styled-components";
import Board from "./Board";
import DrawEngine from "./DrawEngine";

const BoardControl = ({ gameState, dispatchGame, boardState, dispatchBoard }) => {
    let drawCheck = !gameState.drawing;

    const resetPicks = () => {
        dispatchGame({ type: "RESET_PICK_COUNT" });
        dispatchBoard({ type: "RESET_PICKS" });
    };

    const handleDraws = () => {
        dispatchGame({ type: "START_DRAWING" });
        resetDraws();

        let draws = DrawEngine();
        let timer = 0;

        draws.forEach((num) => {
            setTimeout(() => {
                dispatchBoard({ type: "DRAW", num });
                if (boardState[num].clicked) {
                    dispatchGame({ type: "ADD_HIT" });
                }
            }, timer);
            timer += 300;
        });
        setTimeout(() => dispatchGame({ type: "FINISH_DRAWING" }), 6500);
    };

    const handleClick = (num) => {
        resetDraws();
        if (boardState[num].clicked) {
            dispatchGame({ type: "DECREASE_PICK_COUNT" });
            dispatchBoard({ type: "DESELECT", num });
        } else if (boardState[num].clicked === false && gameState.picks < 10) {
            dispatchGame({ type: "INCREASE_PICK_COUNT" });
            dispatchBoard({ type: "SELECT", num });
        } else {
            return null;
        }
    };

    const resetDraws = () => {
        Object.keys(boardState).forEach((num) => {
            dispatchBoard({ type: "RESET_DRAWS", num });
        });
        dispatchGame({ type: "RESET_HITS" });
    };

    return (
        <div>
            <Board
                boardState={boardState}
                gameState={gameState}
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
