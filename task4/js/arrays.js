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
	
	let num = Math.round(Math.random() * 295);	
	randomNums.push(num);
}
console.log(randomNums);

	  let min = randomNums.indexOf(Math.min(...randomNums));
      let max = randomNums.indexOf(Math.max(...randomNums));
 
[randomNums[min], randomNums[max]] = [randomNums[max], randomNums[min]]
console.log(randomNums);
