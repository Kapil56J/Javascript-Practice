// Call, Apply, Bind
// In JS this Call, Apply, Bind are use to control the this keyword when calling a function.

// Call : With the call() method, you can write a method that can be used on different objects.
// With call(), an object can use a method belonging to another object.

const Person = {
    name: "Kapil"
};

function greet (greeting) {
    console.log(`${greeting} ${this.name}` );
}

greet.call(Person, "Hello");

const person = {
    fullName : function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

const Person1 = {
    firstName: "Kapil",
    lastName: "Jadhav"
};

person.fullName.call(Person1);

// Apply : Calls the function immediately, but arguments are passed as an array.
//  apply() works like call(), but arguments are passed inside an array.

const person2 = {
    name: 'Kaps'
};

function greet2(greetings, emoji) {
    console.log(`${greetings} ${this.name} ${emoji}`);
}
greet2.apply(person2,[ "Hi","DJ"]);

// bind: Returns a new function with the new this value but does NOT call it immediately.
// bind() does not execute the function immediately. Instead, it returns a new function, which can be called later.

const person3 = {
    firstName: "Kapil",
}

function greet3(greeting) {
    console.log(`${greeting} ${this.firstName}` );
}

const newFun = greet3.bind(person3);
newFun("Bind");