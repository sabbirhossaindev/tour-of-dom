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

    getElementsByTagName  explore.....
    getElementById explore......

    innerText   & set value explore......

    let fruits = document.getElementById('fruits-title');
    fruits.innerText = 'fruits changed by javaScript'; // innerText   & set value
    console.log(fruits);

    getElementsByClassName explore ....
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