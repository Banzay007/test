/* 1 Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас
// хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
// Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это
// число и считаете. Результат надо вывести на страницу с помощью alert. 

let kursDollar = 76;
let kursEuro = 90;

let sumDollars = 0,
    sumEuro = 0;

// let sumRubles = +prompt("Введите сумму в рублях:"); тоже самое
let sumRubles = Number(prompt("Введите сумму в рублях:"));

if(sumRubles.toString() !== "NaN") {
//    toString значение строка (текст)
    sumDollars = (sumRubles / kursDollar).toFixed(2);
    sumEuro = (sumRubles / kursEuro).toFixed(2);

    alert(`Сумма в рублях ${sumRubles} в долларах = ${sumDollars},\nв евро = ${sumEuro}`);
}

else {
    alert("Неверная сумма");
}

*/

/* 2 Пользователь вводит длину оснований трапеции (a и b), а также высоту трапеции h.
Программа выводит сообщение: «Площадь трапеции будет равна <значение>». Площадь
вычисляется по формуле ((a + b) / 2) * h, где a, b - основания, h - высота.
*/
/*
let a; //длина основания трапеции
let b; //длина основания трапеции
let h; //высота трапеции
let S; //площадь трапеции


a = +prompt("длина основания трапеции (а):", 10);
b = +prompt("длина основания трапеции (b):", 7);
h = +prompt("высота трапеции (h):", 5);

if(a.toString() ==="NaN" || b.toString() ==="NaN" || h.toString() ==="NaN")  {
    alert("Неверные значения");
}
else {
    S = ((a + b) / 2) * h.toFixed(2);
    alert(`Площадь трапеции = ${S} кв.м`);
}
*/

/* другой вариант
let a; //длина основания трапеции
let b; //длина основания трапеции
let h; //высота трапеции
let S; //площадь трапеции


a = +prompt("длина основания трапеции (а):", 10);
b = +prompt("длина основания трапеции (b):", 7);
h = +prompt("высота трапеции (h):", 5);

if(a.toString() !=="NaN") {
    S = ((a + b) / 2) * h.toFixed(2);
    alert(`Площадь трапеции = ${S} кв.м`);
}
else {
    alert("Неверные значения");
}
*/




/* 3. Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно. Отобразить размер вклада поочередно на ближайшие 5 лет. */

/*
let sum; //сумма вклада
let percent; //годовой процент


sum = +prompt("введите сумму вклада:", 100);
persent = +prompt("введите процент по вкладу", 7);
           
            for (let i=1; i<=5; i++) {
                sum = sum + sum * (persent / 100);
                alert(`сумма за ${i} год = ${sum.toFixed(2)} руб`);
            }
            

*/


/// другой вариант
/*
let sum; //сумма вклада
let percent; //годовой процент

sum = +prompt("введите сумму вклада:", 100);
persent = +prompt("введите процент по вкладу", 7);

if(sum.toString() ==="NaN"  || persent.toString() ==="NaN") {
    alert("Неверные значения");
    sum = +prompt("введите сумму вклада:", 100);
    persent = +prompt("введите процент по вкладу", 7); //не ясно как цикличность запустить - вводить данные пока они не станут числовыми
}

for (let i=1; i<=5; i++) { 
    sum = sum + sum * (persent / 100);
    alert(`сумма за ${i} год = ${sum.toFixed(2)} руб`);
}
*/




/* 4. Запросить у пользователя ввод числа и сохранить это число в переменную a.Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'. */
/*
let a; //переменная
a = +prompt("введите любое число:");
if (a == 10) {
    alert(`верно!`);
}
else {
    alert("неверно");
}
*/





/* 6. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
*/

/*
let a = 10;
let b = 3;

console.log(`остаток от деления а на b = ${a % b}`);

*/


/* 5 Выведите столбец чисел от 1 до 50.*/
/*
for (let i = 1; i <= 50; i++) {
    console.log(`${i}\n`);
}
*/
/*
let result = "";

for(let i = 1; i <= 50; i++) {
    if(i % 2 != 0) {
        console.log(`${i}\n`);
        result = result + i + "\n";
    }
}
alert(result);
*/


