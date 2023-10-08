var hits = 0;
var shoots = 0;
var ships_Amount = prompt('Write an amount of ships');
var shootsArray = [];
let arrayCells = [];

var randomArrayBoolean = () =>
    Array.from({ length: ships_Amount },
        () => (Math.random() <= 0.5)); //объявление стрелочной функции, которая создает массив из константы ships_Amount - длина данного массива, а элементы массива выводятся по функции Math.random, в которой элементы должны содержать значение true должно не меньше 40% 


var newArrayCells = arrayCells.concat(randomArrayBoolean()); //объединение пустого массива с массивом, полученным из функции randomArrayBoolean
console.log(newArrayCells); //вывод в консоль

var indexCells = Array.from(newArrayCells.keys()).filter((i) => newArrayCells[i] == true);

console.log(indexCells);

var cellsValues = indexCells.values(); //присвоение переменной индексов массива элементов true



function shoot() {
    var inputValue = document.getElementById('inputValues').value; //поиск инпута и сбор значения с инпута
    var cellValue = Number(inputValue); //преобразовываем полученное значение к числу
    console.log(cellValue); //вывод в консоль
    shoots++; //увеличиваем выстрелы на единицу
    console.log(shoots); //вывод в консоль
    var shootAmount = document.querySelector('#shoots'); //поиск абзаца для вывода выстрелов
    shootAmount.innerHTML = shoots; //вывод на страницу в абзац количество выстрелов

    shootsArray.push(cellValue); //создаем массив из значения/ий, которые были вписаны в инпут
    var shootsArrayn = shootsArray.join(' | '); //вывод элементов массива в строку через запятую
    console.log(shootsArrayn); //вывод в консоль
    var historyStr = document.getElementById('shootsHistory'); //поиск абзаца для вывода строки из элементов массива, которые обозначают координаты выстрелов
    historyStr.innerHTML = shootsArrayn; //вывод на страницу координаты выстрелов через запятую

    for (var cellValueNum of indexCells) { //ввод переменной cellValueNum, циклом проверяется то, что пока cellValueNum есть в массиве индексов ячеек, то он выполняется

        var cellValueN = cellValueNum + 1; //прибавляем по единице, т.к в массиве индекс от 0
        console.log(cellValueN); //вывод в консоль

        if (cellValue == cellValueN) { //если true, то цикл выполняется
            hits++; //прибавляем к переменной 1
            console.log(hits); //вывод
            var hitsStr = document.getElementById('hits'); //поиск элемента на страницу
            hitsStr.innerHTML = hits; //вывод попаданий в абзац 
            newArrayCells[cellValueNum] = false; //присваиваем элементам массива значение false по индексам
            console.log(newArrayCells);
        }
    }

    if (newArrayCells.every(checkArrayOfCells) == true) {
        var winText = document.getElementById('winTitle');
        winText.innerHTML = 'You win! Restart the game.'
    } //если все элементы равны false, то цикл выполняется
    //выводится то, что игрок победил
    var hitOccurred = false;
    if (hitOccurred) {
        var hitsStr = document.getElementById('hits');
        hitsStr.innerHTML = hits;
    }

    if (hits == ships_Amount) { // Проверяем победу только после каждого выстрела
        var winText = document.getElementById('winTitle');
        winText.innerHTML = 'You win! Restart the game.'
    }
}


function checkArrayOfCells(element) {
    return element == false;
} //функция ищет элементы равные false 

function clearAllGame() {
    shootsArray = [];
    shoots = 0;
    hits = 0;

    var historyStr = document.getElementById('shootsHistory');
    var shootAmount = document.querySelector('#shoots');
    var winText = document.getElementById('winTitle');
    var hitsStr = document.getElementById('hits');

    historyStr.innerHTML = '';
    shootAmount.innerHTML = '';
    winText.innerHTML = '';
    hitsStr.innerHTML = '';

    document.getElementById('inputValues').value = '';
    ships_Amount = prompt('Write an amount of ships');
    newArrayCells = randomArrayBoolean();
    indexCells = newArrayCells.flatMap((el, i) => el == true ? i : []);

}
//clearAllGame(): ищет определенные элементы на странице, присваивает им переменные и далее очищает все абзацы и возвращает начальные значения




var btnNewGame = document.getElementById('retryGame');
btnNewGame.onclick = clearAllGame;


var btnClick = document.getElementById('click');
btnClick.onclick = shoot;