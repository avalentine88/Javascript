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





