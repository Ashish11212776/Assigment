// Create 3 page counters using different functions, expression, declaration and
// arrow format. Counters will all work independently as the value of the total
// is contained within the instance of the function object using this.
// Page counters with functions :
// 1. Select all the page buttons
// 2. Create a function expression that will increment the counter on button
// press
// 3. Create a function expression with the arrow format that will track and
// increment the count on the page
// 4. Create a function declaration that will track and increment the count
// on the page.

// class Counter{
//   constructor(){
//     this.count = 0;
//   };
//   increment(){
//     this.count++;
//     return this.count;
//   };
// }

let count1 = 0;
let count2 = 0;
let count3 = 0;

function increment(count) {
  return ++count; 
}

function Counter1() {
  count1 = increment(count1);
  document.getElementById("counter-display-1").innerHTML = `Count: ${count1}`;
}

const Counter2 = () => {
  count2 = increment(count2);
  document.getElementById("counter-display-2").innerHTML = `Count: ${count2}`;
};

const Counter3 = function () {
  count3 = increment(count3);
  document.getElementById("counter-display-3").innerHTML = `Count: ${count3}`;
};

const button1 = document.getElementById("counter-button-1");
const button2 = document.getElementById("counter-button-2");
const button3 = document.getElementById("counter-button-3");

button1.addEventListener("click", Counter1);
button2.addEventListener("click", Counter2);
button3.addEventListener("click", Counter3);