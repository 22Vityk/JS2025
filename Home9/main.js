// - створити блок,

// const body = document.querySelector('body')
// let block = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta

// block.classList.add('wrap','collapse','alpha','beta')
// block.innerText = 'Hello World!'

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

// block.style.height = '100px';
// block.style.backgroundColor= 'black';
// block.style.color = 'white';

// - додати цей блок в body.

// body.appendChild(block);

// - клонувати його повністю, та додати клон в body.

// let clone = block.cloneNode(true)
// clone.style.backgroundColor= 'green ';
// body.appendChild(clone);

// - Є масив:

// const arr =    ['Main','Products','About us','Contacts']

// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let ul = document.createElement('ul')
// for(const obj of arr ){
//     let li = document.createElement('li')
//     li.textContent = obj
//     ul.appendChild(li)
//
// }
// document.body.appendChild(ul)

// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let ul = document.createElement('ul')
// for (const course of coursesAndDurationArray) {
//     let li = document.createElement('li');
//     li.textContent = 'Назва - '+ course.title +' '+ course.monthDuration;
//     ul.appendChild(li);
//     console.log(course)
// }
// document.body.appendChild(ul);

// =========================

//     - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// ==========================

// for (let course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.textContent = course.title;
//
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.textContent = course.monthDuration;
//
//     div.append(h1,p)
//
//     document.body.appendChild(div);
//
// }

