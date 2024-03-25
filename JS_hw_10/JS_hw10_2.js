// Создаем массив объектов на 100 элементов
let objectsArray = [];
for (let i = 0; i < 100; i++) {
    objectsArray.push({ id: i, name: 'Object-' + i });
}

// Функция для отображения объектов в указанном диапазоне
function displayObjects(startIndex, endIndex) {
    let output2 = document.getElementById('output2');
    output2.innerHTML = ''; // Очищаем содержимое перед выводом

    // Цикл для создания объектов
    for (let i = startIndex; i < endIndex; i++) {
        let object = objectsArray[i];
        let div = document.createElement('div');
        div.textContent = object.name;
        output2.appendChild(div);
    }
}

// Переменные для хранения текущего индекса начала отображения
let startIndex = 0;
let endIndex = 10;

// Показываем первые 10 объектов при загрузке страницы
displayObjects(startIndex, endIndex);

// Обработчик для кнопки "Next"
document.getElementById('nextBtn').addEventListener('click', function() {
    if (endIndex < objectsArray.length) {
        startIndex += 10;
        endIndex += 10;
        displayObjects(startIndex, endIndex);
    }
});

// Обработчик для кнопки "Prev"
document.getElementById('prevBtn').addEventListener('click', function() {
    if (startIndex > 0) {
        startIndex -= 10;
        endIndex -= 10;
        displayObjects(startIndex, endIndex);
    }
});