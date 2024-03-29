// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const recipes = data.recipes;

        // Находим контейнер для рецептов в DOM
        const recipesContainer = document.getElementById('recipesContainer');

        // Создаем блок для каждого рецепта и добавляем его в контейнер
        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            // Добавляем информацию о рецепте в блок
            for (let key in recipe) {
                const p = document.createElement('p');
                if (key === 'ingredients') {
                    // Создаем список ингредиентов и добавляем его в блок рецепта
                    p.textContent = `${key}:`;
                    recipeDiv.appendChild(p);
                    const ingredientsList = document.createElement('ul');
                    recipe[key].forEach(ingredient => {
                        const ingredientItem = document.createElement('li');
                        ingredientItem.textContent = ingredient;
                        ingredientsList.appendChild(ingredientItem);
                    });
                    recipeDiv.appendChild(ingredientsList);
                } else
                if (typeof recipe[key] === 'string' && recipe[key].match(/^https?:\/\/.*\.(jpg|jpeg|png|gif|webp)$/i)) {
                    const img = document.createElement('img');
                    img.src = recipe[key];
                    img.alt = 'recipe Image';
                    p.appendChild(img);
                    recipeDiv.appendChild(p);
                } else {
                    p.textContent = `${key}: ${recipe[key]}`;
                    recipeDiv.appendChild(p);
                }
            }

            // Добавляем блок рецепта в контейнер
            recipesContainer.appendChild(recipeDiv);
        });
    })
    .catch(error => {
        console.error('Произошла ошибка при загрузке данных:', error);
    });




// fetch('https://dummyjson.com/recipes')
//     .then(response => response.json())
//     .then(data => {
//         const recipes = data.recipes; // Получаем массив рецептов из данных
//
//         // Получаем контейнер для отображения рецептов
//         const recipesContainer = document.getElementById('recipesContainer');
//
//         // Проходимся по каждому рецепту
//         recipes.forEach(recipe => {
//             // Создаем элементы для отображения информации о рецепте
//             const recipeElement = document.createElement('div');
//             recipeElement.classList.add('recipe');
//
//             const titleElement = document.createElement('h2');
//             titleElement.textContent = recipe.title;
//
//             const descriptionElement = document.createElement('p');
//             descriptionElement.textContent = recipe.description;
//
//             const ingredientsElement = document.createElement('ul');
//             // Проходимся по каждому ингредиенту в рецепте и добавляем его в список
//             recipe.ingredients.forEach(ingredient => {
//                 const ingredientItem = document.createElement('li');
//                 ingredientItem.textContent = ingredient;
//                 ingredientsElement.appendChild(ingredientItem);
//             });
//
//             // Добавляем элементы к родительскому контейнеру
//             recipeElement.appendChild(titleElement);
//             recipeElement.appendChild(descriptionElement);
//             recipeElement.appendChild(ingredientsElement);
//             recipesContainer.appendChild(recipeElement);
//         });
//     });