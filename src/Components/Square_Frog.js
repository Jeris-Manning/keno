import React from "react";
import styled from "styled-components";
import Frog from "../assets/frogpadsquare.jpg";
import Pad from "../assets/justpadsquare.jpg";
import Ant from "../assets/antOutTile.jpg";
import Hill from "../assets/noAntTile.jpg";

const Square = ({ drawn, clicked, num, state, handleClick }) => {
    let art;

    if (clicked) {
        if (drawn) {
            art = <img num={num + "frog"} src={Frog} alt="frog" />;
        } else {
            art = <img num={num + "pad"} src={Pad} alt="lily pad" />;
        }
    } else {
        art = num;
    }

    return (
        <SquareDiv
            drawn={drawn}
            onClick={() => (state.drawing ? null : handleClick(num))}>
            {art}
        </SquareDiv>
    );
};

export default Square;

const SquareDiv = styled.div`
    width: 80px;
    height: 80px;
    margin: 2px;
    font-family: "Chewy", cursive;
    background: ${(props) => (props.drawn ? "cornflowerblue" : "#2f4b24")};
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: #d5c5ad;
    box-shadow: ${(props) =>
        props.drawn ? "none" : "-4px 4px 5px -3px black"};
    img {
        border-radius: 7px;
    }
`;
