import React from "react";
import styled from "styled-components";

const Credit = ({ game, dispatchGame }) => {
    const addCredit = (credits) => {
        dispatchGame({ type: "ADDCREDIT", credits });
    };

    const denoms = [];

    for (let i = 5; i <= 20; i *= 2) {
        denoms.push(i);
    }

    return (
        <CreditArea>
            <h1>{"Credits: $" + game.credit * 0.25}</h1>
            <h2>Insert</h2>
            <Bills>
                {denoms.map((bill) => (
                    <BillBtn key={bill} onClick={() => addCredit(bill * 4)}>
                        {"$" + bill}
                    </BillBtn>
                ))}
            </Bills>
        </CreditArea>
    );
};

export default Credit;

const CreditArea = styled.div``;

const Bills = styled.div``;

const BillBtn = styled.button``;

{
    /* <BillBtn value={5} onClick={() => addCredit(value)}>
                    {"$" + 5}
                </BillBtn>
                <BillBtn value={10}>{"$" + 10}</BillBtn>
                <BillBtn value={20}>{"$" + 20}</BillBtn> */
}
