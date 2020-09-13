import React from "react";

const Wager = ({ game, dispatchGame }) => {
    return (
        <>
            <h1>{"Bet: " + game.wager + " Credits"}</h1>
            <button onClick={() => dispatchGame({ type: "WAGERUP" })}>
                Bet Up
            </button>
            <button onClick={() => dispatchGame({ type: "WAGERDOWN" })}>
                Bet Down
            </button>
        </>
    );
};

export default Wager;
