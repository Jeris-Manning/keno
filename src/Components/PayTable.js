import React from "react";
import styled from "styled-components";
import { toCashString } from "../Utilities/cashConvert";
import pays from "../assets/pays";

const PayTable = ({ state }) => {
  return (
    <Table>
      <h1>Numbers Picked: {state.picks}</h1>
      {state.picks > 1 ? (
        <div>
          {Object.keys(pays[state.picks]).map((hit) => {
            return (
              pays[state.picks][hit] > 0 && (
                <h2 key={`${state.picks}+${hit}`}>
                  {`${hit}: ${toCashString(
                    pays[state.picks][hit] * state.wager * 0.25
                  )}`}
                </h2>
              )
            );
          })}
          <h2>{`Worms: ${state.worms}`}</h2>
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
