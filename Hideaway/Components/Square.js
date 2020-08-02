import React from "react";
import styled from "styled-components";

const Square = (props) => {

    return (
        <GameSquare onClick={(e) => props.handleClick(e)}>
            {props.val}
        </GameSquare>
    );
};

export default Square;

const GameSquare = styled.div`
    width: 80px;
    height: 80px;
    margin: 2px;
    background: steelblue;

    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
`;
