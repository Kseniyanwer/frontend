let fruits = ['apple', 'pear', 'pulm'];
console.log(fruits);

//push() -добавление нового элемента в конец массива

fruits.push('orange');
console.log(fruits);
//unshift()-добавление в начало массива
//pop()-метод по удалению элемента в конце/начале массива(без указания номера элемента в массиве, он по умолчанию удалит последний элемент)
//shift()-удаление первого элемента по умолчанию
//pop и nshift -возвращают элементы:
let popElem = fruits.pop();
shifyElem = fruits.shift();
console.log(fruits);
console.log(popElem);
console.log(shiftElem);


//splice - универсальный метод
let arr = ['i', 'love', 'js'];
console.log(arr);
arr.splice(1, 1); //начинаем с первого индекса и удаляем 1 элемент
arr.splice(1, 0, 'learning');;
//начиная с первого и ничего не удаляя, появляетсяэлемент леарнинг(добавляется)
console.log(arr);

//slice-нарезает значения массива и присваивает их другому массиву
let arr2 = ['why', 'you', 'need', 'to', 'learn'];
let arr22 = arr2.slice(1, 3) //копируем элементы с первого, не включая третий
console.log(arr22);
let arr23 = arr2.slice(1); //скопировать все начиная с первого индекса и до конца
let arr24 = arr2.slice();
console.log(arr24);
let arr2Copy = arr2;
console.log(arr2Copy);

//split -преобразовывают строку в массив 
let names = 'masha,petya,re'
let namesArr = names.split(',');
console.log(namesArr);
namesArr = names.split(',', 2);
let txt = 'text';
console.log(txt.split(''));



//joim -из элементов массива превращает строку
let arrNames = ['masha', 'r', 'gh', 'jsj'];
let strNames = arrNames.join(', ');
console.log(strNames);
console.log(new Array(10).join('lya')); //повторение строки


//sort -сортирует значения
let arrNums = [3, 1, 2, -6, 23, 45];
console.log(arrNums);
arrNums.sort();
console.log(arrNums);
arrNums.sort(function(a, b) {
    return a - b;
});
console.log(arrNums);


//reverse - изменяет порядок массива на обратный
//concat


let arrnum2 = [1, 2, 3, 4, 5, 6],
    arrnum3 = [6, 7, 8, 9],
    arrnum4 = [10, 11, 12, 13, 14];

let arrnums5 = arrnum2.concat(arrnum3, arrnum4); //теперь данный массив содержит все значения из остальных массивов

//indexof(поиск слева направо) LastindexOf(поиск справа налево)-поиск значения

let newarrnames = ['ret', 'rey', 'asuka', 'shindji'];
console.log(newarrnames);
newarrnames.indexOf('ret');
console.log(newarrnames);
//если элемент не найден возвращается минус 1 то есть ложь