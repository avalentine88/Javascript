"use strict";



function range(start, end, step = 1) {
	let array = [];
	for (let i = start; i < end; i = i + step) {
		array.push(i);	
	}
	return array;
}
console.log(range(1, 12, 2));