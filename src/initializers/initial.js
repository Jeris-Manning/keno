let master = []
let game = {};
let tracker = {};

for (let i = 1; i <= 80; i++) {
  let j = i.toString()
    game[j] = { key: j, clicked: false, drawn: false };
}

tracker.picks = 0;

master[0] = {...game}
master[1] = {...tracker}


export default master


