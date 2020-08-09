let game = {};

for (let i = 1; i <= 80; i++) {
  let j = i.toString()
    game[j] = { key: j, clicked: false, drawn: false };
}


export default game


