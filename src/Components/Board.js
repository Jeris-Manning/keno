import React from "react";
import styled from "styled-components";
import Square from "./Square";
import BottomSoil from ".././assets/soilBottom.png";
import SideSoil from ".././assets/soilSide.png";

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
    <ClampClamp>
      <BoardClamp>
        <GameBoard>
          {gridRows.map((row, idx) => (
            <Row key={idx} shift={idx + 1}>
              {row.map((num) => (
                <Square
                  key={num}
                  num={num}
                  clicked={state.board[num].clicked}
                  drawn={state.board[num].drawn}
                  worm={state.board[num].worm}
                  handleClick={handleClick}
                />
              ))}
            </Row>
          ))}
        </GameBoard>
        <BottomDirt />
        <SideDirt />
        <SideDirtSecond />
      </BoardClamp>
    </ClampClamp>
  );
};

export default Board;

const ClampClamp = styled.div`
  display: block;
  position: static;
  /* padding-left: -300px; */
  margin-right: 150px;
  margin-bottom: 40px;
`;

const BoardClamp = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1100px;
  height: 810px;
  left: 20px;
  /* margin-left: -50px; */
  /* padding-left: -300px; */
  border: solid 3px blue;
`;

const GameBoard = styled.div`
  position: absolute;
  left: -85px;
  top: -30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* max-width: 100vw; */
  /* transform: skew(-45deg); */
  /* transform:skew(-15deg) rotateX(40deg) ;
   */
  transform: rotateX(25deg) skew(-25deg);
  // width: 890px;
  /* width: 1000px; */
  /* margin: -30px 150px 0 182px; */
  margin: 0 0 0 225px;
  height: 820px;
  width: 880px;
  z-index: 33;
`;

const Row = styled.div`
  /* margin-right: ${(props) => props.shift * 36}px; */
  display: flex;
  justify-content: flex-end;
  // background: cornflowerblue;
  /* background: #886d57; */
  // max-width: 100vw;
  // width: 890px;
`;

const BottomDirt = styled.div`
  /* border: solid pink 3px; */
  position: absolute;
  bottom: 91px;
  left: 2px;
  width: 884px;
  height: 72px;
  background-image: url(${BottomSoil});
  background-repeat: repeat-x;
  background-size: contain;
  z-index: 25;
  /* display: none; */
`;

const SideDirt = styled.div`
  /* border: solid pink 3px; */
  position: absolute;
  /* bottom: -160px;
   */
  right: -147px;
  top: 9px;
  width: 205px;
  height: 395px;
  background-image: url(${SideSoil});
  background-repeat: no-repeat;
  background-size: contain;
  /* border: solid yellow 2px; */
  /* display: none; */
`;
const SideDirtSecond = styled.div`
  /* border: solid pink 3px; */
  position: absolute;
  /* bottom: -160px;
   */
  right: 21px;
  top: 271px;
  width: 195px;
  height: 449px;
  background-image: url(${SideSoil});
  background-repeat: no-repeat;
  background-size: contain;
  /* border: solid yellow 2px; */
  /* display: none; */
`;
