import React, { useReducer } from "react";
import styled from "styled-components";
import master from "./initializers/initial";
import gameReducer from "./reducers/gameReducer";
import PayTable from "./Components/PayTable";
import BoardControl from "./Components/BoardControl";
import Credit from "./Components/Credit";

function App() {
    const [game, dispatchGame] = useReducer(gameReducer, master[1]);

    return (
        <Display>
            <BoardControl game={game} dispatchGame={dispatchGame} />
            <PayTable picks={game.picks} />
            <Credit game={game} dispatchGame={dispatchGame} />
        </Display>
    );
}

export default App;

const Display = styled.div`
    display: flex;
    // flex-wrap: wrap;
    width: 100vw;
`;
