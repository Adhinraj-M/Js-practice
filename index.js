// 'use strict'

// const modal = document.querySelector('.modal')
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal')
// const btnOpenModal = document.querySelectorAll('.show-modal')

// for(let i=0;i < btnOpenModal.length;i++)
//     btnOpenModal[i].addEventListener('click',openModal)

// function openModal(){
//         console.log('Button clicked')
//         modal.classList.remove('hidden')
//         overlay.classList.remove('hidden')
//     }

// const closeModal=()=>{
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
// }

// btnCloseModal.addEventListener('click',closeModal)

// overlay.addEventListener('click',closeModal)

// const tDate =new Date.getDate()

// console.log(tDate)

// console.log(Math.pow(9,9))

// const arr={
//     firstName:'Walter',
//     lastName:'White',
//     age:59
// }

// const {firstName,age,lastName} = arr

// console.log(firstName,lastName,age)

// let name =" Walter White"

// class Rectangle {
//     constructor(height,width){
//         this.height = height
//         this.width = width
//     }
// }

// try {
//     console.log("Try block started")                       try,catch,finally,throw example
//     throw new Error("An error occured!2")
// } catch (error) {
//     console.log('Error caught1',error.message)
// }
// finally{
//     console.log("Finally block executed")
// }

// console.log(
// isNaN(NaN)

// )

// const arr = [1,2,3,4,5,6,7]

// let mulArr=arr.map(item=>item === 2)

// console.log(mulArr)

// const arr = [1,2,3,4]

// let numbers=arr.reduce((acc,num)=> acc+num,0)

// let oddNum=arr.filter((item)=> item%2!=0)

//  console.log(numbers)dty

// function calcAge(birthYear){
//     const age = 2037 - birthYear

//     console.log(firstName)
//     return age
// }

// const firstName = 'Jasse'
// console.log(calcAge(1991))

// console.log(addDecl(3,4))
// // console.log(addExpr(3,4))
// console.log(addArrow(3,4))

// function addDecl(a,b){
//     return a + b;
// }

// var addExpr = function (a,b){
//     return a+b
// }

// var addArrow = (a,b)=> a+b;

// let jasse = {
//     firstName:'Jasse',
//     lastName:'Pinkman',
//     age:28
// }

// // function marryPerson(originalPerson, newLastName){
// //     originalPerson.lastName = newLastName
// //     return originalPerson
// // }

// // const marriedJasse  = marryPerson(jasse , 'Andrea')

// let newJasse = {...jasse}
// newJasse.lastName = 'Andrew'
// // const marriedJasse = jasse
// // marriedJasse.lastName = 'Andrew'

// console.log(jasse)
// console.log(newJasse)

// let a = (1,2,[3,4])
// let b=a
// a[2].append(5)

// console.log(a == b , a ,b);

// spread operator

// var obj ={
//     a:1,
//     b:3,
//     c:'hello'
// }

// var obj2 = {...obj}

// let arr = [1,3,4,5]

// let sum= 0

// arr.forEach((item,index)=> {
//     sum+=(item.mark)
// })
// console.log(sum)

// const findAll = arr.filter((item)=>{
//     return item.name === 'Bob'
// })

// const findAll = arr.map((item,index)=>{
//    return {
//     ...item,
//     country:'India'
//    }
// })

// const findAll = arr.reduce((acc,item)=>{
//   return item.mark + acc
// },0)

// console.log(findAll)

//rest operator
// const add = function (...num){
//     let sum = 0;
//     for (let i=0;i<num.length; i++){
//         sum += num[i]
//     }
//     console.log (sum)
// }

// add(1,3,4,5,6)
// add(1,2,3,4,5,8,8,9,90,6,7)

// const arr=[
//     {
//         name:'Alice',
//         mark:1,
//         place:'Kannur'
//     },
//     {
//         name:'Bob',
//         mark:2,
//         place:'Palakkad'
//     },
//     {
//         name:'roy',
//         mark:3,
//         place:'Calicut'
//     },
//     {
//         name:'Daniel',
//         mark:4,
//         place:'kollam'
//     }
// ]

// const [alice,bob,...others] = arr

// Nullish : nul and undefined (not or '')

// const guestCorrect = undefined ?? 10;

// console.log(guestCorrect);

// for (let item of arr){
//     console.log(item)
// }

// optional chaining

// const arr=[
//     {
//         name:'Alice',
//         mark:1,
//         place:'Kannur'
//     },
//     {
//         name:'Bob',
//         mark:2,
//         place:'Palakkad'
//     },
//     {
//         name:'roy',
//         mark:3,
//         place:'Calicut',
//         sub:'english'
//     },
//     {
//         name:'Daniel',
//         mark:4,
//         place:'kollam'
//     }
// ]

