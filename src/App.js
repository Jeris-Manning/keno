import React, { useReducer } from "react";
import styled from "styled-components";
import game from "./initializers/initial";
import gameReducer from "./reducers/gameReducer";
import DrawEngine from "./Components/DrawEngine";

function App() {
    const [state, dispatch] = useReducer(gameReducer, game);

    const handleClick = (num) => {
        state[num]["clicked"]
            ? dispatch({ type: "DESELECT", num })
            : dispatch({ type: "SELECT", num });
    };

    const handleDraws = () => {
        Object.keys(state).forEach((num) => {
            dispatch({ type: "DRAWRESET", num });
        });

        let draws = DrawEngine();
        let timer = 0;

        draws.forEach((num) => {
            num = num.toString();
            setTimeout(() => dispatch({ type: "DRAW", num }), timer);
            timer += 300;
        });
    };

    return (
        <>
            <Grid>
                {Object.keys(state).map((num) => (
                    <Square
                        key={num.key}
                        clicked={state[num]["clicked"]}
                        drawn={state[num]["drawn"]}
                        onClick={() => handleClick(num)}>
                        {num}
                    </Square>
                ))}
            </Grid>
            <DrawBtn onClick={() => handleDraws()}>DRAW</DrawBtn>
        </>
    );
}

export default App;

const Grid = styled.div`
    width: 890px;
    height: 710px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background: darkslategray;
    cursor: pointer;
`;

const Square = styled.div`
    width: 80px;
    height: 80px;
    margin: 2px;
    background: ${(props) => (props.drawn ? "black" : "steelblue")};
    // background: steelblue;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: ${(props) => (props.clicked ? "orange" : "white")};
`;

const DrawBtn = styled.button`
    width: 150px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: "red";
`;
