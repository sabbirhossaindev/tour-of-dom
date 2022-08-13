const placeContainer = document.getElementById('place-container');
placeContainer.childNodes; // akto gula child asa ta janta..
// placeContainer.firstChild; // first
// placeContainer.childNodes[1]; // childNodes er fist ta janta...
// 
placeContainer.childNodes[3].childNodes;
placeContainer.childNodes[3].childNodes[5];
placeContainer.childNodes[3].childNodes[5].nextSibling; // next
placeContainer.childNodes[3].childNodes[5].previousSibling; // agar ta previous....
console.log(placeContainer);


// query selector apply kora just ul ka dorer jonno...
const plascesUL = document.querySelector('#place-container ul');
// console.log(plascesUL);

// akta new element create korta...
let list1 = document.createElement('span');
console.log(list1);
let list2 = document.createElement('p');
console.log(list2);
let list3 = document.createElement('h4');
console.log(list3);
let list4 = document.createElement('h5');
console.log(list4);


// more explore..... createElement.........
const li = document.createElement('li');
li.innerText = 'brand new text to goo.';
// plascesUL.appendChild(li); // append hoilo push er moto........
console.log(li);
plascesUL.parentNode.parentNode.parentNode.parentNode.parentNode
console.log(plascesUL);