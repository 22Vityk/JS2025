// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (i = 0; i < 10; i++) {
// /    document.write('<h2>wdsadadsada</h2>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for(i = 0; i <10; i++){
//     document.write(`<div>dsa ${i} </div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 1
//
// while (i < 21) {
//     let user = i;
//     document.write(`<h1>${user}</h1>`)
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 1;
// while (i < 21){
//     document.write(`<div>${i}dsad</div>`)
//     i++
// }

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// let x = 0
// while (x< listOfItems.length) {
//     let item = listOfItems[x];
//     x++
//     document.write(`<ul><li>${item}</li></ul>`);
// }

// for (x in listOfItems) {
//     let item = listOfItems[x];
//     document.write(`<ul>
//         <li>${item}</li>
// </ul>`);
// }

// for (let i = 0; i <listOfItems.length; i++) {
//     let item = listOfItems[i];
//     document.write(`<ul>
//           <li>
//         ${item}
// </li></ul>`)
// }

// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

// -----------------------------------------------

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];

// let x = 0
// while (x < products.length) {
//     let product = products[x];
//     x++
//     document.write(`<div class="product-cart">
//         <h3>${product.title} ${product.price}</h3>
//         <img src="${product.image}" alt="${product.title}" style="width: 300px" height="300px"></img>
// </div>`)
// }

// for (x in products) {
//     let product = products[x];
//     document.write(`<div class="product">
//         <h3>${product.title} ${product.price}</h3>
//         <img src="${product.image}" style="height: 300px" width="300px">
// </div>`)
// }

// for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     document.write(`<div class="product-cart">
//         <h3>${product.title}${product.price}</h3>
//         <img src="${product.image}" alt="${product.title}" style="height: 300px" width="300px"></img>
//
// </div>`)
// }
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
// --------------------

// є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// let x= 0
// while (x < users.length) {
//     let user = users[x];
//     if (user.status) {
//         console.log(user);
//     }
//     x++
// }

// for (user of users) {
//     if (user.status === true) {
//         document.write(`
//         <div>
//             <ul>${user.status} ${user.name}</ul>
//         </div>`)
//      }
// }

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     if (user.status === false){
//         document.write(`<div>${user.status} ${user.name}</div>`)
//     }
// }
// let x = 0
// while (x < users.length) {
//     let user = users[x];
//     x++
//     if (user.age > 30) {
//         document.write(`<div><ul><li>${user.status} ${user.name}</ul></div>`);
//     }
// }

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років