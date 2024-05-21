// Задание 1

// const a = prompt("enter a number")
// if (typeof +a === "number") {
//   if (a % 2 === 0) {
//     console.log("Четное число")
//   } else if (a % 2 === 1) {
//     console.log("Нечетное число")
//   } else  {
//     console.log("Это не число")
//   }
// } else {
//   console.log("Кажется вы ошиблись")
// } 

// // Задание 2 

// let x = null
// if (typeof x === "number") {
//   console.log("Это число")
// } else if (typeof x === "string") {
//   console.log("Это строка")
// } else if (typeof x === "boolean") {
//   console.log("Это логический тип данных")
// } else {
//   console.log("Тип х не определен")
// }

// // Задание 3

// let string = "Hello"
// let result = "text"
// result = string.split("").reverse().join("")

// console.log(result)

// Задание 4 

// let a = Math.ceil(Math.random()*100)
// console.log(a)

// Задание 5

// let arr = [1, 2, 3];
// console.log(arr.length);
// arr.forEach((element) => console.log(element));

// Задание 6

// let arr = [1, 2, 3];
// let firstItem = arr[0];
// arr.every(item => firstItem === item);
// console.log(arr.every(item => firstItem === item));

// Задание 7

// let arr = [10, 11, 12, 15, 18, 21, 2, null, "cringe"];
// let odd = 0
// let even = 0
// let zero = 0
// for (let i = 0; i < arr.length; i++) {
  
//   if(typeof arr[i] === "number"){
//     if(arr[i] % 2 === 0){
//       even = even + 1;
//     }
//   if(arr[i] % 2 !== 0){
//       odd = odd + 1;
//     }
//   if(arr[i] === 0){
//       zero = zero + 1;
//     }
//   }
//   else{
//     console.log(`Не число: ${arr[i]}`)
//   }

// }
// console.log(`odd ${odd}`)
// console.log(`even ${even}`)
// console.log(`zero ${zero}`)

// Задание 8

// let myMap = new Map();
// myMap.set("sky", "blue");
// myMap.set(10, "number");
// myMap.set("Batman", "Superhero");

// for (let keys of myMap.keys()) {

//   console.log(keys);

// }
// myMap.forEach(function(values,keys) {
//   console.log('Ключ - ' + keys +', значение - ' + values);    
// });

// Задание 8 вариант 2

// let myMap = new Map();
// myMap.set("sky", "blue");
// myMap.set(10, "number");
// myMap.set("Batman", "Superhero");

// for (let keys of myMap.keys()) {

//   console.log(keys);

// }
// for (let entries of myMap.entries()) {
//   console.log(`Ключ - ${entries[0]}, значение - ${entries[1]}`);
// }
