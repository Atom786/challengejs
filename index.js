// Code Challenge 01:
/*
let weightMark = 78;
let weightJohn = 95;
let heightMark = 1.69;
let heightJohn = 1.88;
let bmiJohn,bmiMark;
bmiJohn = (weightJohn / heightJohn ** 2).toFixed(2);
bmiMark = (weightMark / heightMark ** 2).toFixed(2);
console.log(bmiMark + " Kg/m2",bmiJohn +" Kg/m2");
johnHigherBMI = bmiJohn < bmiMark;
markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI,johnHigherBMI + " i am  Successfull");
//Successfull:
let roundbmiMark = bmiMark;
console.log(roundbmiMark);
*/
//_________________________________________________________________________________
/*
//Code Challenge 02:
// 
if(bmiJohn>bmiMark){
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`);

}
else{
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`);
}
*/
// #### Code Challange #3
/*
let scoreDolphin,scoreKoalas,averageScore;
scoreDolphin = 96+108+89;
scoreKoalas = 88+91+110;
let averageScoreDolphin = scoreDolphin/3;
let averageScoreKoalas = scoreKoalas/3;
console.log(averageScoreDolphin.toFixed(2),"and",averageScoreKoalas.toFixed(2));
 let isWinner;
 if (averageScoreDolphin > averageScoreKoalas && averageScoreDolphin >= 100) {
     console.log("The Winner of the Competition is Dolphins");
 } 
 else if (averageScoreDolphin == averageScoreKoalas && averageScoreKoalas >= 100) {
    console.log("The Winner of the Competition is tied");
 }else {
    console.log("The Winner of the Competition is Koalas");
 }
 */
// code challenge 4
/*
let bill, tip;
//bill = Number(prompt("Enter the bill"));
tip = bill>= 50 && bill<=300 ? tip = bill * (15/100) : tip = bill *0.2
console.log(`Your Tip will be ${tip}, and your total bill will be ${bill+tip}` ) ;
// F2 - Code Challenge #2
const calcTip =  function(bill){
   if(bill>=50 && bill<=300){
         tip = bill*(15/100);
}else {
    tip = bill*0.2;
}
return tip;
}*/
// expression fuction method
 /* const calcTip = function(bill){
     return bill >=50 &&bill<=300 ? bill * (15/100):bill* 0.2;
 }
  // Arrow func 
  const calcTip = bill =>  bill >=50 &&bill <= 300 ? bill * (15/100):bill* 0.2;
*/
/*
 let call = calcTip(bill);
 let totalBill = bill +call; 
console.log(`${call} and the total bill is ${totalBill}`);
const arrbill =[125,555,44]
const arryBill = [calcTip(arrbill[0]),calcTip(arrbill[1]), calcTip(arrbill[arrbill.length -1])];
 console.log(`this array of bill+Tip == ${arryBill}`)
*/
//_______________________________________________________________________________
 //// // Coding Challenge #4
 // Arrow Funtion
 /*
 const calcAverage = (score1, score2, score3) => ((score1+score2+score3)/3);

 let avgDolhins = calcAverage(85,54,41);
 let avgKoalas = calcAverage(23,34,27);

 // Function Declearation Method 
  function checkWinner(_team1,_team2){
    if ((_team1 >_team2) &&( _team1 >= 2 * _team2 )){
          console.log(`Dolphin win (${_team1} vs ${_team2})`);
      }
      else if ((_team1 <_team2) &&( _team2 >= 2 * _team1 )){
        console.log(`Koalas win (${_team2} vs ${_team1})`);
      }
      else{
        console.log(`NO one is Winner`);
      }
  }
  checkWinner(avgDolhins,avgKoalas);

  // Function Expression method
  const checkWiner = function (_team1,_team2){
     if ((_team1 >_team2) &&( _team1 >= 2 * _team2 )){
          console.log(`Dolphin win (${_team1} vs ${_team2})`);
      }
      else if ((_team1 <_team2) &&( _team2 >= 2 * _team1 )){
        console.log(`Koalas win (${_team2} vs ${_team1})`);
      }
      else{
        console.log(`NO one is Winner`);
      }
  }
  checkWiner(avgDolhins,avgKoalas);
*/
/*
  //   // F2 Code Challenge 01::

  const markObj ={
    Name: "Mark",
    Mass: "78",
    height: "1.69"
    }
 const johnObj ={
     Name:"John",
     Mass:"92",
     height:"1.95",
   
     calcBMI : function(){
         return  (this.Mass/this.height**2).toFixed(2);
  }
 }; 
//  const bmiM= markObj.calcBMI();
//  const bmiJ = calcBMI(johnObj["Mass"],johnObj.height).toFixed(2);
 //  markObj.bmi =bmiM;
//    johnObj['bmi'] =bmiJ;
  console.log(markObj,johnObj.calcBMI())
// 'Mark Bmi is high':'John bmi is high';
  //const final = calcBMI(markObj["Mass"],markObj.height).toFixed(2)>calcBMI(johnObj["Mass"],johnObj.height).toFixed(2)? 'Mark Bmi is high':'John bmi is high';
//     console.log(calcBMI(johnObj["Mass"],johnObj.height).toFixed(2));
  console.log(final);
*/

//Self Editor
//F2 Code Challenge 4
/*
const calcTip =  function(bill){
 if(bill>=50 && bill<=300){
       tip = bill*(15/100);
}else {
  tip = bill*0.2;
}
return tip;
}
let arrybill =[], arrytip = [], total =[];
for(let i=0;i<10;i++){
 
 arrybill.push(Number(prompt("Enter the bills")));
// bills = 22,176,440,37,105,10,1100,86,52;
} //console.log(arrybill)
for(let cal =0; cal <arrybill.length;cal++){
   arrytip.push(calcTip(arrybill[cal]).toFixed(2));
   total.push(Number(arrybill[cal]) + Number(arrytip[cal]));
}
console.log(arrytip,total,arrybill);

calcAvg = function (arry) {
 let sum =0;
 for(let i=0; i<arry.length;i++){
     sum += Number(arry[i]);
 }
console.log(sum);
return sum;
}
console.log(calcAvg(arrybill))

*/

// Code Challenge (Julia and Kate Dog's)

//let dogsJulia = [3,5,2,12,7], dogsKate =[4,1,15,8,3];
// for (let i = 0; i <5 ; i++) {
//   const element = prompt(("Enter the Ages of Dogs of Julia"));
//   dogsJulia.push(Number(element));
//   const  element1 = prompt(("Enter the Ages of Dogs of Kate"));
//   dogsKate.push(Number(element1));
// }

// const checkDogs = function(dogsJulia, dogsKate) {
//   dogsJulia.forEach(function(){
//     for (let i = 0; i <dogsJulia.length ; i++) {
//     if(dogsJulia[i] < 3){
//       console.log(dogsJulia[i])
//     }else{
//       console.log("greater")
//     }
//   }
//   });
// } 
// checkDogs(dogsJulia)

// // OOPs Code Challenge::

// const Cars = function(make, speed) {
//   this.speed = speed;
//   this.make = make;
//   console.log(`${this.make} and it's speed ${this.speed}`);

// }

// Cars.prototype.accelerate = function() {
//   this.speed += 20;
//   console.log(`${this.make} going at ${this.speed}`);
// }
// Cars.prototype.brake =function() {
//   this.speed -=10;
//   console.log(`${this.make} going at ${this.speed}`);
  
// }


