import React from "react";
import styled from "styled-components";
import Board from "./Board";
import DrawEngine from "./DrawEngine";
import { toCashString } from "../Utilities/cashConvert";
import pays from "../assets/pays";

const BoardControl = ({ state, dispatch }) => {
  let draws = [];
  let worms = 0;
  let hits = 0;
  let payChart = {};
  let wormMult = [1, 1, 2, 5, 10];

  function resetPicks() {
    dispatch({ type: "RESET_PICK_COUNT" });
    dispatch({ type: "RESET_PICKS" });
  }

  function getWorms() {
    let wormPool = DrawEngine();
    let wormCount = 0;
    let chosenOnes = [];

    while (wormCount < 4) {
      let worm = wormPool.pop();
      if (state.board[worm].clicked) {
        worm = null;
      } else {
        chosenOnes.push(worm);
        dispatch({ type: "WORM_HOLE", worm });
        wormCount++;
      }
    }

    return chosenOnes;
  }

  function resetDraws() {
    Object.keys(state.board).forEach((num) => {
      dispatch({ type: "RESET_DRAWS", num });
    });
    hits = 0;
    worms = 0;
  }

  function handleDrawButtonClick() {
    if (state.picks < 2) {
      return;
    }
    if (state.credit < 1) {
      window.alert("Please Insert Cash to Play");
    } else if (state.wager > state.credit) {
      window.alert("Please Lower Wager or Insert Cash to Play");
      dispatch({ type: "BET_THE_REST" });
    } else {
      payChart = pays[state.picks];
      dispatch({ type: "START_DRAWING" });
      dispatch({ type: "RESET_WIN" });
      resetDraws();
      let oracle = getWorms();
      console.log(oracle, "THE ORACLE");
      draws = DrawEngine();

      let clearDraw = setInterval(drawNumbers, 150);
      let drawCount = 0;

      function drawNumbers() {
        if (drawCount < 20) {
          let pick = draws[drawCount];

          console.log(pick, "NUMBER PICKED");
          console.log(state.board[pick], "NUMBER ATTRIBUTES");

          dispatch({ type: "DRAW", pick });
          if (state.board[pick].clicked) {
            hits++;
            // } else if (state.board[pick].worm) {
          } else if (oracle.some((wiggler) => wiggler === pick)) {
            console.log(pick, "WORM PICK");
            worms++;
            console.log("WORM COUNT", worms);
            dispatch({ type: "SET_WORMS", worms });
          }
          drawCount++;
        } else {
          clearInterval(clearDraw);
          settleDraw();
        }
      }
    }
  }

  function settleDraw() {
    console.log(hits, "NUMBER OF HITS?");
    let win = payChart[hits] * state.wager * wormMult[worms];
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
    if (state.drawing) {
      return;
    }
    if (draws !== []) {
      resetDraws();
    }

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
              handleDrawButtonClick();
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
  /* border: solid purple 2px; */
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
  top: 10px;
  left: 10px;
  z-index: 222;
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
