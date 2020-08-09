const DrawEngine = () => {
    let pool = [];
    let draws = [];

    for (let i = 0; i < 80; i++) {
        pool.push(i + 1);
    }
    for (let k = pool.length - 1; k > 0; k--) {
        const j = Math.floor(Math.random() * k);
        const temp = pool[k];
        pool[k] = pool[j];
        pool[j] = temp;
    }

    for (let d = 0; d < 20; d++) {
        let draw = pool.pop();
        draws.push(draw);
    }
    return draws;
};

export default DrawEngine;
