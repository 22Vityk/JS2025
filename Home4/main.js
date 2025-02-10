// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function m2 (a,b){
//     return console.log(a*b) ;
// }

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function m2 (r){
//     let pi = 3.14
//     let R = r**2
//     return pi*R
// }
// m2(5)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function ver1(h,r){
//     let pi = 3.14
//     let r2 = m2(r)
//     let l = 2 * pi * r * h
//     return console.log(l)
// }
// ver1(190,23)

// - створити функцію яка приймає масив та виводить кожен його елемент

// /let a = [1,2,4,5,'dsa',true]
//
// function console2 (arr) {
//     for (let item of arr){
//         console.log(item)
//     }
// }
// console2(a)

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

// function h2(arg) {
//     return document.write(`<p>${arg}</p>`)
// }
// h2('dsad')

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

// function hw (arg){
//     return document.write(`<ul>
//         <li>${arg}</li>
//         <li>${arg}</li>
//         <li>${arg}</li>
//     </ul>`)
// }
// hw('dsa da')

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

// function li (text, value) {
//     let ul1 = document.write('<ul>');
//     let count = 0;
//     while ( count < value){
//         let li = document.write(`<li>${text}</li>`);
//         count++
//     }
// }
// li('fsafs',4)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

// let arr = [1,2,3,4,5,6,'ww'];
//
// function list (items) {
//     let count =0;
//     while (count < items.length) {
//         document.write(`<ul><li>${items[count]}</li></ul>`)
//         count++
//     }
// }
//
// list(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {
//         id: 1,
//         name: "John",
//         age: 25,
//     },{
//         id: 2,
//         name: "Jane",
//         age: 30,
//     },{
//         id: 3,
//         name: "February",
//         age: 40,
//     }
// ]
// function objc (arg) {
//     for (let item of arg) {
//         document.write(`<ul>
//             <li>${item.id}</li>
//             <li>${item.name}</li>
//             <li>${item.age}</li>
//         </ul>`)
//     }
// }
// objc(arr)

// - створити функцію яка повертає найменьше число з масиву

// let arr = [2,4,2,5,8,3,9, 1];
//
// function find (arg){
//     let min = arg[0];
//     for (let count of arg){
//         if (min > count){
//             min = count
//         }
//     }
//      return console.log(min)
// }
//
// find(arr)

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum (arg){
//     let total = 0
//     for (let count of arg){
//         total += count
//     }
//     console.log(total)
// }
// let arr = [1,2,4,5,6,7,8]

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arg, index1, index2) {
//     let temp = arg[index1]
//     arg[index1] = arg[index2]      *// трошки підглядав
//     arg[index2] = temp
// }
//
// let arr = [1,3,6,4];
// swap(arr,3,1 )

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

// function exchange (sumUAH, currencyValues){
//     if (currencyValues === 'usd'){
//         currencyValues = 40
//     }else if(currencyValues === 'eur'){
//         currencyValues = 42
//     }
//     console.log(currencyValues)
// return currencyValues * sumUAH
// }
//
// console.log(exchange(231, 'usd' ))












