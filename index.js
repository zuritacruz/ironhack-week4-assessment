// Ejercicio 1: Crea una función que devuelva la multiplicación de dos números

// ------------- Traditional function -------------
// function product(x, y) {
//     return x * y;
// }

// ------------- Arrow function -------------
let product = (x, y) => x * y;

console.log(product(5, 9));


// Ejercicio 2: Devuelve el mayor de dos números

// ------------- Traditional function -------------
// function maxOfTwoNumbers(a, b) {
//     if (a >= b) {
//         return a;
//     } else return b;
// }

// ------------- Arrow function -------------
let maxOfTwoNumbers = (a, b) => a >= b ? a : b;

console.log(maxOfTwoNumbers(3, 9));


// Ejercicio 3: Devuelve el mayor de tres números. Cuidado con los negativos
function maxOfThreeNumbers(a, b, c) {
    // Convierte argumentos en un array 
    let nums = [...arguments];
    // Recoge el valor menor dentro del array 
    let max = Math.min(...arguments);

    nums.forEach((element) => {
        if (element > max) {
        max = element;
        }
    });

    return max;
}
console.log(maxOfThreeNumbers(5, 15, 7));


// Ejercicio 4: IsEven. Le pasamos un número y devuelve true si es par, false si no

// ------------- Traditional function -------------
// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else return false;
// }

// ------------- Arrow function -------------
let isEven = (num) => num % 2 === 0 ? true : false;

console.log(isEven(7));


// Ejercicio 5: sumArray (numbers). Calcular la suma de un array de números

let sumNumArr = [5, 4, 3, 5, 2, 1];
// ------------- Traditional function -------------
// function sumArray(numbers) {
//     let totalSum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         totalSum += numbers[i];
//     }
//     return totalSum;
// }

// ------------- Arrow function -------------
let sumArray = (numbers) => {
    let totalSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        totalSum += numbers[i];
    }
    return totalSum;
}

console.log(sumArray(sumNumArr));


// Ejercicio 6: Devuelve el mayor número dentro de un array de números. Devolver false si no hay números

let arrNum = [1, 4, 3, 7, 22, 32, 2, 43, 6];
// ------------- Traditional function -------------
// function maxOfArray(numbers) {
//     let maxNum = 0;
//     numbers.forEach((element) => {
//         if (element > maxNum) {
//             maxNum = element;
//         }
//     })
//     return maxNum;
// }

// ------------- Arrow function -------------
let maxOfArray = (numbers) => Math.max(...numbers);

console.log(maxOfArray(arrNum));


// Ejercicio 7: Encuentra la string más larga de un array

let arrWords = ['pepe', 'hola amigos', 'no', 'josefa'];
// ------------- Traditional function -------------
// function longestStrings(strings) {
//     let longestWord = '';
//     strings.forEach((word) => {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     })
//     return longestWord;
// }

// ------------- Arrow function -------------
let longestStrings = (strings) => {
    let longestWord = '';
    strings.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    })
    return longestWord;
}

console.log(longestStrings(arrWords));


// Ejercicio 8: Dado un objeto con las propiedades firstName y lastName, devolver un string con el nombre completo

let person = {
    firstName: 'Cesar',
    lastName: 'Zurita'
}
// ------------- Traditional function -------------
// function getFullName(personObj) {
//     return `${personObj.firstName} ${personObj.lastName}`
// }

// ------------- Arrow function -------------
let getFullName = (personObj) => `${personObj.firstName} ${personObj.lastName}`;

console.log(getFullName(person));


// Ejercicio 9: Mirar si existe una determinada palabra dentro de un array

let arrFindWord = ['pepe', 'hola amigos', 'no', 'josefa'];
// ------------- Traditional function -------------
// function doesWordExist(wordsArr, word) {
//     let exists = false;
//     for (let i = 0; i < wordsArr.length; i++) {
//         if (wordsArr[i] === word) {
//             exists = true;
//         }
//     }
//     return exists;
// }

// ------------- Arrowfunction -------------
let doesWordExist = (wordsArr, word) => wordsArr.includes(word);

console.log(doesWordExist(arrFindWord, 'no'));


// Ejercicio 10: Función que recibe un array de palabras y debe devolver la primera que no se repite

let wordArr10 = ['pedro', 'cesar', 'juan', 'pedro', 'maria', 'juan', 'pedro', 'carlos']
// ------------- Traditional function -------------
// function findUnique(wordsArr) {
//   let word = "";
//   wordsArr.every((el) => {
//     const repetitions = wordsArr.filter((x) => x === el);
//     if (repetitions.length === 1) {
//       word = el;
//       return false;
//     } else return true;
//   });
//   return word;
// }

// function findUnique(wordsArr) {
//     for (let i = 0; i < wordsArr.length; i++) {
//         if (wordsArr.indexOf(wordsArr[i]) === wordsArr.lastIndexOf(wordsArr[i])) {
//             return wordsArr[i];
//         }
//     }
// }

// ------------- Arrow function -------------
let findUnique = (wordsArr) => {
    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr.indexOf(wordsArr[i]) === wordsArr.lastIndexOf(wordsArr[i])) {
            return wordsArr[i];
        }
    }
}

console.log(findUnique(wordArr10))


// Ejercicio 11: Encontrar el máximo en un array de dos dimensiones

const twoDimArr1 = [
            [1, 2, 15],
            [22, 3, 8],
            [5, 12, 9]
] 

// ------------- Traditional function -------------
// function maxTwoDimArray(matrix) {
//     let biggestNum = 0;
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] > biggestNum) {
//           biggestNum = matrix[i][j];
//         }
//       }
//     }
//     return biggestNum;
// }

// ------------- Arrow function -------------
let maxTwoDimArray = (matrix) => {
    let biggestNum = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > biggestNum) {
          biggestNum = matrix[i][j];
        }
      }
    }
    return biggestNum;
}

console.log(maxTwoDimArray(twoDimArr1));