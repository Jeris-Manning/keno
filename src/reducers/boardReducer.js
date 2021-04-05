// let temp = {};
// for (let i = 1; i <= 80; i++) {
//     temp[i] = { clicked: false, drawn: false };
// }

export const boardInit = {
    1: { clicked: false, drawn: false },
    2: { clicked: false, drawn: false },
    3: { clicked: false, drawn: false },
    4: { clicked: false, drawn: false },
    5: { clicked: false, drawn: false },
    6: { clicked: false, drawn: false },
    7: { clicked: false, drawn: false },
    8: { clicked: false, drawn: false },
    9: { clicked: false, drawn: false },
    10: { clicked: false, drawn: false },
    11: { clicked: false, drawn: false },
    12: { clicked: false, drawn: false },
    13: { clicked: false, drawn: false },
    14: { clicked: false, drawn: false },
    15: { clicked: false, drawn: false },
    16: { clicked: false, drawn: false },
    17: { clicked: false, drawn: false },
    18: { clicked: false, drawn: false },
    19: { clicked: false, drawn: false },
    20: { clicked: false, drawn: false },
    21: { clicked: false, drawn: false },
    22: { clicked: false, drawn: false },
    23: { clicked: false, drawn: false },
    24: { clicked: false, drawn: false },
    25: { clicked: false, drawn: false },
    26: { clicked: false, drawn: false },
    27: { clicked: false, drawn: false },
    28: { clicked: false, drawn: false },
    29: { clicked: false, drawn: false },
    30: { clicked: false, drawn: false },
    31: { clicked: false, drawn: false },
    32: { clicked: false, drawn: false },
    33: { clicked: false, drawn: false },
    34: { clicked: false, drawn: false },
    35: { clicked: false, drawn: false },
    36: { clicked: false, drawn: false },
    37: { clicked: false, drawn: false },
    38: { clicked: false, drawn: false },
    39: { clicked: false, drawn: false },
    40: { clicked: false, drawn: false },
    41: { clicked: false, drawn: false },
    42: { clicked: false, drawn: false },
    43: { clicked: false, drawn: false },
    44: { clicked: false, drawn: false },
    45: { clicked: false, drawn: false },
    46: { clicked: false, drawn: false },
    47: { clicked: false, drawn: false },
    48: { clicked: false, drawn: false },
    49: { clicked: false, drawn: false },
    50: { clicked: false, drawn: false },
    51: { clicked: false, drawn: false },
    52: { clicked: false, drawn: false },
    53: { clicked: false, drawn: false },
    54: { clicked: false, drawn: false },
    55: { clicked: false, drawn: false },
    56: { clicked: false, drawn: false },
    57: { clicked: false, drawn: false },
    58: { clicked: false, drawn: false },
    59: { clicked: false, drawn: false },
    60: { clicked: false, drawn: false },
    61: { clicked: false, drawn: false },
    62: { clicked: false, drawn: false },
    63: { clicked: false, drawn: false },
    64: { clicked: false, drawn: false },
    65: { clicked: false, drawn: false },
    66: { clicked: false, drawn: false },
    67: { clicked: false, drawn: false },
    68: { clicked: false, drawn: false },
    69: { clicked: false, drawn: false },
    70: { clicked: false, drawn: false },
    71: { clicked: false, drawn: false },
    72: { clicked: false, drawn: false },
    73: { clicked: false, drawn: false },
    74: { clicked: false, drawn: false },
    75: { clicked: false, drawn: false },
    76: { clicked: false, drawn: false },
    77: { clicked: false, drawn: false },
    78: { clicked: false, drawn: false },
    79: { clicked: false, drawn: false },
    80: { clicked: false, drawn: false },
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
