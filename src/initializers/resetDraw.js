

const resetDraw = (state) => {
  let reset = {};
console.log(state, "PASSED STATE")
  for (let i = 1; i <= 80; i++) {
    let j = i.toString()
      reset[j] = { key: j, clicked: state[j]["clicked"], drawn: false };
  }
  return reset

}

export default resetDraw