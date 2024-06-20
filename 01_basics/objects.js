// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Ashwin",
    "full name": "Ashwin",
    [mySym]: "mykey1",
    age: 18,
    location: "Bangalore",
    email: "shreeashwins581@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email)
 //console.log(JsUser["email"])
 //console.log(JsUser["full name"])
 //console.log(JsUser[mySym])

JsUser.email = "ashwins.com"
//Object.freeze(JsUser)
JsUser.email = "booo.com"
 console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
