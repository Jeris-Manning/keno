import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Board from "./Board";
import DrawEngine from "./DrawEngine";
import pays from "../assets/pays";

//
// USE USE EFFECT FOR IMMEDIATE STATE UPDATE
//
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
        // dispatch({ type: "RESET_HITS" });
        hits = 0;
    }

    //PROBLEM SEEMS TO BE IN THIS DARN TIMER FUNK

    function handleDraws() {
        payChart = pays[state.picks];
        dispatch({ type: "START_DRAWING" });
        resetDraws();

        draws = DrawEngine();
        let timer = 500;

        draws.forEach((num) => {
            setTimeout(() => {
                dispatch({ type: "DRAW", num });
                if (state.board[num].clicked) {
                    // dispatch({ type: "ADD_HIT" });
                    hits++;
                }
                timer += 500;
            }, timer);
        });
        if (timer >= 6000) {
            settleDraw();
        }
        console.log(timer, "CURReNT tIME");
    }

    function settleDraw() {
        console.log(hits, "NUMBER OF HITS?");
        let win = payChart[hits];
        if (win > 0) {
            dispatch({ type: "SET_WIN", win });
            console.log(win, "WE WIN");
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
        <div>
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
                <h2>{`You won ${state.win} credits`}</h2>
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
