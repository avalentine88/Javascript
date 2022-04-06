
let count = (prompt("Введите количество товаров:"));
let item = "товар";
 
if (count % 10 >=2 && count % 10 <= 4) 
	console.log(`Вы ввели: ${count}` + " " + item + item.substring(3, 4));

if ((count % 10 >= 5 && count % 10 <= 9) || count % 10 === 0 || (count % 100 >= 11 && count % 100 <= 14)) console.log(`Вы ввели: ${count}` + " " + item + item.substring(1, 3));


 else console.log(`Вы ввели: ${count}` + " " + item);
