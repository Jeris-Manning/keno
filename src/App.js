import React, { useReducer } from "react";
import styled from "styled-components";
import master from "./initializers/initial";
import gameReducer from "./reducers/gameReducer";
import PayTable from "./Components/PayTable";
import BoardControl from "./Components/BoardControl";
import Wager from "./Components/Wager";
import CashSlot from "./Components/CashSlot";

function App() {
    const [game, dispatchGame] = useReducer(gameReducer, master[1]);

    return (
        <>
            <Display>
                <BoardControl game={game} dispatchGame={dispatchGame} />
                <section>
                    <PayTable
                        picks={game.picks}
                        credit={game.credit}
                        wager={game.wager}
                    />
                </section>
            </Display>
            <Wager game={game} dispatchGame={dispatchGame} />
            <CashSlot game={game} dispatchGame={dispatchGame} />
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
