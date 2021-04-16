import React from "react";
import styled from "styled-components";
// import Ant from "../assets/anthillsquare.jpg";
// import Hill from "../assets/justhillsquare.jpg";
import Ant from "../assets/antOutTile.png";
import Hill from "../assets/antHillTile.png";
import Grass from "../assets/grassTile2.jpg";
import Worm from "../assets/wormhole3.jpg";

const Square = ({ drawn, clicked, num, state, handleClick }) => {
    let art;

    if (clicked) {
        if (drawn) {
            art = <img num={num + "ant"} src={Ant} alt="ant" />;
        } else {
            art = <img num={num + "hill"} src={Hill} alt="ant hill" />;
        }
    } else {
        if (drawn) {
            art = <img num={num + "worm"} src={Worm} alt="Worm" />;
        } else {
            art = num;
        }
    }

    return (
        <SquareDiv drawn={drawn} onClick={() => handleClick(num)}>
            {art}
        </SquareDiv>
    );
};

export default Square;

const SquareDiv = styled.div`
    width: 100px;
    height: 100px;
    margin: 0;
    font-family: "Lobster", cursive;
    // background: ${(props) => (props.drawn ? "cornflowerblue" : "#2f4b24")};
    background-image: url(${Grass});

    // border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    // color: #d5c5ad;
    // color: #efe20f;
    // color: rgba(225, 212, 197, 0.95);
    color: orange;
    text-shadow: 1px 1px black;
    // box-shadow: ${(props) =>
        props.drawn ? "none" : "-4px 4px 5px -3px black"};
    // img {
    //     border-radius: 7px;
    // }
`;
