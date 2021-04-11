import React from "react";
import { toCashString } from "../Utilities/cashConvert";

const PlayerCredits = ({ state }) => {
    return (
        <div>
            <h1>{"Credits: " + toCashString(state.credit * 0.25)}</h1>
        </div>
    );
};

export default PlayerCredits;
