// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersArray = [
    new User(11, 'aaa', 'Aaa', 'mail1', 101),
    new User(7, 'bbb', 'Bbb', 'mail2', 102),
    new User(3, 'ccc', 'Ccc', 'mail3', 103),
    new User(8, 'ddd', 'Ddd', 'mail4', 104),
    new User(0, 'fff', 'Fff', 'mail5', 105),
    new User(6, 'ggg', 'Ggg', 'mail6', 106),
    new User(2, 'hhh', 'Hhh', 'mail7', 107),
    new User(4, 'sss', 'Sss', 'mail8', 108),
    new User(9, 'www', 'Www', 'mail9', 109),
    new User(5, 'qqq', 'Qqq', 'mail0', 100),
];
console.log(usersArray);

console.log(usersArray.filter((value) => (value.id % 2) === 0));

console.log(usersArray.sort((id1, id2) => (id1.id - id2.id)));