// arr[0].place === 'k' && console.log(`Hi ${arr[0].place}`)

// with optional chaining

// console.log(arr[1].name?.sub)
// console.log(arr[1].sub)

// const days = ['mon','tue','wed','thur','fri','sat','sun'];

// for (const day of days){
// }

// const property  = Object.entries(arr[0]) // nicely organized

// console.log(property)]

// sets  is a collection of unique values

// const ordersSet = new Set(['pasta','pizza','pizza','risotto','pasta','pizza'])

// console.log(ordersSet)

// console.log(ordersSet.size) // to check the size of the set

// console.log(ordersSet.has('pizza'))

// console.log(ordersSet.add('bread'))

// const arr= [1,2,3,4,5,1,4,5,5]

// const afterDuplication = new Set([...arr])

// console.log(afterDuplication)

// const question =  new Map([
//     ['question', ' which is the best programming language ?'],[1,"c"],[2,'Java'],[3,'Javascript'],['correct',3],[true,'Correct'],[false ,'Try Again']
// ])

// // console.log(question)

// const arr=
//     {
//         name:'Alice',
//         mark:1,
//         place:'Kannur'
//     }

//     // console.log(Object.entries(arr))

// const convertMap = new Map(Object.entries(arr))

// console.log(convertMap)

// console.log(question.get('question'));

// for ( const [key ,value] of question){
//  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`)
// }

// const answer = Number(prompt('Your Answer'))

// console.log(answer)

// question.get(question.get('correct') === answer)

// const wrongMap = new Map();

// wrongMap['bla'] = 'blaa'
// wrongMap['bla2'] = 'blaa2'

// const flight = 'LH123';
// const jonas = {
//     name:'Jonas',
//     passport:12332412341
// }

// const checkIn = function (flightNum , passenger){
//     flightNum = 'LH999'
//     passenger.name = 'Mr.' + passenger.name

//     if(passenger.passport === 12332412341){
//         alert('Checked in')
//     }
//     else{
//         alert('Wrong passport!')
//     }
// }

// checkIn(flight,jonas)

// function that returns new function

// const  greet = function (greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }

// const greeterHey = greet('Hey')
// console.log(greeterHey('Steven'))
// console.log(greeterHey('Jonas'))

// greet('Hello')

// const primeCheck= function ( num ){
//     if(num < 2){
//         return `${num} is not a prime number`
//     }

//     for(let i=2 ;i<num;i++){
//         if(num % i == 0){
//             return `${num} is not a prime number`
//         }

//     }

//     return `${num} is  a prime number`
// }

// console.log(primeCheck(7))

// const palindrome = function (word) {
//   for (let i = 0; i < word.length; i++) {
//     for (let j = word.length - i - 1; j > 0; j--) {
//       if (word[i] !== word[j]) {
//         return `${word} is not a palindrome`;
//       }

//       break;
//     }
//   }
//   return `${word} is  a palindrome`;
// };

// console.log(palindrome("malayalam"));

// const vowels = ['a','e','i','o','u'];

// const vowelCount  = function(word){

//     let vowelNum = 0
//    for(let i=0;i<word.length;i++){
//     for(let j=0;j<vowels.length;j++){
//         if(word[i] === vowels[j])
//         {
//             vowelNum++
//         }
//     }
//    }

//    return `${word} contain ${vowelNum} vowels`
// }

// console.log(vowelCount('v'))

// const printNum = ()=>{
//     for(let i=1;i<=100;i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             console.log('fizzbuzz')
//         }
//         else if (i % 3 == 0){
//             console.log("fizz")
//         }
//         else if (i % 5 == 0){
//             console.log('buzz')
//         }
//         else{
//             console.log(i)
//         }
//     }
// }

// printNum()

// const arrayCombine = (arr1, arr2) => {
//   let combinedArr = [];
//   if (arr1.length > arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       combinedArr.push(arr1[i]);
//       for (let j = i; j < arr2.length; j++) {
//         combinedArr.push(arr2[j]);
//         break;
//       }
//     }
//   } else {
//     for (let i = 0; i < arr2.length; i++) {
//       combinedArr.push(arr2[i]);
//       for (let j = i; j < arr1.length; j++) {
//         combinedArr.push(arr1[j]);
//         break;
//       }
//     }
//   }
//   return combinedArr;
// };

// console.log(arrayCombine([0, 2, 4, 6, 8], [1, 3, 5, 7, 9]));

// const secondLar = function (arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j< arr.length;j++){
//             if(arr[i] > arr[j]){
//                 let temp = arr[i]
//                 arr[i] =arr[j]
//                 arr[j] = temp
//             }
//         }
//     }

//     return `second largest is ${arr[arr.length-2]}`
// }

// console.log(secondLar([5,1,31,14,55,16]))

