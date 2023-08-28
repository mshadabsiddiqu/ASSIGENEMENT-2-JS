//========================= Chapter 21 ==================================
// ANSWER # 1:
/*
var allLower = prompt("Enter something...").toLowerCase();
console.log(allLower);
*/


// ANSWER # 2:
/*
var x = "This Is Chapter No Twenty One".toLowerCase();
console.log(x);
*/


// ANSWER # 3:
/*
var y = "This Is Chapter No Twenty One".toUpperCase();
console.log(y);
*/



// ANSWER # 4:
/*
var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
var b = a;
console.log(b);
*/



// ANSWER # 5:
/*
var arr = ["KABEER","SHABBIR","FARAZ","ASHIR","HUZAIFA"];
for(var i = 0;i<arr.length;i++){
    arr[i]=arr[i].toLowerCase();
    var res = arr[i];
    console.log(res);
};
*/



// ANSWER # 6:
/*
var a = "Hellow World".toUpperCase();
alert(a);
*/



// ANSWER # 7:
/*
var cityName = "kaRacHi";
var correct = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
console.log(correct);
*/






//========================= Chapter 22 - 25 (Strings) ===========================

// ANSWER # 1:
/*
var sameWords = "captain".slice(1,3);
console.log(sameWords);
*/



// ANSWER # 2:
/*
var input = "HI How are you!";
var numberOfCharacters = input.length;
console.log(numberOfCharacters);
*/



// ANSWER # 3:
/*
var animal = "elephant".slice(2,6);
var seg = animal;
console.log(seg);
*/



// ANSWER # 4:
/*
var a = "This is JS Course : ";
var b = a.length;
console.log(b);
*/



// ANSWER # 5:
/*
var a = "Pakistan Zindabad";
console.log(a.length);
var b = a.slice(0,1)+a.slice(-3);
console.log(b);
*/



// ANSWER # 6:
/*
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);  //3
*/



// ANSWER # 7:
/*
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx); //16
*/



// ANSWER # 8:
/*
var text = "You must go, and then go again. Don't hesitate to go.";
var indx = (text.lastIndexOf("go"));
console.log(indx);
*/



// ANSWER # 9:
/*
var a = "Hello world";
var indexNum = 7;
if (a[indexNum] === "w") {
    console.log("Segment exists.");
} 
*/



// ANSWER # 10:
/*
var a = "abcde";
console.log(a.charAt(2)); //c
*/



// ANSWER # 11:
/*
var a = "this js course is helpful";
var cha = a.charAt(10);
console.log(cha);
*/



// ANSWER # 12:
/*
var str = "hello world!";
var x = str.slice(-1);
console.log(x);
*/



// ANSWER # 13:
/*
var input = "Hello world";
var cha = input.charAt(5);
console.log(cha);
*/




// ANSWER # 14:
/*
var a = "hello world";
var b = "l";
if(a.charAt(3)===b){
    console.log("Yes verified:");
};
*/



// ANSWER # 15(A):
/*
var a = "My name is shadab";
var b = [];
for(var i=0;i<a.length;i++){
    b.push(a.charAt(i));
}
console.log(b);
*/
// ANSWER # 15(B):
/*
var reply = "no, I don't think so. It's a no-go.";
var revisedReply = reply.replace("no","yes");
console.log(revisedReply);
*/



// ANSWER # 16:
/*
var str = "1ce upon a time";
var newStr = str.replace("1","one");
console.log(newStr);
*/



// ANSWER # 17:
/*
var x = "a b n a y a a t m a";
var y = x.replaceAll("a", "z");
console.log(y);
*/






//**************************** Chapter 26 (Rounding Numbers) ******************************** */

// ANSWER # 1:
/*
var roundNum = Math.round(5.6);
console.log(roundNum);
*/



// ANSWER # 2:
/*
var origNum = 2.2;
var roundNum = Math.ceil(origNum);
console.log(roundNum);
*/



// ANSWER # 3:
/*
var origNum = 2.7;
var roundNum = Math.floor(origNum);
console.log(roundNum);
*/



// ANSWER # 4:
/*
var num = 2.5;
var num2 = Math.round(num);
console.log(num2);
*/



// ANSWER # 5:
/*
var num = 0.5;
var num2 = Math.floor(num);
console.log(num2);
*/







//******************************* Chapter 27 (Random Numbers) ************************************ */

// ANSWER # 1:
/*
var a = Math.floor(Math.random() * 51);
console.log(a);
*/




// ANSWER # 2:
/*
var a = Math.floor(Math.random() * 51);
var res = a;
console.log(res);
*/



// ANSWER # 3:
/*
var a = Math.floor(Math.random() * 6)+1;
var dice = a;
console.log(dice);
*/



// ANSWER # 4:
/*
var toss = Math.round(Math.random());
if(toss === 0){
    console.log("Heads");
}else{
    console.log("Tails");
};
*/






//*********************  Chapter 28, 29 (Converting Strings)***********************************/

