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
let i;



for (i = 1; i <= 7; i++) {
	function getRandomInRange(min, max) {
  	return Math.round(Math.random() * (max - min)) + min;
}
	randomNums.push(getRandomInRange(5, 300));
	
}
console.log(randomNums);

// пока до конца не доделала задачу


