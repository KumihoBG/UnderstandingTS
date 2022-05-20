"use strict";
const user = {
    id: '1',
    name: 'John',
    age: 30,
    getMessage() {
        return 'Hello! ' + this.name;
    }
};
const user2 = {
    id: '2',
    name: 'Mark',
    getMessage() {
        return 'Hello! ' + this.name;
    }
};
console.log(user.getMessage());
let errorMessage = null;
const user3 = null;
//# sourceMappingURL=app.js.map