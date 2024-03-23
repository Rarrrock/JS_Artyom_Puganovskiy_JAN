// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним файлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Создание контейнера для всех блоков
let coursesContainer = document.createElement('div');
coursesContainer.classList.add('courses-container');

// Перебор каждого элемента массива coursesArray
for (const course of coursesArray) {
    // Создание нулевого блока
    let courseZeroBlock = document.createElement('div');
    courseZeroBlock.classList.add('course-zero-block');

    // Создание блоков для свойств title, monthDuration, hourDuration и modules
    let titleBlock = document.createElement('div');
    let durationBlockContainer = document.createElement('div');
    let monthDurationBlock = document.createElement('div');
    let hourDurationBlock = document.createElement('div');
    let modulesBlock = document.createElement('div');

    // Установка текста для каждого блока
    titleBlock.textContent = 'Title: ' + course.title;
    monthDurationBlock.textContent = 'Month Duration: ' + course.monthDuration;
    hourDurationBlock.textContent = 'Hour Duration: ' + course.hourDuration;

    // Создание списка для свойства modules
    let modulesList = document.createElement('ul');
    for (const module of course.modules) {
        let moduleItem = document.createElement('li');
        moduleItem.textContent = module;
        modulesList.appendChild(moduleItem);
    }
    modulesBlock.appendChild(modulesList);

    // Установка классов для стилей
    titleBlock.classList.add('title-block');
    durationBlockContainer.classList.add('duration-block-container');
    monthDurationBlock.classList.add('duration-block');
    hourDurationBlock.classList.add('duration-block');
    modulesBlock.classList.add('modules-block');

    // Установка стилей для блоков
    // courseZeroBlock.style.display = 'flex';
    courseZeroBlock.style.border = '1px solid black';
    titleBlock.style.width = '100%';
    titleBlock.style.border = '1px solid black';
    durationBlockContainer.style.width = '100%';
    durationBlockContainer.style.display = 'flex';
    durationBlockContainer.style.border = '1px solid black';
    monthDurationBlock.style.width = '25%';
    monthDurationBlock.style.border = '1px solid black';
    hourDurationBlock.style.width = '75%';
    hourDurationBlock.style.border = '1px solid black';
    modulesBlock.style.width = '100%';

    // Добавление блоков внутрь нулевого блока
    durationBlockContainer.appendChild(monthDurationBlock);
    durationBlockContainer.appendChild(hourDurationBlock);

    courseZeroBlock.appendChild(titleBlock);
    courseZeroBlock.appendChild(durationBlockContainer);
    courseZeroBlock.appendChild(modulesBlock);

    // Добавление нулевого блока к основному контейнеру
    coursesContainer.appendChild(courseZeroBlock);
}

// Добавление контейнера с блоками на страницу
document.body.appendChild(coursesContainer);
