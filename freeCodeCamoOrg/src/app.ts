//Custom type - Aliases
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface IUser {
    id: ID;
    name: string;
    age?: number;
    getMessage(): string;
}

const user: IUser = {
    id: '1',
    name: 'John',
    age: 30,
    getMessage() {
        return 'Hello! ' + this.name;
    }
};

const user2: IUser = { 
    id: '2',  
    name: 'Mark',
    getMessage() {  
        return 'Hello! ' + this.name;
    }
};

console.log(user.getMessage());

let errorMessage: string | null = null;

const user3: IUser | null = null;

// any, void, never, unknown