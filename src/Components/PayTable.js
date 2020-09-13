import React from "react";
import styled from "styled-components";
import pays from "../assets/pays";

const PayTable = ({ picks, credit, wager }) => {
    return (
        <>
            <Table>
                <h1>Numbers Picked: {picks}</h1>
                {picks > 1 ? (
                    <div>
                        {Object.keys(pays[picks]).map((hit) => (
                            <h2 key={`${picks}+${hit}`}>
                                {hit}: ${pays[picks][hit] * wager}
                            </h2>
                        ))}
                    </div>
                ) : (
                    <></>
                )}
            </Table>
            <h1>{"Credits: $" + credit * 0.25}</h1>
        </>
    );
};

export default PayTable;

const Table = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 500px;
    width: 300px;
    background: silver;
`;
