"use strict";

let numbers = [8, -4, 6, 3, -1, -87];
let negativeNums = [];

for(let nums of numbers) {
	if (nums < 0) {
		negativeNums.push(nums);
	}
}
console.log(negativeNums);




let randomNums = [];

for (let i = 1; i <= 7; i++) {
	
	let num = Math.round(5 + Math.random() * 295);	
	randomNums.push(num);
}
console.log(randomNums);

	  let min = randomNums.indexOf(Math.min(...randomNums));
      let max = randomNums.indexOf(Math.max(...randomNums));
 
[randomNums[min], randomNums[max]] = [randomNums[max], randomNums[min]]
console.log(randomNums);



let array = [5, 89, 0, 56, 35, 27, -98, 23];

while (true) {
	let input = +prompt("Введите любое целое число или 0 для выхода");
	if (input === 0) break;
	if (!array.includes(input, 0)) array.push(input);
	else console.log("Вы ввели некорретные данные или данное число уже используется. Введите целое число.");
	
}
console.log(array);