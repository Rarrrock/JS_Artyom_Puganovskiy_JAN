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
