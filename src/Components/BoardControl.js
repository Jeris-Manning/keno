import React from "react";
import styled from "styled-components";
import Board from "./Board";
import DrawEngine from "./DrawEngine";
import { toCashString } from "../Utilities/cashConvert";
import pays from "../assets/pays";

const BoardControl = ({ state, dispatch }) => {
    let draws = [];
    let hits = 0;
    let payChart = {};

    function resetPicks() {
        dispatch({ type: "RESET_PICK_COUNT" });
        dispatch({ type: "RESET_PICKS" });
    }

    function resetDraws() {
        Object.keys(state.board).forEach((num) => {
            dispatch({ type: "RESET_DRAWS", num });
        });
        hits = 0;
    }

    function handleDraws() {
        payChart = pays[state.picks];
        dispatch({ type: "START_DRAWING" });
        dispatch({ type: "RESET_WIN" });
        resetDraws();

        draws = DrawEngine();

        let clearDraw = setInterval(drawNumbers, 100);
        let drawCount = 0;

        function drawNumbers() {
            if (drawCount < 20) {
                let pick = draws[drawCount];
                dispatch({ type: "DRAW", pick });
                if (state.board[pick].clicked) {
                    hits++;
                }
                drawCount++;
            } else {
                clearInterval(clearDraw);
                settleDraw();
            }
        }
    }

    function settleDraw() {
        console.log(hits, "NUMBER OF HITS?");
        let win = payChart[hits] * state.wager;
        if (win > 0) {
            dispatch({ type: "SET_WIN", win });

            dispatch({ type: "FINISH_DRAWING" });
        } else {
            dispatch({ type: "SET_WIN", win });
            console.log(`We only hit ${hits}. Maybe next time!`);
            dispatch({ type: "FINISH_DRAWING" });
        }
    }

    function handleClick(num) {
        if (state.board[num].clicked) {
            dispatch({ type: "DECREASE_PICK_COUNT" });
            dispatch({ type: "DESELECT", num });
        } else if (state.board[num].clicked === false && state.picks < 10) {
            dispatch({ type: "INCREASE_PICK_COUNT" });
            dispatch({ type: "SELECT", num });
        } else {
            return null;
        }
    }

    return (
        <BoardDiv>
            <WinPopper className={state.win > 0 ? "coolGuyClass" : "secret"}>
                <h1>YOU WIN!</h1>
                <h2>{toCashString(state.win * 0.25)}</h2>
            </WinPopper>
            <Board state={state} handleClick={handleClick} />
            <ButtonBox>
                <DrawBtn
                    onClick={() => {
                        if (!state.drawing) {
                            handleDraws();
                        }
                    }}>
                    DRAW
                </DrawBtn>
                <ResetBtn onClick={() => (state.drawing ? null : resetPicks())}>
                    Clear Picks
                </ResetBtn>
            </ButtonBox>
        </BoardDiv>
    );
};

export default BoardControl;

const BoardDiv = styled.div`
    .secret {
        display: none;
    }
`;

const WinPopper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 400px;
    height: 250px;
    background: yellow;
    top: 220px;
    left: 250px;
    h1 {
        font-size: 4rem;
        margin: 0;
    }
    h2 {
        font-size: 3.8rem;
        margin: 0;
    }
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

const ButtonBox = styled.div`
    display: flex;
`;
