import React, { useReducer } from "react";
import styled from "styled-components";
import master from "./initializers/initial";
import boardReducer from "./reducers/boardReducer";
import gameReducer from "./reducers/gameReducer";
import DrawEngine from "./Components/DrawEngine";
import PayTable from "./Components/PayTable";

function App() {
    const [board, dispatchBoard] = useReducer(boardReducer, master[0]);
    const [game, dispatchGame] = useReducer(gameReducer, master[1]);

    const handleClick = (num) => {
        if (game.drawing === false) {
            resetDraws();
            if (board[num]["clicked"]) {
                dispatchGame({ type: "DECREASEPICKCOUNT" });
                dispatchBoard({ type: "DESELECT", num });
            } else if (board[num]["clicked"] === false && game.picks < 10) {
                dispatchGame({ type: "INCREASEPICKCOUNT" });
                dispatchBoard({ type: "SELECT", num });
            } else {
                console.log("Too much picks mr. greedy face");
            }
        }
    };

    const resetDraws = () => {
        Object.keys(board).forEach((num) => {
            dispatchBoard({ type: "DRAWRESET", num });
        });
    };

    const resetPicks = () => {
        if (game.drawing === false) {
            dispatchGame({ type: "RESETPICKCOUNT" });
            Object.keys(board).forEach((num) => {
                dispatchBoard({ type: "PICKRESET", num });
            });
        }
    };

    const handleDraws = () => {
        resetDraws();

        let draws = DrawEngine();
        let timer = 0;
        dispatchGame({ type: "STARTDRAWING" });
        draws.forEach((num) => {
            num = num.toString();
            setTimeout(() => dispatchBoard({ type: "DRAW", num }), timer);
            timer += 300;
        });
        setTimeout(() => dispatchGame({ type: "FINISHDRAWING" }), 6500);
    };

    return (
        <Display>
            <Board>
                <Grid>
                    {Object.keys(board).map((num) => (
                        <Square
                            key={num.key}
                            clicked={board[num]["clicked"]}
                            drawn={board[num]["drawn"]}
                            onClick={() => handleClick(num)}>
                            {num}
                        </Square>
                    ))}
                </Grid>
                <DrawBtn onClick={() => handleDraws()}>DRAW</DrawBtn>
                <ResetBtn onClick={() => resetPicks()}>Clear Picks</ResetBtn>
            </Board>
            <PayTable picks = {game.picks}/>
        </Display>
    );
}

export default App;

const Display = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Board = styled.div`
    display: flex;
    flex-direction: column;
`;

const Grid = styled.div`
max-width: 100vw;
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
