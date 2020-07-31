import React from "react";

const board = () => {
    const squares = [];
    for (let i = 0; i < 80; i++) {
        squares[i] = i + 1;
    }

    return (
        <div>
            {squares.map((num) => (
                <div>{num}</div>
            ))}
        </div>
    );
};

export default board;
