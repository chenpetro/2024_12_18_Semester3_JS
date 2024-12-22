// Створіть елемент ul та додайте до нього 5 елементів li з текстом "Item 1", "Item 2", і т.д.

const ul = document.createElement('ul')
console.log(ul);
ul.classList.add('ul')

for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    ul.appendChild(li);
  }
  
  document.body.appendChild(ul);