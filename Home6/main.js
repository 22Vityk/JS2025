
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log('hello world'.length)
// console.log('lorem ipsum'.length)
// console.log('javascript is cool'.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log('hello world'.toLocaleUpperCase())
// console.log('lorem ipsum'.toLocaleUpperCase())
// console.log('javascript is cool'.toLocaleUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// console.log('HELLO WORLD'.toLowerCase())
// console.log('LOREM IPSUM'.toLowerCase())
// console.log('JAVASCRIPT IS COOL'.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = '  dirty string   '
// function cut(arg){
//     return newStr = arg.trim()
// }
// console.log(cut(str))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// let str = 'Ревуть воли як ясла повні';
// let stringToarray = (arg) =>  {return arg.split(' ');}
// console.log(stringToarray(str))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let toStr = arr.map(String)
// console.log(toStr)

// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let numss = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// function sortNums (nums, arg){
//     if (arg === 'ascending' ){
//         nums.sort((a, b) => a - b)
//         console.log(1)
//     }else if(arg === 'descending' ){
//         nums.sort((a, b) => b - a)
//     }
//     return nums
// }
// console.log(sortNums(numss,'descending'))

// ==========================

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration
// function sortNums (arg){
//     arg.sort((a, b)  =>  b.monthDuration - a.monthDuration );
//      return console.log(arg);
// }
// sortNums(coursesAndDurationArray)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяці
// let asd =  coursesAndDurationArray.filter(function (item){
//        return item.monthDuration > 5
//        })

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let map = coursesAndDurationArray.map((course, index) => {return{
//     title: course.title,
//     monthDuration: course.monthDuration,
//     id: index+1,
// }})

// =========================

// описати колоду карт (від 6 до туза без джокерів)

// function createCard (value, cardSuit) {
//   let color = (cardSuit === 'spade'|| cardSuit ==='clubs')? 'black' : 'red'
//    return { value,  cardSuit, color};
// }
//
// function createDeck() {
//     let cards = []
//     let cardSuits =  ['diamond','heart','clubs','spade']
//     let values = ['6','7','8','9','10','jack','queen','king','ace']
//     for (let cart1 of cardSuits) {
//         let cardSuits1 = []
//         for (let value of values) {
//             cardSuits1.push(createCard(value,cart1));
//
//         }
//      cards.push(cardSuits1);
//     }
//     return cards
// }
//
// let deck = createDeck()
//
//- знайти піковий туз

// function find(arr,arg1,arg2) {
//     let arg = arr.flat().filter(value => value.cardSuit === arg1 && value.value === arg2);
//     return arg
// }
// console.log(find(deck,'spade','ace'))

// - всі шістки

// let six = deck.flat().filter(value => value.value === '6')
// console.log(six)

// - всі червоні карти

// let heat = deck.flat().filter(value => value.color === 'red');
// console.log(heat)

// - всі буби

// let diamond = deck.flat().filter(value => value.cardSuit === 'diamond');

// - всі трефи від 9 та більше

// let al2 = ['6', '7','8']
// let all9 = deck.flat().filter(value => !al2.includes(value.value) && value.cardSuit === 'spade')

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

// =========================


// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let add = deck.flat()
//
// let newDeck = add.reduce((accumulator,currentValue)=>{
//     console.log(currentValue)
//     if(currentValue.cardSuit === 'spade'){
//         accumulator.statSpade.push(currentValue)
//     }else if(currentValue.cardSuit === 'clubs'){
//         accumulator.statClubs.push(currentValue)
//     }else if(currentValue.cardSuit === 'diamond'){
//         accumulator.statDiamond.push(currentValue)
//     }else if(currentValue.cardSuit === 'heart'){
//         accumulator.statHearts.push(currentValue)
//     }
//     return accumulator ;
// },{statSpade:[],statDiamond:[],statClubs:[],statHearts:[]})
// console.log(newDeck)

// =========================

// взяти з arrays.js масив coursesArray

// --написати пошук всіх об'єктів, в яких в modules є sass

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js','sass','sass']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// let one = coursesArray.filter(item => item.modules.includes('sass'));

// --написати пошук всіх об'єктів, в яких в modules є docker

// let wto = coursesArray.filter(item => item.modules.includes('docker'));

// let redu = coursesArray.reduce((acc, cur) => {
//     let dd = cur.modules.filter(value => value ==='docker' );
//        if (dd.length > 0) {
//            acc.doker.push(cur);
//        }
//     return acc;
// },{doker:[]})
