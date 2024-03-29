// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

// VERSION 444 - Ultimate Search
fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(res => {
        console.log(res);
        let { carts } = res;

        // Находим контейнер для корзин в DOM
        const container = document.getElementById('cartsContainer');

        // Создаем блок для каждой корзины и добавляем его в контейнер
        carts.forEach(cart => {
            const cartDiv = document.createElement('div');

            // Добавляем информацию о корзине в блок
            for (let key in cart) {
                const p = document.createElement('p');
                p.textContent = `${key}: ${cart[key]}`;
                cartDiv.appendChild(p);
            }

            // Создаем список продуктов и добавляем его в блок корзины
            const productList = document.createElement('ul');
            cart.products.forEach(product => {
                const productItem = document.createElement('li');
                for (let key in product) {
                    const li = document.createElement('li');
                    // Ultimate Search
                    if (typeof product[key] === 'string' && product[key].match(/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i)) {
                        const img = document.createElement('img');
                        img.src = product[key];
                        img.alt = 'Product Image';
                        li.appendChild(img);
                    } else {
                        li.textContent = `${key}: ${product[key]}`;
                    }
                    productList.appendChild(li);
                }
            });
            cartDiv.appendChild(productList);

            // Добавляем блок корзины в контейнер
            container.appendChild(cartDiv);
        });
    });



// // VERSION 333 - Unknown Field Search (except img-field)
// // Запрос к API и обработка данных
// fetch('https://dummyjson.com/carts')
//     .then(response => response.json())
//     .then(res => {
//         console.log(res);
//         let { carts } = res;
//
//         // Находим контейнер для корзин в DOM
//         const container = document.getElementById('cartsContainer');
//
//         // Создаем блок для каждой корзины и добавляем его в контейнер
//         carts.forEach(cart => {
//             const cartDiv = document.createElement('div');
//
//             // Добавляем информацию о корзине в блок
//             for (let key in cart) {
//                 const p = document.createElement('p');
//                 p.textContent = `${key}: ${cart[key]}`;
//                 cartDiv.appendChild(p);
//             }
//
//             // Создаем список продуктов и добавляем его в блок корзины
//             const productList = document.createElement('ul');
//             cart.products.forEach(product => {
//                 const productItem = document.createElement('li');
//                 for (let key in product) { // - Unknown Field Search (except img-field)
//                     const li = document.createElement('li');
//                     // if (key === 'thumbnail') {
//                     if (typeof key === 'img') {
//                         const img = document.createElement('img');
//                         img.src = product[key];
//                         img.alt = 'Product Image';
//                         li.appendChild(img);
//                     } else {
//                         li.textContent = `${key}: ${product[key]}`;
//                     }
//                     productList.appendChild(li);
//                 }
//             });
//             cartDiv.appendChild(productList);
//
//             // Добавляем блок корзины в контейнер
//             container.appendChild(cartDiv);
//         });
//     });



// VERSION 222 - DOM-structure
// // Запрос к API и обработка данных
// fetch('https://dummyjson.com/carts')
//     .then(response => response.json())
//     .then(res => {
//         console.log(res);
//         let { carts } = res;
//
//         // Находим контейнер для корзин в DOM
//         const container = document.getElementById('cartsContainer');
//
//         // Создаем блок для каждой корзины и добавляем его в контейнер
//         carts.forEach(cart => {
//             const cartDiv = document.createElement('div');
//
//             // Добавляем информацию о корзине в блок
//             const cartId = document.createElement('p');
//             cartId.textContent = `Cart ID: ${cart.id}`;
//             cartDiv.appendChild(cartId);
//
//             const total = document.createElement('p');
//             total.textContent = `Total: ${cart.total}`;
//             cartDiv.appendChild(total);
//
//             const discountedTotal = document.createElement('p');
//             discountedTotal.textContent = `Discounted Total: ${cart.discountedTotal}`;
//             cartDiv.appendChild(discountedTotal);
//
//             const totalProducts = document.createElement('p');
//             totalProducts.textContent = `Total Products: ${cart.totalProducts}`;
//             cartDiv.appendChild(totalProducts);
//
//             const totalQuantity = document.createElement('p');
//             totalQuantity.textContent = `Total Quantity: ${cart.totalQuantity}`;
//             cartDiv.appendChild(totalQuantity);
//
//             // Создаем список продуктов и добавляем его в блок корзины
//             const productList = document.createElement('ul');
//             cart.products.forEach(product => {
//                 const productItem = document.createElement('li');
//                 productItem.textContent = `${product.id} - ${product.title} - ${product.price}`;
//
//                 // Добавляем изображение продукта
//                 const productImage = document.createElement('img');
//                 productImage.src = product.thumbnail;
//                 productImage.alt = product.title;
//                 productItem.appendChild(productImage);
//
//                 productList.appendChild(productItem);
//             });
//             cartDiv.appendChild(productList);
//
//             // Добавляем блок корзины в контейнер
//             container.appendChild(cartDiv);
//         });
//     });



// VERSION 111 - Document Write
// fetch('https://dummyjson.com/carts')
//     .then(response => response.json())
//     .then(res => {
//         console.log(res);
//         let { carts } = res;
//
//         document.write(`<div>`);
//         for (const cart of carts) {
//             document.write(`<div>`);
//             document.write(`<p>Cart ID: ${cart.id}</p>`);
//             document.write(`<p>Total: ${cart.total}</p>`);
//             document.write(`<p>Discounted Total: ${cart.discountedTotal}</p>`);
//             document.write(`<p>Total Products: ${cart.totalProducts}</p>`);
//             document.write(`<p>Total Quantity: ${cart.totalQuantity}</p>`);
//             document.write(`<p>Products:</p>`);
//             document.write(`<ul>`);
//             for (const product of cart.products) {
//                 document.write(`<li>${product.id} - ${product.title} - ${product.price}</li>`);
//                 document.write(`<img src="${product.thumbnail}" alt="">`)
//             }
//             document.write(`</ul>`);
//             document.write(`</div>`);
//         }
//         document.write(`</div>`);
//     });