// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let  sa = (a ,b) => a * b
// console.log(sa(2,4))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let calc = (a)=> a*a*3.14159  <--------- я не розумію як тут повернути радіус
// console.log(calc(3))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let show = (arg) => {for (let item of arg) {console.log(item)}}
// let arr = [1,2,3,4]
// show(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// /let text = (text)=> document.write(`<p>${text}</p>`)
//text('dick')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ul = (text)=> {document.write('<ul>'); for(let i =0;i <3; i++){document.write("<li>"+text+"</li>")}document.write('</ul>')};
// ul(22)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ul = (text,count)=> {document.write('<ul>');
//     for (i=0;i<count;i++){
//     document.write(`<li>${text}</li>`)
// }
// document.write('</ul>')
// }
// ul('лох',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr= [1,5,8,0,'dada']
// let list = (arg)=> document.write('<ul>');for (let item of arr){document.write('<li>'+item+'</li>');document.write('</ul>')}
// list(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [ {
//     id: 1,
//     name: "John Doe",
//     age: 25,
// }, {
//     id: 2,
//     name: "Johnson",
//     age: 22,
// }, {
//     id: 3,
//     name: "Jane",
//     age: 21,
// }
// ]
// let build = (arg)=> document.write('<ul>'); for (let user of users){
//
//     document.write('<li>'+user.id +' '+ user.name +' '+  user.age + '</li>')
//
// }
/// build(users)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (arg)=> { let tot = 0; for(let num of arg) {tot += num}}
// let arr = [1,2,3,4,5]
// sum(arr)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let arr = [2,5,8,1]
// let swap = (arg, index1, index2) => {let temp = arg[index1];arg[index1] = arg[index2];arg[index2] = temp}
// swap(arr, 2,0)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

