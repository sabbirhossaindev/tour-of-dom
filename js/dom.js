console.log("Hello form js");

let friends = {
    name: 'badon',
    fnd: 'hridoy',
    id: 477480,
    study: function (time) {
        console.log(time, 'study kortasa.......');
    },
}

// getElementsByTagName  explore.....

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