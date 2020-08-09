import React, { useReducer, useState } from "react";
import styled from "styled-components";
import master from "./initializers/initial";
import gameReducer from "./reducers/gameReducer";
import DrawEngine from "./Components/DrawEngine";

function App() {
    const [state, dispatch] = useReducer(gameReducer, master[0]);
    const [pickCount, setPickCount] = useState(0);

    // const handleClick = (num) => {
    //     state[num]["clicked"]
    //         ? dispatch({ type: "DESELECT", num })
    //         : pickCount < 10
    //         ? dispatch({ type: "SELECT", num})
    //         : console.log("pick error");
    // };
    const handleClick = (num) => {
        resetDraws();
        if (state[num]["clicked"]) {
            setPickCount(pickCount - 1);
            dispatch({ type: "DESELECT", num });
        } else if (state[num]["clicked"] == false && pickCount < 10) {
            setPickCount(pickCount + 1);
            dispatch({ type: "SELECT", num });
        } else {
            console.log("Too much picks mr. greedy face");
        }
    };

    const resetDraws = () => {
        Object.keys(state).forEach((num) => {
            dispatch({ type: "DRAWRESET", num });
        });
    };

    const resetPicks = () => {
        Object.keys(state).forEach((num) => {
            setPickCount(0);
            dispatch({ type: "PICKRESET", num });
        });
    };

    const handleDraws = () => {
        resetDraws();

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
            <ResetBtn onClick={() => resetPicks()}>Clear Picks</ResetBtn>
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
