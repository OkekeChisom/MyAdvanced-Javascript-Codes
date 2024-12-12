// callback function is a function passed into another function as an
// argument or parameter, which is then invoked inside the outer function

function greetUser(name, callback, callback2) {
    console.log(`hello, ${name}`)
    callback()
    callback2()
}

function displayWelcomeMessage() {
    console.log("welcome to the platform")
}
function displayWelcome() {
    console.log("welcome")
}

greetUser("charles", displayWelcomeMessage, displayWelcome);


function answerQuestions( name, callbackOne, callbackTwo, callbackThree) {
    console.log(`welcome  ${name} we have all the answers you need`)
    callbackOne()
    callbackTwo()
    callbackThree()
}

function answerOne() {
    console.log('He is a fish pie ');
}

function answerTwo() {
    console.log('He is not a god');
}

function answerThree() {
    console.log('He is a detective ');
}


answerQuestions("Esther", answerOne, answerTwo, answerThree)


function justMe(name, callbackMe, callbackSch, callbackWhere) {
    console.log(`hello ${name} this is all about me oooh`);
    callbackMe()
    callbackSch()
    callbackWhere()
};

function aboutMe() {
    console.log("My name is Lorenzo Klaus");
}
function aboutSchool() {
    console.log("Am at New Horizon studying fullstack");
}
function aboutWhere() {
    console.log("I must work for Microsoft inc ");
}

justMe('Theresa', aboutMe, aboutSchool, aboutWhere);
