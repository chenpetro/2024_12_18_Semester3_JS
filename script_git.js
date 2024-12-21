// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4

const categories = document.querySelectorAll('.item');

console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    
    const itemsCount = category.querySelectorAll('li').length;

    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${itemsCount}`);
});
