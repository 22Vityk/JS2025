// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function AR (id,surname,email,phone){
//     this.id=id;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }

// -- створити пустий масив, наповнити його 10 об'єктами new User(....)

// let arg = []
//     for (i = 0; i < 10; i++) {
//         let user = new AR(i, 'vituk' + i, 'vityk12' + i + '@gmail.com','4353555553'+[i])
//         arg.push(user)
//     }
//     let value =  arg.map(obj=>({...obj}))

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

//  let filt = value.filter(obj=>obj.id % 2 === 0)

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//   let sort = value.sort((b,a)=> a.id-b.id)

// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// function Client (id,name,surname,email,phone,{order1,order2}) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = [order1, order2];
// }

// -- створити пустий масив, наповнити його 10 об'єктами Client

// function blockClient (value) {
//     let arrCli = []
//     for (let i = 0; i < value; i++) {
//         let fitst = new Client(i, 'Serhii' + i, 'Vityk' + i, 'Vityk' + i + '@gmail.com', '22' + i + '3323222', {
//             order1: i + '2',
//             order2: i + 1
//         });
//         arrCli.push(fitst)
//     }
//     let cleen = arrCli.map(obj => ({...obj}))
//     return cleen
// }
// let  client = new blockClient(10)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//     .sort((a,b)=> a - b )

// let find = client.sort(((a,b)=> b.order[1] - a.order[1]))

// --------------Function
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car (model, manufacturer, releaseYear, maximumSpeed,engineValue,increaseMaxSpeed){
//     this.model = model
//     this.manufacturer = manufacturer
//     this.releaseYear = releaseYear
//     this.maximumSpeed = maximumSpeed
//     this.engineValue = engineValue


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    // this.console = function () {return console.log(`їдемо   ${this.maximumSpeed}`)}

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    // this.increaseMaxSpeed = function (newSpeed) {return this.maximumSpeed += newSpeed}

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    // this.info = function () {
    //     for (const x in this) {
    //
    //         if (typeof this[x] !== 'function') {
    //             console.log(`${x} - ${this[x]}`)
    //         }
    //     }
    // }

// -- changeYear (newValue) - змінює рік випуску на значення newValue

    // this.changeYear = function (newValue){
    //     this.releaseYear = newValue
    // }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    // this.addDriver = function (driverName, driverAge) {
    //     this.driver = {
    //         name: driverName,
    //         age: driverAge,
    //     }
    // }
// }

// car.console()
// car.increaseMaxSpeed(1115)
// car.info()
// car.changeYear(22)
// let car = new Car('Tesla','USA','2000',203,'3')
// car.addDriver('anton',23)
// console.log(car)

// --------------Claas
// -- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// class Car {
//     constructor(model, manufacturer, releaseYear, maximumSpeed, engineValue) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.releaseYear = releaseYear;
//         this.maximumSpeed = maximumSpeed;
//         this.engineValue = engineValue;
//     }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    // drive (){
    //     console.log(`їдемо з ${this.maximumSpeed}`);
    // }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    // info (){
    //     for (const x in this) {
    //         console.log(`${x}-${this[x]}`);
    //     }
    // }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    // increaseMaxSpeed (newSpeed){
    //     this.maximumSpeed +=newSpeed;
    // }

// -- changeYear (newValue) - змінює рік випуску на значення newValue

    // changeYear (newYear){
    //     this.releaseYear = newYear;
    // }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    // addDriver (driverName, driverAge){
    //     this.driver = {
    //         name: driverName,
    //         age: driverAge};
    // }
// }

// let car = new Car('aa','France','1999',2222,'3,4');
// car.drive()
// car.info();
// car.increaseMaxSpeed(3333);
// car.changeYear(333311);
// car.addDriver('sergii',22)
// console.log(car);

// - Cтворити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// let girls = function () {

    // function Body(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }

    // function Girl(name, age, footSize, husben) {
    //     Body.call(this, name, age, footSize);
    //     this.footSize = footSize;
    //     this.husben = husben;
    // }
    // let girls = []

    // for (let i = 0; i < 10; i++) {
    //     let girl = new Girl('ira'+i, '30'+ i, '3'+i);
    //     girls.push(girl);
    // }
    // return girls
// }
// console.log(girls())


// -- Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Body {
//         constructor(name, age, footFize) {
//             this.name = name;
//             this.age = age;
//             this.footFize = footFize;
//         }
//     }
//
// class Prince extends Body {
//         constructor(name, age, footFize, findSize) {
//             super('Anton', 31, 40, 35);
//             this.findSize = findSize;
//         }
//     }

// let prince = new Prince('aa','333','35','35')
// console.log(prince)

// -- За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// for(const why of girls()) {

    // if (why.footSize === prince.findSize) {
    //     why.husben = prince
    //     console.log(why)
    // }
// }

// -- Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let girl = girls().find(value => value.footSize === prince.findSize && (value.husben = prince));
// console.log(girl);

// *Через Array.prototype. створити власний foreach, filter

// let arr = ['22222',2,3,4,5,'222222']
// Array.prototype.myEach = function (callback) {
//     for (const item of this) {
//          callback(item)
//     }
// }
// let aaa = arr.myEach(value =>console.log(value));

// Array.prototype.finde = function(callback) {
//     let result = [];
//     for (const item of this) {
//         if (callback(item)) {
//           result.push(item)
//         }
//     }
//     return result
// }
// let a = arr.finde((value => value <= 5  ))
// console.log(a)
