// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let divContainer = document.createElement('div');

for (const course of coursesAndDurationArray) {
    let divCourse = document.createElement('div');
    divCourse.classList.add('course');
    divCourse.innerText = course.title + ' Duration - ' + course.monthDuration + ' months';
    divContainer.appendChild(divCourse);
}

document.body.appendChild(divContainer);

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let div2Container = document.createElement('div');

for (const course of coursesAndDurationArray) {
    let divCourse = document.createElement('div');
    divCourse.classList.add('item');
    let headerCourse = document.createElement('h1');
    divCourse.appendChild(headerCourse);
    headerCourse.classList.add('heading');
    headerCourse.innerText = course.title;
    let paragraphCourse = document.createElement('p');
    divCourse.appendChild(paragraphCourse);
    paragraphCourse.classList.add('description');
    paragraphCourse.innerText = course.monthDuration;
    div2Container.appendChild(divCourse);
}

document.body.appendChild(div2Container);
