// 33. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

let string = "okay!";
let firstLetter;
let newString = "";

string = string.charAt(0).toUpperCase() + string.substring(1); // Okay!

console.log(string);

firstLetter = string.charAt(0).toUpperCase();

newString = string.replace(string[0], firstLetter);

console.log(newString); // Okay