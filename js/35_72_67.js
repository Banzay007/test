/* 35. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false. */


function enter(x, y) {
    if ( x === y ) {
        alert("true");
    }
    else {
      alert("false");
    };
  };
enter(2, 3);


/*
function returnValues(x, y) {

    if (x == y) {
        alert(`Введенные вами числа равны друг другу`);
        return;
    } else {
        alert(`Введенные вами числа НЕ равны друг другу`);
        return;
    }
}

let resultOne = prompt(`Введите первое число:`);
let resultTWo = prompt(`Введите второе число:`);

returnValues(resultOne, resultTWo);
*/



/*
/*
function matchNum (a, b) {
    if (a === b) {
        return true
    } else {
        return false
    }
}

console.log(matchNum (1000, 1000));
*/





// 67. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

/* function inArray(str ,Arr){
    let checkArrayElement=false;
    
    //проверяем элементы массива на совпадение со строкой
    
    for(i=0;i<Arr.length;i++){
     //   alert(Arr[i] );
        if( Arr[i]==str){
            checkArrayElement=true ;
      break 
        }
    }
    
    return checkArrayElement  ;  
}

let string;
string ="2";
let array;
array=[2,5,6];

alert(inArray (string,array));



*/
/* еще вариант:

let array1 = ['Firefox', 'Chrome', 'Safari', 'Opera'];
let array2 = ['tri', 'dva', 'raz', 'nol'];

function inArray(myText, myArray) {
    return myArray.includes(myText);
}

let result1 = inArray('Safari', array1);

if (result1) {
    alert('Есть слово')
} else {
    alert('Нет')
}

let result2 = inArray('sadasd', array2);

if (result2) {
    alert('Есть слово')
} else {
    alert('Нет')
}
*/


/* еще вариант:
// 67.  Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
alert(`Вам дан массив: ['a', 'b', 'c', 'd']`);
let arrayInput = ['a', 'b', 'c', 'd'];
let textElemInput = prompt(`Введите элемент массива, который необходимо найти в нем`);


function inArray(textElem, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == textElem)
            return true;
    }
    return false;
}
let result = inArray(textElemInput, arrayInput);

alert(`Существует ли введенный вами элемент в приведенном массиве?\n${result}`);
*/






/* 72. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. 
*/

/*
var array;
let sum;
let itemNum;
let arrayVolume;


sum = 0;
itemNum = 0;
arrayVolume = +prompt("Введите размер массива");
var array = new Array;
//кста цикл с  новыми элементами массива работает только  
//при объявлении его аля объект.

for(let i = 0;i<arrayVolume ;i++){
    array[i] = +prompt ("введите значение элемента       массива" + i) ;

}

for(let i = 0;i<array.length;i++){
    sum += array[i];
    itemNum = i+1;

    if(perescet>10){
        i = i+array.length
        itemNum++;
    } 
}

alert ("сумма элементов массива" + sum);
alert("элемент  при котором сумма элементов больше10 это  " + itemNum);
*/



/***85. Создать ассоциативный массив и занести в него десять элементов по принципу: "фамилия" -
"дата рождения". Удалить из массива всех людей, родившихся летом. Формат записи числа
18 april 1956. Вывести массив до удаления и после на экран, каждый с новой строки.
Пример записи в массиве: $arr['Иванов'=&gt;'18 april 1956'];.***/

// let arr = {
//     'Smith': '18 january 1956',
//     'Ivanov': '18 november 1956',
//     'Petrov': '18 december 1956',
//     'Sidorov': '18 february 1956',
//     'Kuznetsov': '18 march 1956',
//     'Morozov': '18 june 1956',
//     'Loor': '18 july 1956',
//     'Kon': '18 august 1956',
//     'Chudov': '18 september 1956',
//     'Li': '18 november 1956'
// };


/*
let arr = new Map([
    ['Smith', '18 january 1956'],
    ['Ivanov', '18 november 1956'],
    ['Petrov', '18 december 1956'],
    ['Sidorov', '18 february 1956'],
    ['Kuznetsov', '18 march 1956'],
    ['Morozov', '18 june 1956'],
    ['Loor', '18 july 1956'],
    ['Kon', '18 august 1956'],
    ['Chudov', '18 september 1956'],
    ['Li', '18 november 1956']
]);

const summerMonths = ['june', 'july', 'august'];

function mapArrayToText(arr) {
    let result = '';
    arr.forEach(function(value, key) {
        result = result + "\n" + key + ' ' + value;
    });
    return result;
}

alert('До: ' + mapArrayToText(arr));

function bornInSummer(arr) {
    let resultArray = arr;
    arr.forEach(function(value, key) {
        let month = value.replace(/[0-9]/g, '').replace(/\s/g, '');
        if (summerMonths.includes(month)) {
            resultArray.delete(key);
        }
    });
    return resultArray;
}

let result = bornInSummer(arr);

alert('После: ' + mapArrayToText(result));
*/






