// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//

// Получаем кнопку и добавляем обработчик события на клик
let generateButton = document.getElementById('generateTable');
generateButton.addEventListener('click', function() {
    // Получаем значения из инпутов
    let rowCount = parseInt(document.getElementById('rowCount').value);
    let cellCount = parseInt(document.getElementById('cellCount').value);
    let dummyCellValue = document.getElementById('dummyCell').value;

    // Получаем контейнер для таблицы
    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // Очищаем контейнер

    // Создаем таблицу и элементы tbody
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');

    // Создаем строки и ячейки таблицы
    for (let i = 0; i < rowCount; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < cellCount; j++) {
            let cell = document.createElement('td');
            // Заполняем ячейки данными
            if (i === rowCount - 1 && j === cellCount - 1) {
                cell.textContent = dummyCellValue; // ячейка-чучело
            } else {
                cell.textContent = `Row ${i + 1}, Cell ${j + 1}`; // Остальные ячейки
            }
            row.appendChild(cell); // Добавляем ячейку в строку
        }
        tbody.appendChild(row); // Добавляем строку в tbody
    }

    table.appendChild(tbody); // Добавляем tbody в таблицу
    tableContainer.appendChild(table); // Добавляем таблицу в контейнер
});


