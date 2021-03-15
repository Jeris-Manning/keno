import React from "react";

const Wager = ({ gameState, dispatchGame }) => {
    return (
        <>
            <h1>{"Bet: " + gameState?.wager + " Credits"}</h1>
            <button onClick={() => dispatchGame({ type: "WAGER_UP" })}>
                Bet Up
            </button>
            <button onClick={() => dispatchGame({ type: "WAGER_DOWN" })}>
                Bet Down
            </button>
        </>
    );
};

export default Wager;
