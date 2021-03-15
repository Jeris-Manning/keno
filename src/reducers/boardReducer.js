let temp = {};
for (let i = 1; i <= 80; i++) {
    temp[i] = { clicked: false, drawn: false };
}

export const boardInit = {
    ...temp,
};

const boardReducer = function (state, action) {
    switch (action.type) {
        case "SELECT":
            return {
                ...state,
                [action.num]: {
                    ...state[action.num],
                    clicked: true,
                },
            };
        case "DESELECT":
            return {
                ...state,
                [action.num]: {
                    ...state[action.num],
                    clicked: false,
                },
            };
        case "DRAW":
            return {
                ...state,
                [action.num]: {
                    ...state[action.num],
                    drawn: true,
                },
            };

        case "RESET_DRAWS":
            return {
                ...state,
                [action.num]: {
                    ...state[action.num],
                    drawn: false,
                },
            };
        case "RESET_PICKS":
            return boardInit;

        default:
            return state;
    }
};

export default boardReducer;
