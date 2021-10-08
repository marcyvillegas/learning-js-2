
/* Helpful YT links

   - JavaScript OOP Crash Course (ES5 & ES6): https://www.youtube.com/watch?v=vDJpGenyHaA
   - JavaScript Prototypal inheritance: https://www.youtube.com/watch?v=1UTqFAjYx1k&t=27s
   - Object.setPrototypeOf() Method: https://www.youtube.com/watch?v=mX7uWf9BL8A

   - Understanding This, Bind, Call, and Apply in JavaScript: https://www.digitalocean.com/community/conceptual_articles/understanding-this-bind-call-and-apply-in-javascript

   - Promises: https://www.youtube.com/watch?v=DHvZLI7Db8E
   - Asynch Await: https://www.youtube.com/watch?v=V_Kr9OSfDeU&t=304s

*/

/* Learning JS Part 2

    TOPICS:
    - OBJECT CREATE METHOD
    - OBJECT LITERALS
    - FACTORY FUNCTIONS
    - CLASS CONSTRUCTORS
    - PROTOTYPES
    - INHERITANCE
    - Object.setPrototypeOf METHOD
    - call()
    - apply()
    - bind()
    - STATIC METHOD
    - ENCAPSULATION
    - POLYMORPHISM
    - ARRAY METHODS
    - ERROR HANDLING
    - CALL BACK FUNCTION
    - PROMISES
    - ASYNCH AWAIT

*/

//---------------------------------------------------------------------------------------------------------

/*
    OBJECT ORIENTED PROGRAMMING
    - Encapsulation -> reduce complexity and increase reusability
    - Abstraction -> reduce complexity and isolate impact of changes
    - Inheritance -> eliminate redundant code
    - Polymorphism -> refactor switch/case statements
*/

// OBJECT CREATE METHOD
let person = {      // OBJECT LITERALS
    name: "Barney",
    tellName() {
        console.log(`Hi I am ${this.name}`);
    }
};

//Object created
let created = Object.create(person);

created.name = "Mina";
created.tellName();

// FACTORY FUNCTION
let PersonFF = (name, id) => {
    return {
        name,
        id,
        speak() {
            console.log(`${name} and ${id}`);
        },
    };
}

//Object marcy
let marcy = PersonFF("sdaf", 234);
marcy.speak();

//----------------------------------------------------------------------------------------------------------------

// CLASS - ES6
let PersonC = class {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    talk() {
        console.log(`Hi, I am ${this.name} and I am ${this.id}`);
    }
};

//Object human
let human = new PersonC("zxc", 324);
human.talk();

let EmployeeC = class extends PersonC {  // INHERITANCE
    constructor(name, id, company) {
        super(name, id);
        this.company = company;
    }

    //Getter
    getName() {
        return this.name;
    }

    //Setter
    setName(newName) {
        this.name = newName;
    }

    employeeInfo() {
        console.log(`I am ${this.name} and my ID is ${this.id} in the company ${this.company}`);
    }
};

//Object employee
let employee = new EmployeeC("Marcy", 342, "JYP");
employee.employeeInfo();

//Used the setter method
employee.setName("jeff");
console.log(employee.name);

// POLYMORPHISM -> Object employee can use the other class' talk() method
employee.talk();

//------------------------------------------------------------------------------------------------------------------------

// CONSTRUCTORS - ES5
let PersonProto = function (name, id) {
    this.name = name;
    this.id = id;
};

// adding a method in PersonProto's prototype
PersonProto.prototype.talk = function () {
    console.log(`I am ${this.name} and ${this.id}`);
};

//Object mark
let mark = new PersonProto("qwe", 324);
mark.talk();

// INHERITANCE for prototype
let EmployeeProto = function (name, id, company) {
    PersonProto.call(this, name, id);   //calls the constructor of PersonProto and has the parameters of the Object EmployeeProto and the property to be inherited
    this.company = company;
};

//Adding method to EmployeeProto's prototype
EmployeeProto.prototype.employeeInfo = function () {
    console.log(`My name is ${this.name} and my id is ${this.id} and I am in the company ${this.company}`);
}

//EmployeeProto.prototype = Object.create(PersonProto.prototype); //-> use this if you want to use other prototype's methods from another prototype
//EmployeeProto.prototype.constructor = EmployeeProto; //-> to change the constructor

//Object chae
let chae = new EmployeeProto("Chaeyoung", 17, "JYP");
chae.employeeInfo();
//chae.talk();  //-> from the PersonProto prototype 
console.log(chae);

//---------------------------------------------------------------------------------------------

// Object.setPrototypeOf(obj , obj that has the prototype we want to use) -> this is used to do inheritance in object literals

//---------------------------------------------------------------------------------------------

// call() -> call(Object, parameter), use object as parameter then uses its property and values to successfully invoke the function
let obj1 = { num: 4 };

let addNum = function (num2) {
    return this.num + num2
}

console.log(addNum.call(obj1, 1)); //5


// apply() -> apply(Object, array), same with call() but uses arrays
let obj2 = { num: 2 };

let array = [2, 4];

let addNums = function (num1, num2) {
    return this.num + num1 + num2;
}

console.log(addNums.apply(obj2, array)); //8


// bind() -> bind(Object), binds function with an object then returns a function
let obj3 = { num: 1 };

let minusNums = function (num1, num2) {
    return this.num - num1 - num2;
}

let func = minusNums.bind(obj3);

console.log(func(5, 1)); //-5

//------------------------------------------------------------------------------------

