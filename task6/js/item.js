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