// ANSWER # 1:
/*
var a = +"25";
console.log(typeof a);
*/



// ANSWER # 2:
/*
var str = +"123";
console.log(str);
*/



// ANSWER # 3:
/*
var str = +"12.5";
console.log(str);
console.log(typeof str);
*/



// ANSWER # 4:
/*
var a = +"12345678";
if (typeof a === "number") { // Compare with "number" as a string
    console.log("Conversion Successfully of string into number.");
} else {
    console.log("Failed conversion.");
};
*/



// ANSWER # 5:
/*
var a = 123;
console.log(a);
var res = a.toString();
console.log(res , typeof res);
*/



// ANSWER # 6:
/*
var a = 42;
function convert (a){
   var b = a.toString();
   console.log(b + " " + typeof b);
}
convert(a);
*/




// ANSWER # 7:
/*
var decimalString = "3.14"; 
var integerNumber = parseInt(decimalString);
console.log("Integer number:", integerNumber + " " + typeof integerNumber);
*/








//******************** Chapter 30 (Controlling the length of decimals) ***********************/

// ANSWER # 1:
/*
var num = 3.145647832;
var newNum = num.toFixed(4).toString();
console.log(newNum + " " + typeof newNum);
*/



// ANSWER # 2:
/*
var a = Math.round(2.56).toString();
a = +a;
console.log(a + " " + typeof a);
*/



// ANSWER # 3:
/*
var num = 1234.56789;
if (num.toFixed(2).toString().length > 4) {
   console.log("success");
}
*/



// ANSWER # 4:
/*
var a = 3.58763456;
a = a.toFixed(2); //two decimal points:
console.log(a);
a= Math.round(a); //round operation
console.log(a);
a= a.toString(); //convert number into string
console.log(a);
*/






//************************ Chapter 31 - 34 (Date & Time) **************************************/

// ANSWER # 1:
/*
var date = new Date();
var dObj = date;
console.log(dObj);
*/



// ANSWER # 2:
/*
var date = new Date();
date = date.toString();
var dStr = date;
console.log(dStr , typeof dStr);
*/



// ANSWER # 3:
/*
var d = new Date().getDay();
var day = d;
console.log(day); //6:
*/



// ANSWER # 4:
/*
var d = new Date().getDay();
var day = d;
console.log(day); //6:
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
alert(days[day]); //Saturday:
*/



// ANSWER # 5:
/*
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
var hour = date.getHours();
var min =  date.getMinutes();
var sec = date.getSeconds();
console.log("The year is " + year);
console.log("The month is " + month);
console.log("The day is " + day);
console.log("The hour is " + hour);
console.log("The minutes is " + min);
console.log("The seconds is " + sec);
*/



// ANSWER # 6:
/*
var DateObj = new Date(2020,11,31);
var later = DateObj;
console.log(later); //Thursday December 31 was the last day of 2020:
*/



// ANSWER # 7:
/*
var dateObj = new Date(1992,1,2);
var result = dateObj;
console.log(result); //Sun Feb 02 1992
*/



// ANSWER # 8:
/*
var referenceDate = new Date();
var beg1980 = new Date(1980,0,1);
var milliSeconds = referenceDate - beg1980;
alert("the milliseconds that elapsed between the reference date and the beginning of 1980 is " + milliSeconds);//1377525187031
*/



// ANSWER # 9:
/*
var date = new Date();
var desiredYear = date.setFullYear(2020); //Set your desired year:
console.log(date);// Wed Aug 26 2020
*/



// ANSWER # 10:
/*
function changeMonth(){
    var date = new Date();
    console.log(date);
    var change = date.setMonth(0);
    console.log(date);
};
changeMonth(); //Thu Jan 26 2023
*/


// ANSWER # 11:
/*
function changeMinutes (){
    var date = new Date();
    var input = +prompt("Enter time you want:");
    if(input >=0 && input <=59){
        date.setMinutes(input);
        console.log(date);
    }else{
        console.log("Enter minutes between 0 till 59");
    }
};
changeMinutes();
*/



// ANSWER # 12:
/*
function addHours(input) {
    var date = new Date();
    console.log("Original date:", date);
    date.setHours(date.getHours() + input);
    console.log("Updated date:", date);
  }
  
  var input = parseInt(prompt("Enter number of hours:"));
  addHours(input);
  */




// ANSWER # 13:
/*
function ageCalculator(inputAge) {
    var currentDate = new Date();
    var age = currentDate.getFullYear() - inputAge.getFullYear();
    console.log(age);
  }
  
  var inputAge = new Date(prompt("Enter Your Birth Date (YYYY-MM-DD):"));
  ageCalculator(inputAge);
  */




//*******************  Chapter 35 - 37 (Functions) ***************************** */

// ANSWER # 1:
/*
function displayAlert(){
    alert("Question no 1 of Functoons:");
};
displayAlert();
*/


