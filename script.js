const circles = document.querySelectorAll(".circle");

setInterval(() => {
  circles.forEach(circle => {
    circle.classList.toggle("on");
  });
}, 750);

const digits = new Map();
for (let i = 1; i <= 4; i++) {
  const digit = document.querySelectorAll(`.digit-${i} .stroke`);
  const strokes = new Map();
  digit.forEach((stroke, idx) => {
    strokes.set(idx, stroke);
  });
  digits.set(i - 1, strokes);
}

const strokeOn = new Map([
  [0, [true, true, true, true, false, true, true]],
  [1, [false, false, false, false, false, true, true]],
  [2, [false, true, true, true, true, true, false]],
  [3, [false, true, false, true, true, true, true]],
  [4, [true, false, false, false, true, true, true]],
  [5, [true, true, false, true, true, false, true]],
  [6, [true, true, true, true, true, false, true]],
  [7, [false, true, false, false, false, true, true]],
  [8, [true, true, true, true, true, true, true]],
  [9, [true, true, false, true, true, true, true]],
]);

setInterval(() => {
  const time = new Date();
  const hour = time.getHours().toString();
  const minute = time.getMinutes().toString();
  const timeDigits = [...hour, ...minute];

  digits.forEach((digit, idx) => {
    const on = strokeOn.get(+timeDigits[idx]);
    for (let i = 0; i < digit.size; i++) {
      if (on[i]) {
        digit.get(i).classList.add("on");
      } else {
        digit.get(i).classList.remove("on");
      }
    }
  });
}, 1000);
