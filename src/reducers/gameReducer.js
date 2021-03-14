const gameReducer = function (state, action) {
    switch (action.type) {
        case "INCREASEPICKCOUNT":
            return {
                ...state,
                picks: state.picks + 1,
            };
        case "DECREASEPICKCOUNT":
            return {
                ...state,
                picks: state.picks - 1,
            };
        case "RESETPICKCOUNT":
            return {
                ...state,
                picks: 0,
            };
        case "STARTDRAWING":
            return {
                ...state,
                credit: state.credit - state.wager,
                drawing: true,
            };
        case "ADD_HIT":
            return {
                ...state,
                hits: state.hits + 1,
            };

        case "RESET_HITS":
            return {
                ...state,
                hits: 0,
            };

        case "FINISHDRAWING":
            return {
                ...state,
                drawing: false,
            };
        case "ADDCREDIT":
            console.log(action, "ACTION");
            return {
                ...state,
                credit: state.credit + action.credits,
            };
        case "WAGERUP":
            if (state.wager < 10) {
                return {
                    ...state,
                    wager: state.wager + 1,
                };
            } else {
                return { ...state };
            }
        case "WAGERDOWN":
            if (state.wager > 1) {
                return {
                    ...state,
                    wager: state.wager - 1,
                };
            } else {
                return { ...state };
            }
        default:
            return state;
    }
};

export default gameReducer;
