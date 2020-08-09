const resetPicks = () => {
    let reset = {};

    for (let i = 1; i <= 80; i++) {
        let j = i.toString();
        reset[j] = { key: j, clicked: false, drawn: false };
    }
    return reset;
};

export default resetPicks;
