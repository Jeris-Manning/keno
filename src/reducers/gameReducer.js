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
                drawing: true,
            };
        case "FINISHDRAWING":
            return {
                ...state,
                drawing: false,
            };
        case "ADDCREDIT":
          console.log(action, "ACTION")
            return {
                ...state,
                credit: (state.credit + action.credits),
            };
        default:
            return state;
    }
};

export default gameReducer;
