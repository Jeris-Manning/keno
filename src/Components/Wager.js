import React from "react";

const Wager = ({ state, dispatch}) => {
    return (
        <>
            <h1>{"Bet: " + state.wager + " Credits"}</h1>
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
