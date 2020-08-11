const boardReducer = function (state, action) {
    switch (action.type) {
        case "SELECT":
            return {
                ...state,
                [action.num]: {
                    key: action.num,
                    clicked: true,
                    drawn: state[action.num]["drawn"],
                },
            };
        case "DESELECT":
            return {
                ...state,
                [action.num]: {
                    key: action.num,
                    clicked: false,
                    drawn: state[action.num]["drawn"],
                },
            };
        case "DRAW":
            return {
                ...state,
                [action.num]: {
                    key: action.num,
                    clicked: state[action.num]["clicked"],
                    drawn: true,
                },
            };
        case "DRAWRESET":
            return {
                ...state,
                [action.num]: {
                    key: action.num,
                    clicked: state[action.num]["clicked"],
                    drawn: false,
                },
            };
        case "PICKRESET":
            return {
                ...state,
                [action.num]: {
                    key: action.num,
                    clicked: false,
                    drawn: false,
                },
            };
        default:
            return state;
    }
};

export default boardReducer;
