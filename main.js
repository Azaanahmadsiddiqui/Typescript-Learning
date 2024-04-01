// import inquirer from "inquirer";
// let answer = await inquirer.prompt({
//     name: "name",
//     type:"sring",
//     message: "Enter Your Name"
// })
// import inquirer1 from "inquirer";
// let answerAge = await inquirer.prompt({
//     name: "age",
//     type:"number",
//     message: "Enter Your Age"
// })
// console.log("My age is  "+(answer.age))
// console.log("My name is  "+(answer.name))
// let numberOfFaculty: number =4;
// let numberOfManagement: number =3;
// let numberOfAbsentFaculty: number =2;
// let numberOfTotalFaculty: number = numberOfFaculty * 21;  // 4 * 21 = 84 
// let totalNumberOfKgs: number =42;
// console.log(numberOfFaculty + numberOfManagement)
// console.log(numberOfFaculty + numberOfManagement - numberOfAbsentFaculty);
// console.log(numberOfTotalFucalty);
// console.log(totalNumberOfKgs / numberOfTotalFucalty);
// let num1 =5;
// ++ num1;
// ++ num1;
// ++ num1;
// ++ num1;
// ++ num1;
// ++ num1;
// let num2 =5;
// -- num2;
// -- num2;
// -- num2;
// -- num2;
// -- num2;
// -- num2;
// -- num2;
// console.log(num2);
// console.log(num1)
// let firstName = "Azaan Ahmad";
// let age = 15; 
// let message = "Hello My name is: " + firstName + " and my age is: " + age;
// let message = `hello my name is: ${firstName} and my age is: ${age}`;
// console.log(message);
// let index = 10;
//     11    + 12      + 8 +  11     - 2=40
// let result = ++index + ++index + 8 + --index - 2 ;
// // ++index;  // index = 5
// // --index;  // index = 4
// // ++index;  // index = 5
// // --index;  // index = 4
// // ++index;  // index = 5
//  console.log(result); 
// let num1 = 20;
// num1+= 22;
// let num2 = 20;
// num2-= 22;
// //num1 = num - 22
// console.log(num1);
// console.log(num2);
// let c = 10;
// c+= 5;
// // equivalent to c = c + 5 , c is now 15.
// console.log(c);
// let num1 = 20;
// let num2 = 50;
// console.log (num1 == num2);
// console.log (num1 != num2);
// console.log (num1 > num2);
// console.log (num1 < num2);
// let age = 18;
// console.log(age <= 18);
// console.log(age >= 18);
// let myAge = 17;
// if(myAge >= 18) {
//         console.log("you're allowed");
// }
// else {
//         console.log("you're not allowed");
// }
// let isRaining = false;
// if(isRaining) {
//         console.log("wear a raincoat.");
// }
// else{
//         console.log("wear sunglasses.")
// }
// let month="May";
// if(month=="February") {
//         console.log("Water bottle is allowed");  
// }
// else{
//         console.log("Water bottle is not allowed");
// }
// let shop="Maida";
// if(shop !=  "Maida") {
//         console.log("A,B,C");
// }
// else{
//         console.log("Atta");
// }
// let month="December";
// if(month == "Jan") {
//         console.log("Water bottle is allowed")
// }
// else{
//         if(month=="Ramdan"){
//                 console.log("Water bottle is not allowed")
//         }
//         else{
//                 console.log("Water bottle is allowed")
//         }
// }
// let month = "Ramdan"
// if(month == "September") {
//         console.log("Water bottle allowed")
// }
// else if(month == "Ramdan"){
// console.log("Water bottle is not allowed")
// }
// else{
//         console.log("Water bottle is allowed")
// }
// let month="Ramdan" || "Water is'nt allowed"
// console.log (month)
// let month1=false || "Water is'nt allowed"
// console.log (month1)
// let month2="Ramdan" && "Water is'nt allowed"
// console.log (month2)
// let tool="Bulb"
// let house=tool || "UPS"
// console.log (house)
// let null1="Hot Water"
// let null2="Cold Water"
// let null3="NO Water"
// let month= null1 && (null2 && null3)
// console.log(month)
// import inquirer from "inquirer"
// let answer = await inquirer.prompt([
//         {
//                 name:"days",
//                 type:"list",
//                 message:"choose the day",
//                 choices:["Monday","Tuesday","Wednesday","Thursday","friday","Saturday","Sunday"]
//         }
// ]
// )
// if(answer.days === "Thuraday"){
//         console.log("This is your class day")
// }else{
//         console.log("This is not your class day")
// }
// // egg butter salt
// function halfFry(){
//         console.log(1 + 2 + 1.5)
// }
// halfFry() //manaheel
// halfFry() //zaigham
// function chickenBiryani(){
//         console.log(1 + 1 + 3 + 4 + 1 + 2 + 5 + 2 + 1)
// }
// chickenBiryani()
// chickenBiryani()
// let weather = "cloudy";
// if(weather === "raining"){
//         console.log("Wear a raincoat");
// }
// else if(weather === "cloudy"){
//         console.log("Wear a light jacket");
// }
// else{
//         console.log("Wear sunglasses")
// }
// let day = "Sunday";
// if(day === "Sunday"){
//         console.log("This is not your class day");
// }
// else if(day === "Thursday"){
//         console.log("This is your class day");
// }
// else{
//         console.log("This weak you won't go");
// }
// // egg butter salt
// function halfFry(salt:number, butter:number, egg:number){
//         console.log(salt+ butter+ egg);
// }
// halfFry(1.5,2,1) //manaheel  // 4.5
// halfFry(2,3,1) //ziagham     // 6
// function halfFry(salt:number, butter:number) {
//         let cooked = 1+ salt+ butter
//         return cooked
// }
// let delivery1 = halfFry(1.5 , 2)
// console.log(delivery1); //manaheel
// let delivery2 = halfFry(2,3)
// console.log(delivery2); //zaigham
// let age = 18;
// let mycountry = "Pakistan";
// if(age >= 18){
//         if (mycountry == "Pakistan"){
//                 console.log("You can take this ticket");
//         }
// }else{
//         console.log("You can't take this ticket");
// }
// function greet() {
//         return "Hello World!"
// }
// let message: string = greet();  //Hello World
// console.log(message);
//  function sum() {
//         return 2 + 2;
//  }
// let result = sum();
//  console.log(result);
// function sum(num1:number,num2:number)
// :number {
//         return num1 + num2;
// }
// let result = sum(5,5);
// console.log(result);
// function sum(num3:number, num4:number)
// :number {
//         return num3 - num4;
// }
// let result = sum(8,5);
// console.log(result);
// function sum(num5:number, num6:number)
// :number {
//         return num5 * num6;
// }
// let result = sum(5,5);
// console.log(result);
// function sum(num7:number,num8:number)
// :number { 
//         return num7 / num8;
// }
// let result = sum(5,4);
// console.log(result);
// function greet(message:string) {
//         return message
// }
// console.log(greet("Hello Azaan"));
// import inquirer from "inquirer"
// const answer = await inquirer.prompt(
//         [
//                 {message:"Enter first name",type:"number",name:"firstName" },
//                 {message:"Enter second name",type:"number",name:"secondName"},
//                 {
//                         message:"Select one of the operator",
//                         type:"list",
//                         name:"operator",
//                         choices:["Addition","Subtraction","Multiplication","Division"]
//                 }
//         ]
// );
// if(answer.operator === "Addition") {
//         console.log(answer.firstName + answer.secondName);
// }else if(answer.operator === "Subtraction") {
//         console.log(answer.firstName - answer.secondName);
// }else if(answer.operator === "Multiplication") {
//         console.log(answer.firstName * answer.secondName);
// }else if(answer.operator === "Division") {
//         console.log(answer.firstName / answer.secondName);
// }else{
//         console.log("Please select valid operator");
// }
let greet = () => {
    let message = 'hello maria';
    return message;
};
function greet3() {
    return "hello world";
}
export {};
