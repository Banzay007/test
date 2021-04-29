/* 34. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
*/

let array = [1, 4, 6, 5];

for (let i=0; i<=array.length; i++) {
        if (array[i] == 5) {
            alert("true");
        } 
alert("false");               
};




/*
let array = [1, 5, 10, 145, -89];

function isFive (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    } 
    return false
}

console.log(isFive(array, 145));

*/


 
/*
let arr = [1, 2, 5, 6];


// 1 вариант решения

// function any() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 5) {
//             return true;
//         }
//     }

//     return false;
// }

// let result = alert(any());



// 2 вариант решения

// if (arr.includes(5)) {
//     alert(`Массив содержит число "5"`);
// } else {
//     alert(`Массив НЕ содержит число "5"`);
// }

// 3 вариант решения

let result = (arr.includes(5)) ? `Массив содержит число "5"` : `Массив НЕ содержит число "5"`;

alert(result);
*/



