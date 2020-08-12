import React, { useReducer } from "react";
import styled from "styled-components";
import master from "./initializers/initial";
import boardReducer from "./reducers/boardReducer";
import gameReducer from "./reducers/gameReducer";
import PayTable from "./Components/PayTable";
import Board from "./Components/Board";

function App() {
    const [board, dispatchBoard] = useReducer(boardReducer, master[0]);
    const [game, dispatchGame] = useReducer(gameReducer, master[1]);

    return (
        <Display>
            <Board
                board={board}
                dispatchBoard={dispatchBoard}
                game={game}
                dispatchGame={dispatchGame}
            />

            <PayTable picks={game.picks} />
        </Display>
    );
}

export default App;

const Display = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
