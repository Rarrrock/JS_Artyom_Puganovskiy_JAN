// Створити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

document.addEventListener('DOMContentLoaded', function () {
    // Находим форму и кнопку
    const form = document.getElementById('myForm');
    const submitButton = document.getElementById('submitButton');

    //Назначаем обработчик события на кнопку
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // предотвращаем действие по умолчанию для кнопки

        // Считываем значение полей из формы
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const age = document.getElementById('age').value;

        // создаем объект с данными из полей
        const person = {
            name: name,
            surname: surname,
            age: age
        };

        //Выводим объект под формой
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `<p>Object:</p>
                               <p>Name: ${person.name}</p>
                               <p>Surname: ${person.surname}</p>
                               <p>Age: ${person.age}</p>`;
    })
})



// є сторінка, на якій є блок, в якому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let counterValue = localStorage.getItem('counter');

// Если значение счетчика не было сохранено, устанавливаем его в 1
if (!counterValue) {
    counterValue = 1;
} else {
    // Если значение счетчика было сохранено, увеличиваем его на 1
    counterValue = parseInt(counterValue) + 1;
}

// Обновляем значение счетчика в локальном хранилище
localStorage.setItem('counter', counterValue);

// Выводим значение счетчика на страницу
document.getElementById('counter').innerText = 'Counter: ' + counterValue;

