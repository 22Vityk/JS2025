// Масиви та об'єкти

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


// let arr = [
//     1, 3, false,{age:31,name: 'Serhii'
//
//     }
//
// ]
// console.log(arr[3].name)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

 // let obj = {
 //    title : "John",
 //     pageCount : 5,
 //     ganre: "action"
 // }
// let obj2 = {
//     title : "second",
//     pageCount : 15,
//     ganre: "action2"
// }
// let obj3 = {
//     title : "third",
//     pageCount : 52,
//     ganre: "action3"
// }


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let obj4 = {
//     title: 'dsaa',
//     pageCount: 21,
//     genre: 'eeee',
//     authors: [
//         {
//             name: 'arr',
//             age : 46
//         }
//         ]
//  }



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let arr = [
//     {
//         name: 'John',
//         age: 25,
//     },{
//         name: 'January',
//         age: 35,
//     },{
//         name: 'February',
//         age: 40,
//     },{
//         name: 'March',
//         age: 30,
//     }
// ]
// console.log(arr[1].age)


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
// let arr = [
//     {
//        'день неділі': 'Понеділок',
//         mining: 31,
//         day: 30,
//         evininhg: 25
//
//     },{
//         'день неділі': 'Вівторок',
//         mining: 31,
//         day: 30,
//         evininhg: 25
//     }, {
//         'день неділі': 'Середа',
//         mining: 31,
//         day: 30,
//         evininhg: 25
//     },{
//         'день неділі': 'Четвер',
//         mining: 31,
//         day: 30,
//         evininhg: 25
//     },{
//         'день неділі': 'Пятниця',
//         mining: 31,
//         day: 30,
//         evininhg: 25
//     },{
//         'день неділі': 'Субота',
//         mining: 31,
//         day: 30,
//         evininhg: 25
//     },{
//         'день неділі': 'Неділя',
//         mining: 31,
//         day: 30,
//         evininhg: 25
//     }
// ]

// Логічні розгалуження:

    // - Є змінна х, якій ви надаєте довільне числове значення.
    // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


// let x = false
//
// if(x){
//     console.log('accept')
// }else if (x === true){
//     console.log('2false')
// }else if (x === false){
//     console.log('Wait')
// }





// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let x = 555
//
// if (x >= 0 && x < 15) {
//     console.log('first')
// }else if (x >= 16 && x < 30) {
//     console.log('second')
// }else if (x >= 31 && x < 45) {
//     console.log('third')
// }else if (x >= 46 && x < 60) {
//     console.log('fourth')
// }else {
//     console.log('cant')
// }
//


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


// let day = 320;
//
// if(day > 0 && day <= 10){
//     console.log('22')
// }else if(day >= 11 && day <=20 ) {
//     console.log('two decada')
// }else if (day >=21 &&day<=30){
//     console.log('hrid decada')
// }else{
//     console.log('wrong decada')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let x = +prompt()
// switch (x) {
//     case 1:
//
//         let a = {
//             title: '1222',
//             caunt: 1213
//         }
//         let b = `${a.title} ${+a.caunt}`
//         console.log(b)
//         break;
//     case 2:
//     {let a = {
//             title: '2222',
//             caunt: 2213333
//         }
//         let b = `${a.title} ${+ a.caunt}`
//         console.log(b)
//         break;}
//     case 3:
//     {
//         let a = {
//             title: '3222',
//             caunt: 32133
//         }
//         let b = `${a.title} ${+ a.caunt}`
//         console.log(b)
//         break;}
//     case 4:
//      {
//         let a = {
//             title: '4222',
//             caunt: 42133
//         }
//         let b = `${a.title} ${+ a.caunt}`
//         console.log(b)
//         break;}
//
//     case 5:
//     {
//         let a = {
//             title: '5222',
//             caunt: 52133
//         }
//         let b = `${a.title} ${+ a.caunt}`
//         console.log(b)
//         break;}
//
//     case 6:
//     {
//         let a = {
//             title: '6222',
//             caunt: 62133
//         }
//         let b = `${a.title} ${+ a.caunt}`
//         console.log(b)
//         break;}
//     case 7:
//     {
//         let a = {
//             title: '7222',
//             caunt: 72133
//         }
//         let b = `${a.title} ${+ a.caunt}`
//         console.log(b)
//         break;}
//
//     default:
//         console.log("wrong")
//
// }

    // - Користувач вводить або має два числа.
    //     Потрібно знайти та вивести максимальне число з тих двох .
    //     Також потрібно врахувати коли введені рівні числа.

// let x = +prompt("Число 1");
// let y = +prompt("Число 2");
// if (x === y ){
//     console.log('Дорівнює')
// }else if(x > y ){
//     console.log('Більше число 1')
// }else{
//     console.log('Більше число 2')
// }


    // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    //     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

// let x =  prompt()
//
// if( !x){
//     let new
//     console.log('d')
// }else {
//     console.log('sas')
// }

    // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let one = coursesAndDurationArray[0].monthDuration
// let two = coursesAndDurationArray[1].monthDuration
//
// console.log(one , two)