/*
7. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
*/
/*
const MAXLENGTHSTR = 50;
let str = "";
let symbol = "*";
let flag = true;

let lengthStr = Number(prompt("Длина строки:"));

if (lengthStr.toString() != "NaN") {
    if (lengthStr > 0 && lengthStr <= MAXLENGTHSTR) {

        let answerUser = confirm("Заполнять цифрами?");

        switch(answerUser) {
            case true:  for (let i = 1; i <= lengthStr; i++) {
                            str += i;
                        }
                        break;
            case false: while(flag) {
                            symbol = prompt("Укажите символ для заполнения строки:");
                            if(symbol != null) {
                                if(symbol.length == 1) {
                                    for (let i = 1; i <= lengthStr; i++) {
                                        str += symbol;
                                    }
                                    break;
                                }
                            }
                            else {
                                flag = false;
                            }
                        }
                        break;
        }
        flag ? alert(`Результат:\n${str}`) : alert("Вы отменили!");
    }
    else if(lengthStr == "") {
        alert(`Ошибка!!! Длина строки не должна быть пустой!`);
    }
    else {
        alert(`Ошибка!!! Длина строки должна быть > 0 и <= ${MAXLENGTHSTR}`);
    }
}
else {
    alert("Ошибка!!! Длина строки должна быть числом!");
}
*/





/*
8. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.
*/

/*

let str = "Привет друзья!";
let resultStr = "";
for(let i = 0; i < str.length; i++) {
    if(i == str.length - 1) {
        resultStr += str[i];
    }
    else {
        resultStr += str[i] + "\n";
    }
}
alert(resultStr);
*/




//9. Дан массив с элементами 'Привет, ', 'мир' и '!'.Необходимо вывести на экран фразу 'Привет, мир!'.
/*
let mas = [];
let str = "";
let countItems = +prompt("Кол-во элементов в массиве:");

if(countItems > 0 && countItems <= 20) {
    for(let i = 0; i < countItems; i++) {
        mas[i] = Math.ceil(Math.random() * 10);
    }
    for(let index in mas) {
        console.log(mas[index] + '\n');
        str += mas[index] + '\n';
    }
    alert(str);
}
else {
    console.log("Кол-во элементов в массиве должно быть > 0 и не больше 20!");
}
*/





/* 10.
Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.*/

/* один вариант
let arrayOne = ['a', 'b', 'c'];
let arrayTwo = [1, 2, 3, 4, 5];
let arrayMix = [];

let str = "";
let i = 0;

for(let index in arrayOne) {
    arrayMix[i] = arrayOne[index];
    i++;
}
for(let index in arrayTwo) {
    arrayMix[i] = arrayTwo[index];
    i++;
}
for(let index in arrayMix) {
    str += arrayMix[index] + '\n';
}
alert(str);

*/

/* второй вариант
let massLet = ['a', 'b', 'c'];
let massNum = [1, 2, 3];

for (let i = 0; i < massNum.length; i++) {

    massLet[massLet.length] = massNum[i];

}
alert(massLet);
*/
/* третий вариант

let mas1 = [100, 200, 300, 400];
let mas2 = [600, 700];
mas1.push(mas2);
alert(mas1);
*/






//выводить в консоль дату и день недели
/*
let month = "";
let dayWeek = "";

let date = new Date();

let arrayDays = {
    0: "воскресенье",
    1: "понедельник",
    2: "вторник",
    3: "среда",
    4: "четверг",
    5: "пятница",
    6: "суббота"
}

let arrayMonth = {
    0: "январь",
    1: "февраль",
    2: "март",
    3: "апрель",
    4: "май",
    5: "июнь",
    6: "июль",
    7: "август",
    8: "сентябрь",
    9: "октябрь",
    10: "ноябрь",
    11: "декабрь"
}

for (let index in arrayDays) {
    if(date.getDay() == index) {
        dayWeek = arrayDays[index];
    }
}

for (let index in arrayMonth) {
    if (date.getMonth() == index) {
        month = arrayMonth[index];
    }
}

console.log(`Сегодня - ${month}, ${date.getDate()} (${dayWeek})`);
*/






/***** DOM-объекты (начало) *****/
let body = document.body; // тело страницы
let titles = document.querySelectorAll(".title") // заголовок и названия областей формы

/* ПОЛЯ ВВОДА (числа, переключатели, флажки) */
let inputs = document.querySelectorAll(".parametrs input"); // коллекция полей (поля ввода и кнопки)

let inputPageBgColor = document.getElementById("page_bgcolor"); // поле с цветом фона
let inputPageImgLink = document.getElementById("page_imglink"); // поле с ссылкой на картинку
let bgSize = document.querySelectorAll("[name='bgSize']"); // переключатели масштабирования фона

let inputParamA = document.getElementById("param_a"); // поле с коэф. а
let inputParamB = document.getElementById("param_b"); // поле с коэф. b
let inputParamC = document.getElementById("param_c"); // поле с коэф. c

/* ПОЛЗУНКИ */
let rangeParamA = document.getElementById("range_a"); // ползунок с коэф. а
let rangeParamB = document.getElementById("range_b"); // ползунок с коэф. b
let rangeParamC = document.getElementById("range_c"); // ползунок с коэф. c

