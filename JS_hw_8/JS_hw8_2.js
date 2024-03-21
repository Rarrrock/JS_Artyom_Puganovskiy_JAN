// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// - створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {
    constructor (id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [
    new Client(1, 'aaa', 'Aaa', 'mail1', 101, ['meat','eggs']),
    new Client(2, 'bbb', 'Bbb', 'mail2', 102, ['eggs']),
    new Client(3, 'ccc', 'Ccc', 'mail3', 103, ['vegi', 'meat','eggs']),
    new Client(4, 'ddd', 'Ddd', 'mail4', 104, ['vegi', 'meat','eggs']),
    new Client(5, 'fff', 'Fff', 'mail5', 105, ['vegi']),
    new Client(6, 'ggg', 'Ggg', 'mail6', 106, ['vegi', 'meat','eggs']),
    new Client(7, 'hhh', 'Hhh', 'mail7', 107, ['vegi','eggs']),
    new Client(8, 'sss', 'Sss', 'mail8', 108, ['vegi', 'meat','eggs']),
    new Client(9, 'www', 'Www', 'mail9', 109, ['meat','eggs']),
    new Client(0, 'qqq', 'Qqq', 'mail0', 100, ['vegi', 'meat','eggs'])
]

console.log(clients.sort((c1, c2) => (c2.order.length - c1.order.length)));
