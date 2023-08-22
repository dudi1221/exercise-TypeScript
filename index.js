//1
function bigNumber(num1, num2) {
    if (num1 > num2)
        return num1;
    return num2;
}
// console.log(bigNumber(3, 3));
//2
function displayBigNumber(num1, num2) {
    if (num1 > num2)
        console.log(num1);
    else
        console.log(num2);
}
// console.log(displayBigNumber(2, 3));
//3
function evenNumber(num) {
    if (num % 2 === 0)
        return 'Is even number';
    else
        return 'Is not an even number';
}
// console.log(evenNumber(5));
//4
function lengthStr(str) {
    return str.length;
}
// console.log(lengthStr('dudi hoffman'));
//5
function arrayOfNumbers(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(i);
    }
    return arr;
}
// console.log(arrayOfNumbers(10));
//6
function highestNumber(arr) {
    var num = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (num < arr[i]) {
            num = arr[i];
        }
    }
    return num;
}
var persom = {
    name: 'david',
    age: 22,
    isStudent: true,
};
//8
function printPerson(persom) {
    console.log("".concat(persom.name, ", ").concat(persom.age, ", ").concat(persom.isStudent));
}
//9
function isMinor(persom) {
    if (persom.age < 18)
        return true;
    else
        return false;
}
var reader1 = {
    name: 'dudi',
    age: 22,
    isStudent: true,
    favoriteBook: {
        Title: 'batata',
        Author: 'lapid',
        Year: 1978,
    }
};
var reader2 = {
    name: 'Emily',
    age: 30,
    isStudent: false,
    favoriteBook: {
        Title: 'The Starlight Chronicles',
        Author: 'Amanda Rivers',
        Year: 2015,
    }
};
var reader3 = {
    name: 'Alexandre',
    age: 28,
    isStudent: true,
    favoriteBook: {
        Title: 'Eternal Echoes',
        Author: 'Serena Quinn',
        Year: 2006,
    }
};
var reader4 = {
    name: 'Sofia',
    age: 25,
    isStudent: false,
    favoriteBook: {
        Title: 'The Enchanted Forest',
        Author: 'Liam Anderson',
        Year: 2020,
    }
};
var arrReaders = [reader1, reader2, reader3, reader4];
function theOldestReader(arrReaders) {
    var oldestReader = arrReaders[0];
    for (var i = 0; i < arrReaders.length; i++) {
        if (oldestReader.age > arrReaders[i].age) {
            oldestReader = arrReaders[i];
        }
    }
    return oldestReader.name;
}
// console.log(theOldestReader(arrReaders));
function theOldestBook(arrReaders) {
    var oldestBook = arrReaders[0];
    for (var i = 0; i < arrReaders.length; i++) {
        if (oldestBook.favoriteBook.Year > arrReaders[i].favoriteBook.Year) {
            oldestBook = arrReaders[i];
        }
    }
    return oldestBook.favoriteBook;
}
// console.log(theOldestBook(arrReaders));
