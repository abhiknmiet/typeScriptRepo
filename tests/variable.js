var userName = 'abhishek';
var numbers = [1, 4, 3, 6];
var friends;
friends = ["ram", "shyam", "rami"];
console.log(friends);
console.log(numbers);
friends.forEach(function (value) {
    console.log(value.toUpperCase());
});
var newFriends = friends.map(function (value) {
    return value.toUpperCase();
});
console.log(newFriends);
function displayUserId(userId) {
    console.log("user id is " + userId);
    return userId;
}
//union type
var userId = "jgsdjhfgjhf";
var myArray = ["one", 1];
//tuple
var skill = ["programming", 400];
console.log(skill);
console.log(skill[0]);
console.log(skill[1]);
//Enum
var DAYS;
(function (DAYS) {
    DAYS[DAYS["MON"] = 0] = "MON";
    DAYS[DAYS["TUE"] = 1] = "TUE";
    DAYS[DAYS["WED"] = 2] = "WED";
    DAYS[DAYS["THU"] = 3] = "THU";
    DAYS[DAYS["FRI"] = 4] = "FRI";
    DAYS[DAYS["SAT"] = 5] = "SAT";
    DAYS[DAYS["SUN"] = 6] = "SUN";
})(DAYS || (DAYS = {}));
console.log(DAYS.MON);
//unkonwn
function myFun() {
    return "this is value";
}
var value = myFun();
//console.log(value.toUpperCase());
function myFun1(value) {
    switch (value) {
        case DAYS.MON:
            console.log("This is monday!!");
            break;
        case DAYS.FRI:
            console.log("This is Friday!!");
            break;
        default:
            console.log("Not a valid days");
    }
}
myFun1(DAYS.MON);
var address = "Mumbai";
console.log(typeof address);
///// Function
var x = function myFunNew(a, b) {
    return a + b;
};
var person;
person = {
    firstName: "Abhishek",
    lastName: "kumar",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },
};
console.log("My name is::::------>" + person.getFullName());
//Functions
function addTwoNumbers(a, b) {
    return a + b;
}
addTwoNumbers(3, 9);
function addAllNumbers(items) {
    var total = items.reduce(function (a, c) { return a + c; }, 0);
    console.log(total);
    return total;
}
addAllNumbers([2, 4, 6, 7, 8]);
