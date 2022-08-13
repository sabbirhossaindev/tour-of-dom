// 1. where to add.....
const placesList = document.getElementById('places-list');

// 2. what to be added....
const li = document.createElement('li');
li.innerText = 'sunder bon';

// 3. add the child...
placesList.appendChild(li);

// where to add...
const mainContainer = document.getElementById('main-container');

// what to be add....
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'briyani.'
ul.appendChild(li1);

const li2 = document.createElement('li');
li1.innerText = 'rost.'
ul.appendChild(li2);

const li3 = document.createElement('li');
li1.innerText = 'korma..'
ul.appendChild(li3);

// 
section.appendChild(ul);
mainContainer.appendChild(section);

// set innerHTML directly....
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> my dress section </h1>
<ul>
    <li>pant</li>
    <li>shart</li>
    <li>tshart</li>
    <li>pangabi</li>
</ul>
`
mainContainer.appendChild(section);
