function add(n1: number, n2: number) {
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const result = add(number1, number2);
console.log(result);

let person = {
    name: 'Max',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
}
enum Role { ADMIN, READ_ONLY, AUTHOR }; // Enum

// Object type
const personTwo: {
    name: string; //string
    age: number; //number
    hobbies: string[]; //array of strings
    role: [number, string]; //tuple
    position: number;
} = {
    name: 'Max',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    position: Role.ADMIN
}

let favoriteActivities: any[];
favoriteActivities = ['Sports', 1];

// any type
let anyType: any = 'hello';
anyType = 25;

// any type array - AVOID THIS
let anyTypeArray: any[] = ['hello', 25];

console.log('Hello, my name is ' + personTwo.name + ' and I am ' + personTwo.age + ' years old');

// Aliases
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

// Union types
function combine(
    input1: Combinable,
    input2: number | string,
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

// Return types
function addAndHandle(n1: number, n2: number): number {
    return n1 + n2;
}

// Void return type
function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(addAndHandle(2, 3));

// Function types
type AddFunc = (n1: number, n2: number) => number;
let combinedValues: (a: number, b: number) => number;

function addAndHandle2(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle2(2, 3, (result) => {
    console.log(result);
});

// Unknown type
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'Max';
userName = userInput as string;

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}