// let Myname = {
//      firstName:'Walter',
//      lastName:'white',

// }

// const printFullName= function(hometown,state){
//         console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`)
//      }

// let friendName = {
//     firstName:'Jasse',
//     lastName:'pinkman'
// }

// //function borrowing

// printFullName.call(friendName,'chennai','Tamil Nadu') // in call method we pass arguments individually
// printFullName.apply(Myname,['Mumbai','Maharashtra']) // in apply method we pass arguments as array list

// //bind

// let printName = printFullName.bind(friendName , "Mumbai","Maharashtra")// bind provide a copy of the object and can use it latter

// console.log(printName)
// printName()

// (function (){   //immediately invoked function expression
//     console.log('running')
// })()

// closure

// const secureBooking = function (){
//     let passengerCount = 0;

//     return function (){
//         passengerCount++;
//         console.log(`${passengerCount} passegers`)
//     }
// }

// const booker = secureBooking()

// booker()

//  class concept
// class Studnet {
//   name;
//   yob;
//   constructor(name, yob) {
//     this.name = name;
//     this.yob = yob;
//   }
//   static printMinYob(...args) {
//     var args = args.map((item) => item.yob);
//     console.log(Math.min(...args));
//   }

//   getAge() {
//     return new Date().getFullYear() - this.yob;
//   }
//   getName() {
//     return this.name;
//   }
// }

// var student1 = new Studnet("Walter White", 1968);
// var student2 = new Studnet("Jasse Pinkman", 1982);
// var student3 = new Studnet("Gustavo Fring", 1975);

// console.log(student1);
// console.log(student2);
// console.log(student3);

// //to display the first guy who born

// printMinYob(student1.student2.student3);


// class Button {
//     constructor(name){
//         this.button = document.createElement('button')
//         this.button.innerHTML = name
//         document.body.appendChild(this.button)
//     }

//     set width(width){
//         this.button.style.width = width + 'px';
//     }
//     set height(height){
//         this.button.style.height = height + 'px';
//     }

// }


// let b1 = new Button('Click Me!')

// b1.width = 100
// b1.height = 100


// // b1.width(100)
// // b1.height(100)

// console.log(b1)


// class Button {
//     constructor(name){
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;
//         document.body.appendChild(this.button)
//     }

//     onClick(fn){
//         this.button.onclick = fn;
//     }
// }

// var b1 = new Button('My button 1')

// b1.onClick (function(){
//     console.log('clicked')
// })


// object oriented programming  

// abstraction           

// function Employee (name,age,baseSalary){
//     this.name = name;
//     this.age  = age;
//     this.baseSalary = baseSalary;
//      let monthlyBonus = 1000
   
//      let calculateFinalSalary = function (){
//         let  finalSalary = baseSalary +  monthlyBonus
//         console.log(`final salary is : ${finalSalary}`)
//     }

//     this.getEmplDetails  = function () {
//         console.log ('Name :' + this.name + '| Age :' + this.age )
//         calculateFinalSalary()
//     }
// }

// let emp1 = new Employee('John' , 30 , 2000)

// emp1.getEmplDetails()

// encapsulation

// class Employee {
//     setEmpDetails (name,id,phoneNo){
//         this.name = name;
//         this.id  = id;
//         this.phoneNo = phoneNo;
//     }

//     getEmpName(){
//         return this.name
//     }

//     getEmpId(){
//         return this.id
//     }

//     getEmpPhoneNo(){
//         return this.phoneNo
//     }
// }

// let emp1 = new Employee()

// emp1.setEmpDetails('john',1234,9024905235)
// console.log(emp1.getEmpName())
// console.log(emp1.getEmpId())
// console.log(emp1.getEmpPhoneNo())

//inheritance


// class Car {
//     setName(name){
//         this.name = name
//     }

//     startEngine(){
//         console.log('Engine started for' + this.name)
//     }

//     stopEngine(){
//         console.log('Engine stopped for '+ this.name)
//     }
// }

// class Toyota extends Car{
//     topSpeed (speed){
//         console.log(`Top speed for ${this.name} is ${speed}`)
//     }
// }

// let myCar = new Toyota()
// myCar.setName('BMW')
// myCar.startEngine()
// myCar.stopEngine()
// myCar.topSpeed('220mph')

//polymorphism

// class Animal{
//     constructor(name){
//         this.name = name
//     }
    
//     eats(){
//         console.log(`${this.name} eats foods`)
//     }
// }

// class Alligator extends Animal{
//     eats(){
//         super.eats()
//         // console.log(`${this.name} eats fishes.`)
//     }
// }

// let murphy = new Alligator('murphy')

// murphy.eats()

// let animal = new Animal('dog')

// animal.eats()

// constructor functin 