/* КНОПКИ */
let buttons = document.querySelectorAll(".btn"); // коллекция кнопок
let btnCalc = document.getElementById("btn_calc"); // кнопка расчёта
let btnReset = document.getElementById("btn_reset"); // кнопка очистки
let btnPlay = document.getElementById("btn_play"); // кнопка включения плеера
/***** DOM-объекты (конец) *****/

/***** Пользовательские переменные (начало) *****/
let indexChecked = getIndexChecked(bgSize); // позиция выбранного переключателя

let paramA; // значение коэф. а
let paramB; // значение коэф. b
let paramC; // значение коэф. c
let player; // создаваемый в DOM объект плеер

/* объект, содержащий свойства создаваемого плеера */
let playerAttributes = {
    "id": "player",
    "src": "media/sample.mp3",
    "controls": "",
    "autoplay": "",
    "class": "player"
};

let result; // результат вычисления
let solution; // создаваемый в DOM объект (абзац) для вывода результата
/***** Пользовательские переменные (конец) *****/

/***** ОБРАБОТЧИКИ СОБЫТИЙ (начало) *****/

// обработчик события "change" при изменении цвета фона
inputPageBgColor.addEventListener("input", () => {
body.style.backgroundColor = inputPageBgColor.value;

for (let title of titles) {
    title.style.color = body.style.backgroundColor;
    title.style.filter = "invert(75%) hue-rotate(270deg)";
}
})

// обработчик события "input" при загрузки фонового изображения
inputPageImgLink.addEventListener("change", () => {
indexChecked = getIndexChecked(bgSize);
setBgPage(indexChecked);
})

// обработчик события "input" при выборе обычного масштаба
bgSize[0].addEventListener("input", () => {
setBgPage(0);
})

// обработчик события "input" при выборе масштабирования фона
bgSize[1].addEventListener("input", () => {
setBgPage(1);
})

// обработчик события "input" при выборе мозаичного фона
bgSize[2].addEventListener("input", () => {
setBgPage(2);
})

// обработчик события "input" при вводе в поле коэф. a 
inputParamA.addEventListener("input", () => {
paramA = updateParam(inputParamA, rangeParamA);
unBlocked(inputParamB, rangeParamB, buttons);
})

// обработчик события "change" при изменении ползунка коэф. a 
rangeParamA.addEventListener("change", () => {
paramA = updateParam(rangeParamA, inputParamA);
unBlocked(inputParamB, rangeParamB, buttons);
})

// обработчик события "input" при вводе в поле коэф. b
inputParamB.addEventListener("input", () => {
paramB = updateParam(inputParamB, rangeParamB);
unBlocked(inputParamC, rangeParamC);
})

// обработчик события "change" при изменении ползунка коэф. b 
rangeParamB.addEventListener("change", () => {
paramB = updateParam(rangeParamB, inputParamB);
unBlocked(inputParamC, rangeParamC);
})

// обработчик события "input" при вводе в поле коэф. c
inputParamC.addEventListener("input", () => {
paramC = updateParam(inputParamC, rangeParamC);
})

// обработчик события "change" при изменении ползунка коэф. c 
rangeParamC.addEventListener("change", () => {
paramC = updateParam(rangeParamC, inputParamC);
})

// обработчик события "click" при клике по кнопке "Произвести расчёт"
btnCalc.addEventListener("click", () => {
result = calcSolution(paramA, paramB, paramC);
printSolution();
})

// обработчик события "click" при клике по кнопке "Очистить"
btnReset.addEventListener("click", () => {
for(let item of inputs) {
    if (item.getAttribute("type") == "number" || item.getAttribute("type") == "range") {
        item.value = "";
    }
    if(item.getAttribute("id") == "param_a" || item.getAttribute("id") == "range_a" || item.getAttribute("id") == "btn_play") {
        continue;
    }
    else {
        item.setAttribute("disabled", "disabled");
    }
}
body.removeChild(solution);
})

// обработчик события "click" при клике по кнопке "Показать/удалить плеер"
btnPlay.addEventListener("click", () => {
if(document.getElementById("player")) {
    body.removeChild(player);
    btnPlay.setAttribute("value", "Показать плеер");
}
else {
    player = createPlayer("audio", playerAttributes);

    body.append(player);
    btnPlay.setAttribute("value", "Удалить плеер");
}
})
/***** ОБРАБОТЧИКИ СОБЫТИЙ (конец) *****/

/***** ФУНКЦИИ *****/
// функция, возвращающая порядковый номер выбранного переключателя
function getIndexChecked(bgSize) { 
for (let i = 0; i < bgSize.length; i++) {
    if (bgSize[i].checked) {
        return i;
    }
}
}

