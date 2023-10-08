//массивы и их методы

let a = 123,
    b = 'stroka',
    c = false;
let arr = [];
console.log(arr);

let fruits = ['apple', 'pear', 'plum'];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits[0]);
//в существующем массиве эелементы можно заменять, вот пример:

fruits[1] = 'melon';
console.log(fruits);
//добавление под 3 индексом новый элемент
fruits[3] = 'cherry';
console.log(fruits);
fruits[10] = 'watermelon';
console.log(fruits);
console.log(fruits[5]);
//ассоциативный индекс/ключ - не числовой
fruits['other'] = 'cucumber';
console.log(fruits);
console.log(fruits['other']);
//длина массива
console.log(fruits.length);
//добавление элемента в конец массива с помощью легнзс
let fruits2 = ['apple', 'pear', 'plum'];
console.log(fruits2);
fruits2[fruits2.length] = 'melon';

let arrNum = [1, 2, , , , , , 5, 6];
console.log(arrNum);
//length позволяет полностью очистить массив или его укоротить
arrNum.length = 3;
console.log(arrNum);
//чтобы полностью очистить массив достаточно присвоить ноль
arrNum.length = 0;
console.log(arrNum);

//другой способ создания массива - используется нечасто
let arr3 = new Array();
console.log(arr3);


let arr4 = new Array('line', 123, 0, true);
console.log(arr4);

//new array - не самый удачный способ задавания массива, так как если вписать в массив число, то он создаст массив не с числом, а с эн количеством пустых ячеек

let arr5 = new Array(45);
console.log(arr5);