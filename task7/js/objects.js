"use strict";


    let books = [
        {author: "Толстой", title: "Война и мир"},
        {author: "Пушкин", title: "Пир во время чумы"},
        {author: "Лермонтов", title: "Тамань"},
        {author: "Гончаров", title: "Обломов"},
        {author: "Лермонтов", title: "Герой нашего времени"},
        {author: "Пушкин", title: "Руслан и Людмила"},
        {author: "Лермонтов", title: "И скучно, и грустно"},
    ];

  
 
 let booksSort = books.sort(function(a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
 }); 
  
console.log(booksSort);



let items = {
     piano: {
         title: "Пианино",
         price: 3000,
         count: 25
     },
     guitar: {
         title: "Гитара",
         price: 1200,
         count: 40
     },
     drum: {
         title: "Барабаны",
         price: 2700,
         count: 12
     },
     flute: {
         title: "Флейта",
         price: 900,
         count: 50
     },
     harp: {
         title: "Арфа",
         price: 3400,
         count: 5
     }
 };


let itemTitle = prompt("Введите товар");
let countToCart = +prompt("Введите количество");

function input(items, itemTitle, countToCart) {
        for (let item in items) {
            if (itemTitle === items[item].title && countToCart <= items[item].count) {
                items[item].count = items[item].count - countToCart;
                console.log("Остаток товара: " + items[item].count);  
                return true;
            }        
        }
        
        console.log("Выбранного товара недостаточно в наличии");  
        return false;           
}
   
console.log(input(items, itemTitle, countToCart));


