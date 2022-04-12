"use strict";

let temperatures = [

    [344, 241, 521, 344, 121],

    [111, 313, 351, 314],

    [134, 111, 452],

];

 for(let i = 0; i < temperatures.length; i++) {
     for (let j = 0; j < temperatures.length; j++) {
        if (temperatures[i].some(j => j > 500))  {
            console.log("Температура поднималась выше 500");
        
        } 
        else console.log("Температура не поднималась выше 500");
     }
    }




let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];

let newArr = first.filter(item => second.includes(item));
console.log(newArr);




let presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];

presents.sort(() => Math.random() - 0.5);
console.log(presents);



let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];

numbers.sort(function(a, b) {
  return a.length - b.length;
});
console.log(numbers);