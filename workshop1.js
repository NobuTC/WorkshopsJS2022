var arr = [];
for (let i = 0; i < 15; i++) {
  let randomNum = randomIntFromInterval(1, 100);
  console.log(randomNum);
  document.write(`<p>${randomNum}</p>`);
  arr.push(randomNum);
}
console.log(arr);

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
