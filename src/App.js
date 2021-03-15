import React, { useReducer } from "react";
import styled from "styled-components";
import boardReducer, { boardInit } from "./reducers/boardReducer";
import gameReducer, { gameInit } from "./reducers/gameReducer";
import PayTable from "./Components/PayTable";
import BoardControl from "./Components/BoardControl";
import Wager from "./Components/Wager";
import CashSlot from "./Components/CashSlot";

function App() {
    const [boardState, dispatchBoard] = useReducer(boardReducer, boardInit);
    const [gameState, dispatchGame] = useReducer(gameReducer, gameInit);

    return (
        <>
            <Display>
                <BoardControl
                    gameState={gameState}
                    dispatchGame={dispatchGame}
                    boardState={boardState}
                    dispatchBoard={dispatchBoard}
                />
                <section>
                    <PayTable
                        picks={gameState.picks}
                        credit={gameState.credit}
                        wager={gameState.wager}
                    />
                </section>
            </Display>
            <Wager gameState={gameState} dispatchGame={dispatchGame} />
            <CashSlot gameState={gameState} dispatchGame={dispatchGame} />
        </>
    );
}

export default App;

const Display = styled.div`
    display: flex;
    flex-direction: row;
    section {
        display: flex;
        flex-direction: column;
    }
`;
