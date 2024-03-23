// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main','Products','About us','Contacts'];
let ul = document.createElement('ul');

for (const elem of arr) {
    let li = document.createElement('li');
    li.innerText = elem;
    // li.textContent = elem;
    // для отображения текста в его исходном состоянии
    ul.appendChild(li);
}
document.body.appendChild(ul);