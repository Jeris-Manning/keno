import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Board from "./Board";
import DrawEngine from "./DrawEngine";
import pays from "../assets/pays";

//
// USE USE EFFECT FOR IMMEDIATE STATE UPDATE
//
const BoardControl = ({
    gameState,
    dispatchGame,
    boardState,
    dispatchBoard,
}) => {
    // let drawCount = 0;
    // const [drawsReady, setDrawsReady] = useState(false);

    let draws = [];

    const resetPicks = () => {
        dispatchGame({ type: "RESET_PICK_COUNT" });
        dispatchBoard({ type: "RESET_PICKS" });
    };

    // function timeout(ms) {
    //     return new Promise((res) => setTimeout(res, ms));
    // }

    const handleDraws = () => {
        dispatchGame({ type: "START_DRAWING" });
        // setDrawsReady(true);
        resetDraws();

        draws = DrawEngine();
        let timer = 0;

        draws.forEach((num) => {
            setTimeout(() => {
                dispatchBoard({ type: "DRAW", num });
                if (boardState[num].clicked) {
                    dispatchGame({ type: "ADD_HIT" });
                }

                // console.log(drawCount, "DRAW COUNT");
            }, timer);
            timer += 300;
            // console.log(timer, "TIMER");
        });
        if (timer >= 6000) {
            settleDraw();
        }
    };
    // console.log(pays?.[gameState.picks]?.gameState.hits, "THE WIN");
    let payChart = pays[gameState.picks];

    // console.log(payChart, "PAY CHART");
    const settleDraw = () => {
        let win = payChart[gameState.hits];
        if (win > 0) {
            dispatchGame({ type: "SET_WIN", win });
            console.log(win, "WE WIN");
            dispatchGame({ type: "FINISH_DRAWING" });
        } else {
            dispatchGame({ type: "SET_WIN", win });
            console.log(`We only hit ${gameState.hits}. Maybe next time!`);
            dispatchGame({ type: "FINISH_DRAWING" });
        }
    };

    // useEffect(() => {
    //     // console.log(drawCount, drawsReady, "eFFECTS ZONE");
    //     if (drawCount === 20 && drawsReady) {
    //         console.log("USING EFFECT");
    //         settleDraw();
    //         setDrawsReady(false);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [drawCount, drawsReady]);

    const handleClick = (num) => {
      console.log(num, "NUM")
        // resetDraws();
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
            />
            <ButtonBox>
                <DrawBtn
                    // onClick={() => (gameState.drawing ? null : handleDraws())}
                    onClick={() => {
                        if (!gameState.drawing) {
                            handleDraws();
                        }
                    }}>
                    DRAW
                </DrawBtn>
                <ResetBtn
                    onClick={() => (gameState.drawing ? null : resetPicks())}>
                    Clear Picks
                </ResetBtn>
                <h2>{`You won ${gameState.win} credits`}</h2>
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
