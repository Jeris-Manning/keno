import React from "react";
import styled from "styled-components";

const CashSlot = ({ dispatch }) => {
    const addCredit = (credits) => {
        dispatch({ type: "ADD_CREDIT", credits });
    };

    const denoms = [5, 10, 20];

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
