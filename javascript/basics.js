//export let apiKey = "asdfasgdfgsddf"
//export let abc = "123123123"
//export default "asdsadasda"

import {user,User} from "/javascript/second.js"

/*
*  VARIABLES
* */
let userMessage = "udit gurani"; // string
let userID = 3; // number

console.log(userMessage,userID);

const userConstant = "Constant value"; // constants
console.log(userConstant);

console.log(5 === 6); // comparison

/*
* FUNCTIONS
* */
function userName(str) {
    console.log(str);
}

userName(userMessage);

function Default(value, message = "total markers") {
    return value + message + "modify value"
}

// Objects
const val = Default(userMessage,userConstant)
console.log(val)
console.log(user)
// Class
const  user1 = new User("Manuel",34);
console.log(user1);

/*
* ARRAYS
* */

const hobbies = ["sports","class","name",3]
console.log(hobbies[0],hobbies)
hobbies.push("New Value")
console.log(hobbies)
const index = hobbies.findIndex((item) => {
    return item === "name"
})
console.log(index)
const newVal = hobbies.map((item) => item + "!")
console.log(newVal)

/*
* DESTRUCTURING
* */
const [firstName,lastName] = ["Max","Mack"]
console.log(firstName,lastName)
const {name: userNameAlias,age} = {
    name: "Max",
    age: 34
}
console.log(userNameAlias,age)

/*
* SPREAD Operator
* */
const hobbiesVal = ["sports","cooking"]
const newArr = [...hobbiesVal]
console.log(newArr)
const  extendedUser = {
    isAdmin: true,
    ...user
}
console.log(extendedUser)

/*
* Conditions
* */
if (10 === 12) {
    console.log("equal")
}else {
    console.log("not equal")
}

for (const val of hobbies) {
    console.log("loop"+ val)
}

/*
* REFERENCE AND PRIMITIVE
* */

let mess = "Hello"
mess = "val"
console.log("Primitive", mess)