// ANSWER # 2:
/*
var userName = prompt("Enter your name :");
function askName(userName){
    console.log("The name of the user is " + userName);
};
askName(userName);
*/



// ANSWER # 3:
/*
function callTwoFunction(){
    a();
    b();
};
function a(){
    console.log("Hello world");
};
function b(){
    console.log("Bye world");
};
callTwoFunction();
*/



// ANSWER # 4:
/*
function display(){
    var name = prompt("Enter name");
    alert(name);
};
display();
*/



// ANSWER # 5:
/*
function named(a,b,c){
    console.log(a + " " + b + " " + c);
};
named("K","Kabeer",4);
*/



// ANSWER # 6:
/*
function parameter2(name,lastName){
    var concat = name + " " + lastName ;
    console.log(concat);
};
parameter2("kabeer","Mansoor");
*/



// ANSWER # 7:
/*
function multiply(a,b,c){
    console.log("The Multiplication is : " + a*b*c);
};
multiply(2,6,8); //96
*/



// ANSWER # 8:
/*
function averageNumbers(){
    
    var arr = [12,45,36,78,90,23,49,67];
    var sum =0;
    for(var i=0;i<arr.length;i++){
        sum = sum + arr[i];
    };
    console.log(sum);
    var avg = sum/arr.length;
    console.log("The average of Numbers is : " + avg);
};
averageNumbers();
*/



// ANSWER # 9:
/*
function sum(a,b){
    console.log("The sum is "+ (a+b));
};
sum(34,67);
*/



// ANSWER # 10:
/*
function calculateAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum / arr.length);
}
var arr = [2, 3, 4, 5, 6, 7, 8];
calculateAverage(arr); //5
*/



// ANSWER # 11:
/*
function captured(a,b){
    return a+b;
};
var capturedValue = captured(4,5);
console.log(capturedValue);
*/



// ANSWER # 12:
/*
var letter = "word"
function letterCount(letter){
    console.log(letter.length);
};
letterCount(letter); //4
*/



// ANSWER # 13:
/*
function setYear(){
    var date = new Date();
     date.setYear("2020");
    console.log(date);
};
setYear();
*/



// ANSWER # 14:
/*
var input = prompt("Enter your Date of Birth:");
function dateOfBirth(input) {
    var currentDate = new Date();
    var dob = new Date(input);
    var age = currentDate.getFullYear() - dob.getFullYear();
    console.log(age);
}
dateOfBirth(input);
*/



// ANSWER # 15:
/*
var arr =['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
var userInput = prompt("Enter Name:");
function trueOrFalse(userInput){
    for(var i=0;i<arr.length;i++){
        if(userInput==arr[i]){
            console.log("true:")
        }else{
            console.log("false");
        }
    };
};
trueOrFalse(userInput);
*/



// ANSWER # 16:
/*
var name = "kabeer ";
function repeat(name){
    console.log(name.repeat(10));
};
repeat(name);
*/


// ANSWER # 17:
/*
var arr = ["Kabeer","Faraz","Baba","Farrukh","Ashir","Huzaifa","Ratan"];
function reverseArray(arr){
    console.log(arr.reverse());
};
reverseArray(arr);
*/






//************************** Chapter 38 (Local vs. Global Variables) **********************/

// ANSWER # 1:
/*
var a = "Hello"; //Global variable
function localVariable(){
    var a = "bye"; //local variable
    console.log(a);
};
localVariable();
console.log(a);
*/
/*
var a = "Hello"; //Global variable
function localVariable(){
    var b = "bye"; //local variable
    console.log(b);
};
console.log(b); // Error b is not defined bcz b is inside function and acts as local variable:
console.log(a);
*/



// ANSWER # 2:
/*
var a = "kabeer";
function accessGlobalVariable(a){
    var b = a;
    console.log(b);
};
accessGlobalVariable(a);
*/






//******************* Chapter 39, 40 (Switch Statements) **********************************/
// ANSWER # 1:
/*
var a = prompt("Enter a Number:");
var b = prompt("Enter a Number:");
var c = prompt("Enter operator");
a = parseFloat(a); 
b = parseFloat(b);
switch (c) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;
    default:
        console.log("Enter valid numbers and operator.");
};
*/



// ANSWER # 2:
/*
var cityName = prompt("Enter your city name :").toLowerCase();
switch(cityName){
    case "karachi":{
        alert("Your city is present in the list " + cityName);
        break;
    };
    case "lahore":{
        alert("Your city is present in the list " + cityName);
        break;
    };
    case "islamabad":{
        alert("Your city is present in the list " + cityName);
        break;
    };
    case "multan":{
        alert("Your city is present in the list " + cityName);
        break;
    };
    case "quetta":{
        alert("Your city is present in the list " + cityName);
        break;
    };
    case "peshawer":{
        alert("Your city is present in the list " + cityName);
        break;
    };
    default : {
        console.log("Your city is not present in the list: " + cityName);
    }
};
*/
