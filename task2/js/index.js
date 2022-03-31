"use strict";

let sum = 13500;
let code = prompt("Введите номер купона:");


switch (code) {
	case "4653":
		alert(`Ваша скидка - 30%! Сумма к оплате: ${sum - (sum * 30 / 100)}`);
		break;
	case "5698":
	case "5111":
		alert(`Ваша скидка - 20%! Сумма к оплате: ${sum - (sum * 20 / 100)}`);
		break;
	case "6922":
	case "6113":
	case "6099":
		alert(`Ваша скидка - 10%! Сумма к оплате: ${sum - (sum * 10 / 100)}`);
		break;
	default:
		alert("Сумма к оплате без скидки: " + sum);
}




let count = parseInt(prompt("Введите количество правильных ответов:"));
 //  или let count = 56;

if (count >= 90 && count <=100) {
	console.log("Оценка - отлично.");
} else if (count >= 60 && count <=89) {
	console.log("Оценка - хорошо.");
} else if (count >= 40 && count <=59) {
	console.log("Оценка - удовлетворительно.");
} else if (count >= 0 && count <=39) {
	console.log("Попробуйте еще раз.");
} else {
	console.log("Введите корректное число.");
} 

	
	
	let num = Math.floor(Math.random() * 10);
	let userNum = parseInt(prompt("Введите положительное число или 0 для выхода"));
	while (userNum > num || userNum < num) {
	
	if (userNum < num) console.log("Загаданное число больше");
		
	if (userNum > num) console.log("Загаданное число меньше");
		
	if (userNum === num) console.log("Вы угадали!");
		break;
	if (userNum === 0) console.log("Выход из программы");	
		break;
		

}



let plates = parseInt(prompt("Введите количество немытых тарелок: "));
let fairy = parseInt(prompt("Введите количество моющего средства: "));

while (plates > 0 && fairy > 0) {
	plates--; fairy-0.5;
	console.log(`Остаток моющего средства: ${fairy}`);
	if (plates === 0 || fairy === 0) console.log(`Остаток тарелок: ${plates}, остаток моющего средства: ${fairy}`);
}