/***70. Получите url-адрес текущей страницы и проверьте, что строка заканчивается на .php.***/
/*
let currentLocation = window.location.href;

if (currentLocation.substr(-4) === '.php') {
    alert('Заканчивается на .php')
} else {
    alert('Не заканчивается на .php')
}
*/

// еще вариант
/*
let fileName = document.location.href;
let extension = fileName.split('.').pop();

if (extension == "php") {
    alert(`Текущая ссылка имеет расширение ".php"`);

} else {
    alert(`Текущая ссылка имеет расширение, отличное от заданного в параметрах задачи, а точнее имеет расширение ".html"`);
}
*/






/***73. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое
число и возвращает сумму его цифр.***/

/*
let digit = prompt("Введите число");

function getDigitsSum(digit) {
    let sum = 0;
    for (let i = 0; i < digit.length; i++) {
        sum += Number(digit[i]);
    }
    return sum;
}
alert(getDigitsSum(digit));
*/


// еще вариант
/*
let digit = parseInt(prompt(`Введите число:`));

function getDigitsSum(n) {
    let sum = 0;
    for (let i of n.toString()) {
        let num = parseInt(i);
        sum += num;
    }
    return (sum);
}
alert(`Сумма цифр числа: ${getDigitsSum(digit)}`);
*/

// еще вариант
/*
let numInput = parseInt(prompt(`Введите число:`));

function getDigitsSum(digit) {

    let digitOfString = digit.toString();
    let result = 0;

    for (let numeral of digitOfString) {
        let numeralNumb = parseInt(numeral);
        result += numeralNumb;
    }
    return (result);

}
alert(`Сумма цифр введенного вами числа:\n${getDigitsSum(numInput)}`);
*/




/***54. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его
цифры. И так, пока сумма не станет однозначным числом (9 и менее).***/
/*
let myNum = 13579;

let myString = myNum.toString();

let result = 0;

for (let i = 0; i <= myString.length; i++) {
    if (+myString[i] === 9) {
        result = myString[i];
        break;
    } else {
        let tempResult = result + +myString[i];
        if (tempResult <= 9) {
            result = tempResult;
            continue;
        } else {
            break;
        }
    }
}

alert('Result = ' + result);
*/



// еще вариант
/*
let digit = parseInt(prompt(`Введите число:`));

function getDigitsSum(n) {
    let sum = 0;
    for (let i of n.toString()) {
        let num = parseInt(i);
        sum += num;
    }
    return (sum);
}

while (digit > 9) {
    digit = getDigitsSum(digit);
}
alert(`Сумма цифр числа: ${getDigitsSum(digit)}`);
*/


// еще вариант
/*
let numInput = prompt(`Введите число:`);

function addNum(num) {
    let numStr = num.toString();
    let result = 0;

    for (let numeral of numStr) {
        let numeralNumb = parseInt(numeral);
        result += numeralNumb;
    }
    return result;
}

let inputResult = parseInt(numInput);

while (inputResult > 9) {
    inputResult = addNum(inputResult);
}

alert(`Сумма цифр введенного вами числа:\n${inputResult}`)
*/



// 80.  1. Создай массив чисел. 2. Добавь в массив 10 чисел с клавиатуры. 3. Вывести на экран длину самой длинной последовательности повторяющихся чисел в списке.  Пример для списка <i>2, 4, 4, 4, 8, 8, 4, 12, 12, 14</i>: 3

/*
let arr = [1, 2, 2, 3, 5, 6, 6, 6, 9, 10];

let result = {};

for (let i = 0; i < arr.length; ++i) {
    let x = arr[i];
    if (result[x] != undefined)
        ++result[x];
    else
        result[x] = 1;
}
for (let key in result)
    document.write('число' + key + ' == ' + result[key] + ' раза <br>');

*/






// 1 Вариант (факториал с поммощью цикла)

// let numInput = prompt(`Введите число:`);

// function factorial(x) {
//     let result = 1;
//     for (let i = 1; i <= x; i++) {
//         result *= i;
//     }
//     return result;
// }

// alert(`Факториал введенного вами числа:\n${factorial(numInput)}`);


// 2 Вариант (факториал с помощью рекурсии)
/*
let numInput = prompt(`Введите число:`);

function factorialRecur(x) {
    if (x == 0) return 1;
    else return factorialRecur(x - 1) * x;
}

alert(`Факториал введенного вами числа:\n${factorialRecur(numInput)}`);
*/