// функция, задающая изображение фона страницы
function setBgPage(checked) {
body.style.backgroundImage = `url("${inputPageImgLink.value}")`;

switch(checked) {
    case 0: body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundSize = "1920px";
            break;
    case 1: body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundSize = "cover";
            break;
    case 2: body.style.backgroundSize = "auto";
            body.style.backgroundRepeat = "repeat";
            break;
}
}

// функция разблокировки полей и кнопок
function unBlocked(input, range, buttons) {
input.removeAttribute("disabled");
range.removeAttribute("disabled");

if(buttons) {
    for (let btn of buttons) {
        btn.removeAttribute("disabled");
    }
}
}

// функция установки/обновления коэфициента в поле/ползунке
function updateParam(input1, input2) {
let param = +input1.value; //значение коэф.
input2.value = param; //значение поля/ползунка с коэф.

return param;
}

// функция создания аудио-плеера
function createPlayer(tag, attr) {
let player = document.createElement(tag);

for (let key in attr) {
    player.setAttribute(key, attr[key]);
}
player.classList.add("player-show");

return player;
}

// главная функция расчёта корней (вычисление)
function calcSolution(a, b, c) {
let D; //дискриминант
let result; //строка с итогом

if (typeof b == "undefined") {
    b = 0;
}
if (typeof c == "undefined") {
    c = 0;
}

if(a == 0) {
    if(b == 0) {
        result = "Корней нет!";
    }
    else {
        if(c != 0) {
            result = -c / b;
        }
        else {
            result = 0;
        }
    }
}
else if(b == 0) {
    if(c != 0) {
        (-c / a >= 0) ? result = Math.sqrt(-c / a) : result = "Корней нет!";
    }
    else {
        result = 0;
    }
}
else if(c == 0) {
    result = [0, -b / a];
}
else {
    D = calcD(a, b, c);
    result = calcRoots(D, a, b, c);
}
return result;
}

// функция для расчёта дискриминанта
function calcD(a, b, c) {
return b ** 2 - 4 * a * c;
}

// функция для расчёта корней квадратного уравнения
function calcRoots(D, a, b, c) {
let x1, x2; //корни квадратного уравнения

if(D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);

    return [x1, x2];
}
else if (D == 0) {
    return -b / (2 * a);
}
else {
    return "Корней нет!";
}
}

// функция вывода результа на страницу (в создаваемый объект solution - абзац)
function printSolution() {
if (document.querySelector(".solution")) {
    solution.innerHTML = checkResult(result);
}
else {
    solution = createElem("p", checkResult(result));
    solution.innerHTML = checkResult(result);
    body.append(solution);
}
}

// функция создания элемента
function createElem(tag, content) {
let elem;

elem = document.createElement(tag);
elem.innerHTML = content;
elem.classList.add("solution");

return elem;
}

// функция проверки результата вычисления
function checkResult(result) {
if (typeof result == "string") {
    return `<strong>${result}</strong>`;
}
else if (typeof result == "number") {
    return `Уравнение имеет один корень: <strong>x = ${result.toFixed(2)}</strong>`;
}
else {
    return `Уравнение квадратное.<br>Имеет два корня: <strong>x1 = ${result[0].toFixed(2)}; x2 = ${result[1].toFixed(2)}</strong>`;
}
}


/***** КОД при использовании alert и prompt *****/
// let params = setParametrs();
// let solution;

// if (typeof params != "string") {
//     solution = calcSolution(params[0], params[1], params[2]);
//     getSolution(solution);
// }
// else {
//     alert(params);
// }

// function setParametrs() {
//     let a, b, c; //коэф. кв. уравнения

//     if(a = setParam("a")) {
//         if(b = setParam("b")) {
//             if(c = setParam("c"))
//             {
//                 return [a, b, c];
//             }
//         }
//     }
//     return "Вы отменили ввод!";
// }

// function setParam(nameParam) {
//     let param; //коэффициент уравнения
//     let cancel; //флаг для проверки ввода параметра

//     do {
//         param = prompt(`Коэф. ${nameParam}:`);
//         cancel = checkParametr(param);
//     } while (cancel);

//     return param;
// }

// function checkParametr(param) {
//     if (typeof param == "object") {
//         return false;
//     }
//     else if (isNaN(param) || param == "") {
//         alert("Ошибка! Введена пустая строка или не число!");
//         return true;
//     }
// }

// function getSolution(solution) {
//     if(typeof solution == "string") {
//         alert(solution);
//     }
//     else if(typeof solution == "number") {
//         alert(`Уравнение имеет один корень: x = ${solution.toFixed(2)}`);
//     }
//     else {
//         alert("Уравнение квадратное. Имеет два корня:\n" + "x1 = " + solution[0].toFixed(2) + "\nx2 = " + solution[1].toFixed(2));
//     }
// }