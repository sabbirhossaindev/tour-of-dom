console.log("Hello form js");

let friends = {
    name: 'badon',
    fnd: 'hridoy',
    id: 477480,
    study: function (time) {
        console.log(time, 'study kortasa.......');
    },
}
const liCollection = document.getElementsByTagName('h1');
    // console.log(liCollection);
for (const li of liCollection) {
    console.log(li.innerText);
}