// var, const, let

// var (Function-scoped)
// It is function-scoped (not block-scoped).
// It can be redeclared and updated.
// It is hoisted (moved to the top of the scope), but uninitialized.

function exampleVar() {
    console.log(x) // undefined
    var x = 10;
    if (true) {
        var x = 20; // Same variable (not block-scoped)
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 20 (same variable as inside if)
}
exampleVar();

// let (Block-scoped)
// It is block-scoped.
// It can be updated, but not redeclared in the same scope.
// It is hoisted, but not initialized (cannot be used before declaration).

function exampleLet() {
    // console.log(y) // error
    let y = 5;
    if (true) {
        let y = 7; // Different variable (block-scoped)
        console.log(y); // Output: 7
    }
    console.log(y); // Output: 5 (separate from the one inside if)
}
exampleLet();

// const (Block-scoped, Immutable)
// It is block-scoped.
// It cannot be updated or redeclared.
// It must be initialized at the time of declaration.

function exampleConst() {
    const z = 1;
    if (true) {
        const z = 2; // Different variable (block-scoped)
        console.log(z); // Output: 2
    }
    console.log(z); // Output: 1 (separate from the one inside if)
}
exampleConst();



// Feature	        var	                            let	                    const
// Scope	        Function	                    Block	                Block
// Hoisting	        Yes (initialized as undefined)	Yes (not initialized)	Yes (not initialized)
// Redeclaration	Yes	                            No	                    No
// Reassignment	    Yes	                            Yes	                    No