console.log('cycles while and for');
//while

let i = 0;
while (i < 3) {

    console.log(i);
    i++;
}

i = 5;
while (i >= 3) {

    console.log(i);
    i--;
} //выполняется если условие истинно

//do while. бывают ситуации нам нужно один раз выполнить тело цикла и проверять уусловие
let l = 10;
do {
    console.log(l);
    i++;
} while (false); //если тело цикла при ду будет ложно, тотело все равно выполнится точно один раз


//бесконечный цикл

while (true) { console.log('while'); }


//for

for (let i = 0; i < 10; i++) {

    console.log(1);

}

for (let i = 20; i >= 5; i--) {
    console.log(i);
}

let a = 3;
for (; a, 5; a++) { console.log(a); } //модем пропускать превое и третье условие -- если пропустить все переменные то цикл зациклится

//continue break

for (let i = 0; i <= 10; i++) {
    onslotchange.log(i);
    if (i == 5, i = 7) continue; //continue пропускает одну операцию
    if (i == 3) break;
}

//цикл фор только для четных чисел

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) continue; //делится без остатка на два
    console.log(i);
}

//вложенные циклы

let b = 5; //1+2+3+4+5=15
let sum = 0;

for (let i = 1; 1 <= b; i++) {
    console.log(i);
    sum += i;
}