// ENCAPSULATION -> getters and setters
class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    getWidth() {
        return this.width;
    }

    setWidth(newWidth) {
        this.width = newWidth;
    }

    // STATIC METHOD -> directly invoked from the class
    static isEqual(a, b) {
        return a.width + a.height === b.width + b.height;
    }
}

let square1 = new Square(2);
let square2 = new Square(3);

console.log(Square.isEqual(square1, square2)); //false 

let square3 = new Square();
square3.setWidth(4); // set width to 4
console.log(square3.getWidth()); //4


//-----------------------------------------------------------------------------------

// ARRAY METHODS

// pop() -> removes last element
// push() -> adds element as last
// toString() -> returns string
// join() -> returns string with something in between the elements
// splice() -> splice(index to remove, number of elments to remove, the new element you want to add)
// sort() -> sorts the array alphabetically or according in integer
// shift() -> removes the first element
// unshift() -> adds element before the first element
// reverse() -> reverses the array
// concat() -> merges two arrays
// slice() -> creates an copy of an array, slice(first index, last index)
// filter() -> creates a new array with limitations, filter(function with limitations)
// find() -> returns the first elment that satisfy the function, find(fuunction with limitations)
// forEach() -> goes through the elment and does the function, forEach(element => function with element)
// map() -> goes through the elment and also does the function , map(element => function with element)
// reduce() -> does the function parameter in the first elment to the next element, reduce(function with two parameters, new element you want to add before the first element)
// every() -> returns a boolean value based on the function paramater, every(function to satisfy)
// some() -> returns a boolean value wherein at least one satisfy the function paramter, some(function to satisfy at least once)

//-----------------------------------------------------------------------------------

// ERROR HANDLING -> try, catch, throw and finally
try {
    another(); //This is undefined and will cause an error
} catch (er) {
    console.error("This is the catch block");
} finally {
    console.log("Error handling was a success, finally block");
}

// THROW
function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw 'Parameter is not a number!'; //throw an error
    }
}

try {
    getRectArea(3, 'A');
} catch (er) {
    console.error(er);
    // expected output: "Parameter is not a number!"
}

//------------------------------------------------------------------------------------------------------

// CALL BACK FUNCTION -> calls a function back
setTimeout(() => {
    alert("This shows after 4 seconds using setTimeout method");
}, 4000);

// High order function - takes a function as a parameter

const posts = [{ title: "Post One", body: "This is post one" }, { title: "Post Two", body: "This is post two" }];

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title}</i>`;
            document.body.innerHTML = output;
        });
    }, 1000);
}

function createPost(post, callback) {   // callback as a parameter
    setTimeout(() => {
        posts.push(post);
        callback();                    // calls getPost before finishing the function
    }, 2000);
}

getPosts(); //calling getPosts

createPost({ title: "Post Three", body: "This is post three" }, getPosts); // getPosts as the callback function

//--------------------------------------------------------------------------------------------------

// PROMISE -> promise that it will be done in the future, new Promise((resolve, reject) => { function with resolve and reject })
let promiseExample = new Promise((resolve, reject) => { // no parameters

    setTimeout(() => {
        let a = 1 + 1;

        if (a === 1) {
            resolve("Success!");        // resolve message
        } else {
            reject("Not successful");  // reject or error message
        }
    }, 5000);
});

promiseExample.then((message) => {
    console.log(message); // console logs resolve message
}).catch((e) => {
    console.error(e);      // console logs reject or  error message
})


// using Promise.all and race
const vid1 = new Promise((resolve, reject) => {
    resolve("Vid1 complete");
    reject("Vid1 has error");
});

const vid2 = new Promise((resolve, reject) => {
    resolve("Vid2 complete");
    reject("Vid2 has error");
});

const vid3 = new Promise((resolve, reject) => {

    let video = "corrupted";

    if (video !== "corrupted") {
        resolve("Vid3 complete");
    } else {
        reject("Vid3 has error");
    }
});

Promise.all([
    vid1,
    vid2,
    vid3
]).then((message) => {
    console.log(message);
}).catch((x) => {
    console.error(x);
})

/*
    Promise.all -> runs all the promises at the same time. If one is an error the whole promise will be an error
    Promise.race -> displays the 
*/

//---------------------------------------------------------------------------------------------------------------

// ASYNCH AWAIT -> waits a function to finish and returns response
function makeRequest(company) {
    return new Promise((resolve, reject) => {
        console.log(`Making a request in ${company}`);

        if (company === "Spotify") {
            resolve("Okay, making request to Spotify");
        } else {
            reject(`You can only request to Spotify and not to ${company}`);
        }
    })
}

function processRequest(response) {         // response here is from ^ this function's resolve message
    return new Promise((resolve, reject) => {
        console.log("Processing request");
        resolve(response);
    })
}

/* Promise approach

makeRequest("Apple Music").then(response => {   // response parameter here is makerequest()'s resolve message which also the parameter of processRequest()
    console.log("Response has been received");
    return processRequest(response);    // returns processRequest to continue the promise then
}).then(processedResponse => {
    console.log(processedResponse);     // processResponse here is from the makeRequest()'s resolve message
}).catch((err) => {
    console.error(err);                  // makeRequest()'s reject message is here because it will print as an error message using
})                                      // catch

*/

// Async await approach -> needs a function that has the waiting code
async function tryAsynch() {
    try{
    const response = await makeRequest("Spotify");  // response variable is the resolve message of makeRequest() which is the parameter of processRequest()
    console.log("Response has been received");      // display after makeRequest() 
    const processedResponse =   await processRequest(response);
    console.log(processedResponse);                 // display the resolve message from makeRequest()
    } catch(er){
        console.error(er)
    }
}

tryAsynch();    // invoke the async function

