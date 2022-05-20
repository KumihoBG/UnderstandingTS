//Custom type - Aliases
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface IUser {
    id: ID;
    name: string;
    age?: number;
    getMessage(): string;
    getFullName(): string;
}

const user: IUser = {
    id: '1',
    name: 'John',
    age: 30,
    getMessage() {
        return 'Hello! ' + this.name;
    },
    getFullName() {
        return this.name + ' ' + this.age;
    }
};

const user2: IUser = { 
    id: '2',  
    name: 'Mark',
    getMessage() {  
        return 'Hello! ' + this.name;
    },
    getFullName() {
        return this.name;
    }
};

console.log(user.getMessage());

let errorMessage: string | null = null;

const user3: IUser | null = null;

// any, void, never, unknown
// when we don't return anything, it's void (set of undefined and null)
const doSomething = ():void => {
    console.log('Do something');
}

// any must be avoided, worse type in TS
let foo: any = 'foo'; // it turns off type checking

// functions with never can't be executed to the end
const neverFunc = ():never => {
    throw new Error('Error!');
}

// unknown - you cannot directly assign unknown variables to other types
let vUnknown: unknown = 'foo';
// let vString: string = vUnknown;

// type assertion with "as" operator
const vString: string = vUnknown as string;
let pageNumber:string = '1';
let pageNumberAsNumber: number = (pageNumber as unknown) as number;

// working with the DOM - TS has no connection to the browser and it doesn't know the markup
const btn = document.querySelector('button') as HTMLButtonElement;
btn.addEventListener('click', () => {
    console.log('Clicked');
});


// using classes - everything is public by default. If we write private, it can be used only in the class, not in the instances of it. Protected - can be used only in the class and in the instances of it.
class User implements IUser {
    id: ID;
    name: string;
    age: number;
    private position: string = 'Developer';
    readonly unchangedMessage: string;

    constructor(id: ID, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.unchangedMessage = 'Hello! ' + this.name;
    }

    getMessage(): string {
        return 'Hello! ' + this.name + ', age: ' + this.age + ', position: ' + this.position;
    }

    getFullName(): string {
        return this.name + ' ' + this.age;
    }
}

class Person extends User {
    constructor(id: ID, name: string, age: number) {
        super(id, name, age);
    }
}

const user4 = new User('4', 'Mark', 30);
const person = new Person('5', 'John', 30);

// Generics
// we can use generics to create types that are not specific to a particular type of data
// all generic data types are created by using the <>
// To make interface generic, we need to add <T> after its name
const addId = <T>(obj: T) => {
    return {
        ...obj,
        id: '1'
    };
}

interface GenericInterface<T> {
    id: T;
}

// enums
enum StatusEnum {
    Active,
    Inactive,
    Deleted = 'Deleted'
}

interface IUserWithStatus {
    id: ID;
    name: string;
    age: number;
    status: StatusEnum;
}