//циклы и перебор
let fruits = ['apple', 'orange',
    'strawberry'
];
console.log(fruits);
console.log(fruits.length);

for (let i = 0; i < 3; i++) {
    console.log(fruits[i]);
}

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

//while используется редко для перебора
//while

let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

//заполнение массива числами

let arr = [];
for (let i = 10; i <= 20; i++) {
    arr.push(i);
}
console.log(arr);