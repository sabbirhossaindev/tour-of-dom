console.log("Hello form js");

let friends = {
    name: 'badon',
    fnd: 'hridoy',
    id: 477480,
    study: function (time) {
        console.log(time, 'study kortasa.......');
    },
}
/*
toPart note:----------------->

    1. getElementsByTagName  explore.....
    2. getElementById explore...... kno kata specak vava kisu pata chila id use kora lagba.....

    innerText   & set value explore......

    let fruits = document.getElementById('fruits-title');
    fruits.innerText = 'fruits changed by javaScript'; // innerText   & set value
    console.log(fruits);

    3. getElementsByClassName explore ....

     querySelector ........Explore..
    1. 4. querySelectorAll  mane holilo all query eloctor add hoba..
    const container = document.querySelectorAll('.fruits-container li');
    for (const li of container) {
        console.log(li.innerText);
    }
    2. 5. document.querySelector('.fruits-container li'); only akta select korta .....

   ---------------------->
   
   defarance of HTMLCollection  or NodeList home work....

    ----------------------------->

    1. HTMLCollection: live lige....
    2. NodeList:  static...
*/
const liCollection = document.getElementsByTagName('li');
    // console.log(liCollection);
// for of loop use.........
for (const li of liCollection) {
    console.log(li.innerText);
}


const allHeading = document.getElementsByTagName('h1');
// for of loop use.....
for (const h1 of allHeading) {
    console.log(h1.innerText);
}

// getElementById  kno kata specak vava kisu pata chila id use kora lagba....
let fruits = document.getElementById('fruits-title');
fruits.innerText = 'fruits changed by javaScript'; // innerText   & set value
console.log(fruits);


let place = document.getElementById('places-title').innerText;
console.log(place);


let importan_places = document.getElementsByClassName('important-palce');
console.log(importan_places);


// querySelector ........Explore..
// 1. querySelectorAll  mane holilo all query eloctor add hoba..
// const container = document.querySelectorAll('.fruits-container li');
// for (const li of container) {
//     console.log(li.innerText);
// }
// 2. document.querySelector('.fruits-container li'); only akta select korta .....

const onlyOne = document.querySelector('.fruits-container li');
for (const li of onlyOne) {
    console.log(li.innerText);
}