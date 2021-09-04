import React from "react";
import styled from "styled-components";
// import Ant from "../assets/anthillsquare.jpg";
// import Hill from "../assets/justhillsquare.jpg";
import Ant from "../assets/tallAntTile.png";
import Hill from "../assets/tallHillTile.png";
import Grass from "../assets/moss_tile_greener.jpg";
import Hole from "../assets/wormHole.png";
import Worm from "../assets/tallWorm.png";

const Square = ({ drawn, clicked, num, handleClick, worm }) => {
  let art;

  if (clicked) {
    if (drawn) {
      art = <img num={num + "ant"} src={Ant} alt="ant" />;
    } else {
      art = <img num={num + "hill"} src={Hill} alt="ant hill" />;
    }
  } else if (worm) {
    if (drawn) {
      art = <img className="wormClass" num={num + "worm"} src={Worm} alt="Worm" />;
    } else {
      art = <img className="wormClass" num={num + "hole"} src={Hole} alt="hole" />;
    }
  } else art = num;

  return (
    <SquareDiv drawn={drawn} onClick={() => handleClick(num)}>
      {art}
    </SquareDiv>
  );
};

export default Square;

const SquareDiv = styled.div`
  width: 89px;
  height: 89px;
  margin: 0 -1px -1px 0;
  font-family: "Lobster", cursive;
  // background: ${(props) => (props.drawn ? "cornflowerblue" : "#2f4b24")};
  background-image: url(${Grass});

  // border-radius: 7px;
  display: flex;
  /* transform: skew(-20deg); */
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  // color: #d5c5ad;
  // color: #efe20f;
  // color: rgba(225, 212, 197, 0.95);
  color: ${(props) => (props.drawn ? "#6172bd" : "orange")};
  text-shadow: 2px 2px 1px black;

  img {
    align-self: flex-end;
    padding: 0 25px 20px 0;
    /* height: 150px; */
    width: 85px;
    transform: skew(20deg) /* rotateX(-50deg) */;
  }

  .wormClass {
    width: 50px;
  }
`;
