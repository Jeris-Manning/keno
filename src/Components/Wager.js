import React from "react";
import { toCashString } from "../Utilities/cashConvert";

const Wager = ({ state, dispatch }) => {
    return (
        <>
            <h1>{"Bet: " + toCashString(state.wager * 0.25)}</h1>
            <button onClick={() => dispatch({ type: "WAGER_UP" })}>
                Bet Up
            </button>
            <button onClick={() => dispatch({ type: "WAGER_DOWN" })}>
                Bet Down
            </button>
        </>
    );
};

export default Wager;
