// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

// const user = {
//     name: '221',
//     number: '22',
//     email: null,
//     web: function (){
//         console.log("Hello World!")
//     }
// }

// function deepCopy(arg){
//  let arrFunction = []
//     for (const key in arg){
//         if (typeof arg[key] === 'function') {
//             let clone = arg[key].bind({})
//             arrFunction.push({key:key, function: clone})
//         }
//     }
// let copeObj = JSON.parse(JSON.stringify(arg))
// for (const obj of arrFunction){
//    copeObj[obj.key] = obj.function
// }
// return copeObj
// }
// console.log(deepCopy(user))

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let map = coursesAndDurationArray.map((item, index) => ({ id: index+1 ,...item}));
// console.log(map);

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомогx інлайн конструкції