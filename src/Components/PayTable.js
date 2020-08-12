import React from "react";
import styled from "styled-components";
import pays from "../assets/pays";

const PayTable = ({ picks }) => {
    console.log(pays[picks]);
    return (
        <Table>
            <h1>Numbers Picked: {picks}</h1>
            {picks > 1 ? (
                <div>
                    {Object.keys(pays[picks]).map((hit) => (
                        <h2>
                            {hit}: ${pays[picks][hit]}
                        </h2>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </Table>
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
