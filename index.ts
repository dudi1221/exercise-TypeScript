//1
function bigNumber(num1: number, num2: number):number {
    if (num1 > num2) return num1;
    return num2;
}
// console.log(bigNumber(3, 3));

//2
function displayBigNumber(num1: number, num2: number) {
    if (num1 > num2) console.log(num1);
    else console.log(num2);
}
// console.log(displayBigNumber(2, 3));

//3
function evenNumber(num: number):string {
    if (num %2 === 0) return 'Is even number';
    else return 'Is not an even number';
}
// console.log(evenNumber(5));

//4
function lengthStr(str: string):number {
    return str.length;
}
// console.log(lengthStr('dudi hoffman'));

//5
function arrayOfNumbers(num: number):number[] {
    let arr: number[] = [];
    for (let i: number = 0; i < num; i++) {
        arr.push(i);
    }
    return arr;
}
// console.log(arrayOfNumbers(10));

//6
function highestNumber(arr: number[]):number {
    let num: number = arr[0];
    for (let i: number = 0; i < arr.length; i++) {
        if (num < arr[i]) {
            num = arr[i];
        }
    }
    return num;
}
// console.log(highestNumber([1,3,5,7,9,2,4,6,8]));

//7
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
}

let persom: Person = {
    name: 'david',
    age: 22,
    isStudent: true,
}

//8
function printPerson(persom: Person) {
    console.log(`${persom.name}, ${persom.age}, ${persom.isStudent}`);
}

//9
function isMinor(persom: Person): boolean {
    if (persom.age < 18) return true;
    else return false;
}

//10
interface Book {
    Title: string;
    Author: string;
    Year: number;
}

//11
type Reader = Person & {
    favoriteBook: Book;
}

const reader1: Reader = {
    name: 'dudi',
    age: 22,
    isStudent: true,
    favoriteBook: {
        Title: 'batata',
        Author: 'lapid',
        Year: 1978,
    }
}

const reader2: Reader = {
    name: 'Emily',
    age: 30,
    isStudent: false,
    favoriteBook: {
        Title: 'The Starlight Chronicles',
        Author: 'Amanda Rivers',
        Year: 2015,
    }
}

const reader3: Reader = {
    name: 'Alexandre',
    age: 28,
    isStudent: true,
    favoriteBook: {
        Title: 'Eternal Echoes',
        Author: 'Serena Quinn',
        Year: 2006,
    }
}

const reader4: Reader = {
    name: 'Sofia',
    age: 25,
    isStudent: false,
    favoriteBook: {
        Title: 'The Enchanted Forest',
        Author: 'Liam Anderson',
        Year: 2020,
    }
}

const arrReaders: Reader[] = [reader1, reader2, reader3, reader4];

function theOldestReader(arrReaders: Reader[]):string {
    let oldestReader:Reader = arrReaders[0];
    for (let i: number = 0; i < arrReaders.length; i++) {
        if (oldestReader.age > arrReaders[i].age) {
            oldestReader = arrReaders[i];
        }
    }
    return oldestReader.name;
}
// console.log(theOldestReader(arrReaders));

function theOldestBook(arrReaders: Reader[]):Book {
    let oldestBook:Reader = arrReaders[0];
    for (let i: number = 0; i < arrReaders.length; i++) {
        if (oldestBook.favoriteBook.Year > arrReaders[i].favoriteBook.Year) {
            oldestBook = arrReaders[i];
        }
    }
    return oldestBook.favoriteBook;
}
// console.log(theOldestBook(arrReaders));