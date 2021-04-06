import React, { useReducer } from "react";
import styled from "styled-components";
import reducer, { init } from "./reducer";
import PayTable from "./Components/PayTable";
import BoardControl from "./Components/BoardControl";
import Wager from "./Components/Wager";
import CashSlot from "./Components/CashSlot";

function App() {
    const [state, dispatch] = useReducer(reducer, init);

    return (
        <>
            <Display>
                <BoardControl state={state} dispatch={dispatch} />
                <section>
                    <PayTable
                        picks={state.picks}
                        credit={state.credit}
                        wager={state.wager}
                    />
                </section>
            </Display>
            <Wager state={state} dispatch={dispatch} />
            <CashSlot dispatch={dispatch} />
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
