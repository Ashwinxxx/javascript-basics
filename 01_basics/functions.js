function sayMyName(){
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("w");
    console.log("i");
    console.log("n");
}
sayMyName()
function addTwoNumbers(number1, number2){
     console.log(number1 + number2);
}
function addTwoNumbers(number1, number2){

     let result = number1 + number2
    return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
 console.log(loginUserMessage("ashwin"))
 console.log(loginUserMessage("ashwin"))

 function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "ashwin",
    prices: 199
}
const user1 = {
    username: "lojri",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
