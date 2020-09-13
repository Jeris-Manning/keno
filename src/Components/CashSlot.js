import React from "react";
import styled from "styled-components";

const CashSlot = ({ game, dispatchGame }) => {
    const addCredit = (credits) => {
        dispatchGame({ type: "ADDCREDIT", credits });
    };

    const denoms = [];

    for (let i = 5; i <= 20; i *= 2) {
        denoms.push(i);
    }
    return (
        <div>
            <h2>Insert</h2>
            <Bills>
                {denoms.map((bill) => (
                    <BillBtn key={bill} onClick={() => addCredit(bill * 4)}>
                        {"$" + bill}
                    </BillBtn>
                ))}
            </Bills>
        </div>
    );
};

export default CashSlot;

const Bills = styled.div``;

const BillBtn = styled.button``;
