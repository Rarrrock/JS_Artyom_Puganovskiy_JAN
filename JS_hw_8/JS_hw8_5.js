// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// -створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// -Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Human {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}
class Cinderella extends Human {
    constructor (name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}
const CinderellasList = [
    new Cinderella('Alina', 22, 36),
    new Cinderella('Tamara', 17, 45),
    new Cinderella('Anna', 17, 37),
    new Cinderella('Inna', 30, 38),
    new Cinderella('Rita', 30, 39),
    new Cinderella('Olga', 17, 39),
    new Cinderella('Irina', 18, 34),
    new Cinderella('Oksana', 25, 35),
    new Cinderella('Tanya', 29, 40),
    new Cinderella('Sabrina', 57, 46),
];
class Prince extends Human {
    constructor(name, age, shoe) {
        super(name, age)
        this.shoe = shoe;
    }
}
const prince1 = new Prince ('Artyom', 29, 35)

for (let cinderella of CinderellasList) {
    if (prince1.shoe === cinderella.footSize) {
        prince1.wife = cinderella;
        console.log('Моя принцеса, ', prince1.wife, ' !')}
    else {console.log(cinderella.name, '- не та принцеса')}
}

let find = CinderellasList.find(value => value.footSize === prince1.shoe);
console.log('Моя принцеса, ', find, ' !');

// From mentor:
// // Перший код
// for (let Cinderella of CinderellasList) {
//     for (let element in Cinderella) {
//         if (element === 'shoesSize') {
//             if (Cinderella[element] === prince1.shoe) {
//                 prince1.wife = Cinderella
//                 console.log(prince1.wife)
//             }
//         }
//     }
// }
//
// // // Другий код
// for (let cinderella of CinderellasList) {
//     // console.log(cinderella)
//     if (cinderella.shoesSize === prince1.shoe) {
//         prince1.wife = cinderella
//         console.log(prince1.wife)
//     }
// }