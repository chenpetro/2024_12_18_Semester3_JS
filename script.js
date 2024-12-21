const h1 = document.createElement('h1')
console.log(h1);
// h1.className = 'Hello'
h1.classList.add('title')
// h1.classList.remove('title')
// h1.classList.toggle('title')
h1.setAttribute('id','name')
h1.textContent = 'This is home page'

const box = document.querySelector('.box')
box.append(h1)

const img = document.createElement('img')
console.log(img);
img.classList.add('img')
img.setAttribute('src', 'photo.jpeg')
img.setAttribute('id','img')
img.setAttribute('width','500px')
box.prepend(img)

const clickBtn = document.querySelector('.btnClick')
clickBtn.remove()

const desc = document.querySelectorAll('.desc')
console.log(desc);

desc[1].remove()
console.log(desc);

const boxTwo = document.querySelector('.boxTwo')
// boxTwo.innerHTML = `
//         <img width='500px' src="/photo.jpeg" alt="">
//         <p class="text">Ice cream</p>
//         <p class="price">4$</p>
//         <button class="buy">Buy</button>
// `
// let myname = 'Petro'
// myname += 'Lambor'
// console.log(myname);


// console.log(box.hasAttribute('class'));
// console.log(box.getAttribute('class'));
// box.removeAttribute('class')
// console.log(box);

boxTwo.insertAdjacentHTML('beforeend','Marko4')


// 2.Напишіть функцію createTree яка створює вкладений ul/li список з вкладеного масива.


const data = [
    {
      fish: ['trout','salmon', 'shark']
    },  
    {
      tree: {
      large: ['sequoia', 'oak'],
      flowering: ['apple','magnolia']
    }
    }
  ];

const boxThree = document.querySelector('.boxThree')

function createTree(data) {
    // Create a root <ul> element
    const rootUl = document.createElement('ul');
    
    data.forEach(item => {
        // Iterate over each key-value pair in the object
        for (const key in item) {
            const li = document.createElement('li'); // Create a list item for the key
            li.textContent = key; // Set the key as the text
            
            const value = item[key]; 
            
            if (Array.isArray(value)) {
                // If value is an array, create a nested <ul> with items
                const ul = document.createElement('ul');
                value.forEach(subItem => {
                    const subLi = document.createElement('li');
                    subLi.textContent = subItem;
                    ul.appendChild(subLi);
                });
                li.appendChild(ul); // Append the nested <ul> to the current <li>
            } else if (typeof value === 'object' && value !== null) {
                // If value is an object, recurse to handle nested structure
                li.appendChild(createTree([value]));
            }
            
            rootUl.appendChild(li); // Append the current <li> to the root <ul>
        }
    });

    return rootUl;
}

// Generate the tree and append it to the boxThree element
boxThree.appendChild(createTree(data));

