let userName='abhishek';

let numbers:number[]=[1,4,3,6];

let friends:string[];

friends=["ram","shyam","rami"];
console.log(friends);


console.log(numbers);

friends.forEach((value)=>{

          console.log(value.toUpperCase());

    


});

let newFriends=friends.map((value)=>{

    return value.toUpperCase();

});

console.log(newFriends);


function displayUserId(userId:string):string{

    console.log("user id is "+userId);
    return userId;
}


//union type

let userId: (string |number)="jgsdjhfgjhf";

let myArray:(string|number)[]=["one",1];


//tuple

let skill:[string,number]=["programming",400];

console.log(skill);

console.log(skill[0]);


console.log(skill[1]);

//Enum

enum DAYS{

    MON,
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN,
}

console.log(DAYS.MON);


//unkonwn

function myFun(){

 return "this is value";

}

let value:unknown=myFun();

//console.log(value.toUpperCase());


function myFun1(value:DAYS){


    switch(value){

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


///// Type Alias

type xyz=string;

let address:xyz="Mumbai";

console.log(typeof address);


///// Function

let x:(a:number,b:number)=>number=function myFunNew(a: number,b:number):number {

     return a+b;
};


let person:{
    firstName:string,
    lastName:string,
    getFullName:()=>string;

};

 person={

    firstName:"Abhishek",
    lastName:"kumar",
    getFullName:function(){

        return this.firstName+" "+this.lastName;

    } ,


};

console.log("My name is::::------>"+person.getFullName());



//Functions


function addTwoNumbers(a:number,b:number):number{

    return a+b

}

addTwoNumbers(3,9)


function addAllNumbers(items:number[]):number{

const total=items.reduce((a,c)=>a+c,0)
console.log(total)
return total

}


addAllNumbers([2,4,6,7,8])


///// Any Type


let age:any


age=10
age='name'

let title

title=25

title={

    hello:'world'
}

// Any type in arrays


let things :any []=['hello',true,30,null]

things.push({id:123})

// functions and any

function addTogether(value: any):any{

return value+value

}

const resultOne=addTogether('hello')

const resultTwo=addTogether(3)












