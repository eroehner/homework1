import './style.css'
/*//Declaration
var studlyCapVar;
var properCamelCase;
var TitleCaseOver
var a = 2.75;
var b = 25.5;
var c = 10.9;
var d;
var remainder;
var Vorname = "Elias";
var Nachname = "Röhner";
var vollerName;
var firstNameLength=0;
var favColor = "Blau";
var favColorLength;
var firstLetterOfFavColor;
var lastLetterOfFavColor;
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
var mySentence = " ";
mySentence = "Der " + myAdjective + myNoun + myVerb + myAdverb + " zum LIDL " ;
return mySentence;
}
var myArray = ["Ready Player One", "Avatar", "Interstellar", "Dune"];
var ourArray
var numberArray = [[1,2,3],[4,5,6],[7,8,9], [[10,11,12],13,14]];
var myArrayNew ;
var age;

//Assignment
studlyCapVar = 16;
properCamelCase = "A String";
TitleCaseOver = 9000;
a+=5;
b=b+5;
c=c+" croissants s'il vous plait"
d=" <3"
remainder = 11%3;
vollerName=Vorname;
vollerName+=" ";
vollerName+=Nachname;
firstNameLength=Vorname.length;
firstLetterOfFavColor = favColor[2];
favColorLength = favColor.length;
lastLetterOfFavColor = favColor[favColorLength-1];
favColor= "Lila";
myArray[0] = "Forrest Gump";
myArray.push(["Matrix"]);
myArray.pop();
age = 15;

//Condition Declaration
var newText = (age<18) ? "Can't buy alcohol!" : "Can buy alcohol";

var number = 2;

switch (number){
case(0):
console.log("Sunday")
break;
case(1):
console.log("Monday")
break;
case(2):
console.log("Tuesday")
break;
case(3):
console.log("Wednesday")
break;
case(4):
console.log("Thursday")
break;
case(5):
console.log("Friday")
break;
case(0):
console.log("Saturday")
break;
};

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

var a=1;
while (a <= 10) {
    a++;
    console.log("Nummer"+a);
    if(a==5){break;}
    
}
 

//console
console.log(studlyCapVar);
console.log(a);
console.log(b);
console.log(c+d);
console.log(remainder);
console.log(vollerName);
console.log("Der Vorname besteht aus "+firstNameLength+ " Buchstaben.");
console.log(firstLetterOfFavColor);
console.log(lastLetterOfFavColor);
console.log(favColor);
console.log(wordBlanks( " Hund", "crazy ass", " flitze ", "turboschnell"));
console.log(numberArray[2][1]);
console.log(myArray);
console.log(myArrayNew);
console.log(newText);

const myObject = {
name: "Zac",
age: 14,
speak: function(){
console.log("Hi! I am " + this.name)
},
};

console.log(myObject);
myObject.speak();

const myObject2 = {
    name:"Elias",
    age: 22,
    speak: function(){
        console.log("Hi! My age is " + this.age);
    }
}

myObject2.speak();

function createPerson(_name, _age){
    return{
        name:_name,
        age:_age,
        speak:function(){
            console.log("Hi1 My name is " + this.name);
        }
    }
};

let son1 = createPerson("Jaden", 7);
son1.speak();

let son2 =createPerson("Zac", 7);
son2.speak();

for (let i=0;i<5; i++){
    let son = createPerson("son" + i, i+2);
    son.speak();
}

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
            console.log("Hi! My name is " + this.name + " and I am " + this.age + " years old.")
    }
}

const julian = new Person ("Julian", 21);
julian.introduce();

class Student extends Person{
    constructor(name, age, major){
        super(name, age)
        this.major = major;
    }
    introduceWithMajor(){
        
        console.log(`Hi my name is ${this.name}, I am ${this.age} years old and I am studying ${this.major}`)
    }
}

const studentJulian = new Student ("Julian", 21, "architecture");
studentJulian.introduceWithMajor;

class Person2 {
    introduce(name, age){
        console.log(`Hi! My name is ${name} an I am ${age} years old.`);
    }
    introduce(name, age, study){
        console.log(`Hi! my name is ${name}, I am ${age} years old and I am studying ${study}.`);
    }
}

const julian2 = new Person2;
julian2.introduce("Julian", 21);
julian2.introduce("Julian", 21, "architeture");
*/
