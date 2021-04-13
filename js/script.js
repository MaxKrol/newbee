// let number = 5;
// const topBorderWidth = 1;
// number = 7;

// const obj = {
//     a: 60
// }

// obj.a = 23;

// alert(obj.a);

// "use strict"; 

// {
//     let result = 26;
// }

// console.log(result); // нет доступа

// {
//     var result2 = 26;
// }

// console.log(result2); // уже есть доступ

// alert(7)
// [].unshift('dick')

// let number = 5.7;

// console.log(5/0);  // Infinity
// console.log(-5/0); // -Infinity

// console.log(nul); // null (is not defined)

// let und;
// console.log(und); // undefined

// const person = {
//     name : 'Max',
//     age: 21,
//     isMarried: falseMax
// };

// // console.log(person.name); // Max
// //             ===
// // console.log(person["name"]); // Max

// let ipgArr = ['moon.jpg', 'orange.jpg', 'ball.jpg']; // пример классического массива с картинками

// console.log(ipgArr[1]); // orange.jpg

// let arr1 = ['Moon', 'Earth', 'me'];

// let arr2 = {
//     0: 'Moon',
//     1: 'Earth',
//     2: 'me'
// };

// console.log(arr1[2]);   // me
// console.log(arr2['2']); // me

// alert('Если Вы покинете эту страницу, несохранённые данные будут утеряны!'); 
// изредка юзается для уведомления пользователю по типу


// const result = confirm('Are you here?');

// console.log(result);

// const result = prompt('Ты кто?', 'конь в пальто');

// alert('Привет, ' + result + '.');

// let test = '2';
// console.log(typeof(test));

// let test2 = 2;
// console.log(typeof(test2));

// let test3 = [];
// console.log(typeof(test3));

// const resultNum = +prompt('2' + '');

// alert(resultNum + 5);

// let company = ['Maxim', 'Anton', 'Maxich','Katya'];
// let testRegex = /Max/;

// let result = testRegex.test(company); // true
// console.log(result);

// const defAnswers = [];

// defAnswers[0] = prompt('What is your name?', '');
// defAnswers[1] = prompt('How old are you?', '');
// defAnswers [2] = prompt('Where are you living?', '');

// // alert(defAnswers[0]);

// document.write(defAnswers);

// let userName = 'Maxim';
// let age = 21;
// let country = 'Ukraine';

// console.log(`My name is ${userName}, I am ${age} and I leave in ${country}.`);
// // My name is Maxim, I am 21 and I leave in Ukraine.


// const category1 = 'toys';

// console.log(`https://myshop/${category1}`); // https://myshop/toys

// console.log(2 + '5');   // 25
// console.log(2 + +'5');  // 7
// console.log(2 + +'I5'); // Nan


// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(incr++); // 10
// console.log(decr--); // 10

// console.log(++incr); // 12
// console.log(--decr); // 8


// console.log(5%2);  // 1
// console.log(10%7); // 3

// console.log(2*2 == 4);    // true
// console.log(2*2 == '4');  // true
// console.log(2*2 === '4'); // false

// console.log(true&&true);   // true
// console.log(true&&false);  // false
// console.log(false&&false); // false

// console.log(true||false);  // true
// console.log(false||false); // false


// let isOpened = true,
//     isClosed = false;

// // console.log(isOpened&&isClosed); // false не может быть одновременно закрыто и открыто
// // console.log(isOpened||isClosed); // true  или закрыто или открыто

// console.log(isOpened && !isClosed); // true  (true && !false) === true