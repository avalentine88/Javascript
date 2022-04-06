"use strict";

let numbers = [8, -4, 6, 3, -1, -87];
let negativeNums = [];

for(let nums of numbers) {
	if (nums < 0) {
		negativeNums.push(nums);
	}
}
console.log(negativeNums);

