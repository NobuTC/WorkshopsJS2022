/*var arr = [];
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

alert("Hello! I am an alert box!!");

document.write("You are using " + navigator.appName + " websites");
// ei oo mulla appName > mulla on joku oma mut ei tarvii nyt

document.write("websites width" + window.screen.width + " and websites height");
//ei toimi koska, ei ole sitä appName samaa kun opettajalla nyt.
*/
const element = document.getElementById("myBtn");
element.addEventListener("click", function () {
  document.getElementById("demo").innerHTML = "Hello World";
});
