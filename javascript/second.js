//import {apiKey} from "./basics";
//import * as utils from "./basics"
//console.log(utils.apiKey )


export default (username , message) => {
    console.log("Arrow functions")
    return username + message
}

/*
* OBJECTS
* */
export const user = {
    name : "Max",
    age: 34,
    greet() {
        console.log("Inside Object functions")
    }
}

console.log(user.name)

/*
* CLASS
* */

export class User {
    constructor(name,age) {
        this.name = name;
        this.age = age
    }

    greet() {
        console.log("hi")
    }
}
