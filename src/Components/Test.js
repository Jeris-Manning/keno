import React from "react";
import styled from "styled-components";

const Test = () => {
    let moose = [];
    var k = 0;
    for (let i = 0; i < 8; i++) {
        moose[i] = [];
        for (let j = 0; j < 10; j++) {
            moose[i].push(j + 1 + k);
        }
        k += 10;
    }
    console.log(moose, "MOOSE");
    return (
        <Dragon>
            {moose.map((row, idx) => (
                <Eagle>
                    {row.map((square, idx) => (
                        <Horse>{square}</Horse>
                    ))}
                </Eagle>
            ))}
        </Dragon>
    );
};

export default Test;

const Eagle = styled.div`
    display: flex;

`;

const Horse = styled.div`
    width: 50px;
    height: 50px;
    background: blue;
    color: white;
`;

const Dragon = styled.div`
  display: flex;
  flex-direction: column;
`