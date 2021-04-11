import React, { useReducer } from "react";
import styled from "styled-components";
import reducer, { init } from "./Utilities/reducer";
import PayTable from "./Components/PayTable";
import PlayerCredits from "./Components/PlayerCredits";
import BoardControl from "./Components/BoardControl";
import Wager from "./Components/Wager";
import CashSlot from "./Components/CashSlot";

function App() {
    const [state, dispatch] = useReducer(reducer, init);

    return (
        <AppDiv>
            <div>
                <Display>
                    <BoardControl state={state} dispatch={dispatch} />
                    <section>
                        <PayTable state={state} />
                        <PlayerCredits className="credit" state={state} />
                        <CashSlot className="credit" dispatch={dispatch} />
                    </section>
                </Display>
                <Wager state={state} dispatch={dispatch} />
            </div>
        </AppDiv>
    );
}

export default App;

const AppDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Display = styled.div`
    display: flex;
    flex-direction: row;
    // section {
    //     display: flex;
    //     flex-direction: column;
    //     .credit {
    //         margin-left: 50px;
    //     }
    }
`;
