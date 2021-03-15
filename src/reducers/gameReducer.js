export const gameInit = {
    picks: 0,
    drawing: false,
    credit: 0,
    wager: 1,
    hits: 0,
};

const gameReducer = function (state, action) {
    switch (action.type) {
        case "INCREASE_PICK_COUNT":
            return {
                ...state,
                picks: state.picks + 1,
            };
        case "DECREASE_PICK_COUNT":
            return {
                ...state,
                picks: state.picks - 1,
            };
        case "RESET_PICK_COUNT":
            return {
                ...state,
                picks: 0,
            };
        case "START_DRAWING":
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

        case "FINISH_DRAWING":
            return {
                ...state,
                drawing: false,
            };
        case "ADD_CREDIT":
            console.log(action, "ACTION");
            return {
                ...state,
                credit: state.credit + action.credits,
            };
        case "WAGER_UP":
            if (state.wager < 10) {
                return {
                    ...state,
                    wager: state.wager + 1,
                };
            } else {
                return { ...state };
            }
        case "WAGER_DOWN":
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
