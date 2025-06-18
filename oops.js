// //constructor

// 'use strict'

// const Person  = function(firstName, birthYear){
//     //instance properties
//     this.firstName = firstName
//     this.birthYear = birthYear
// }

// const jonas = new Person('jonas',1991)
// console.log(jonas)

// // 1.New {} is created
// // 2.function is called, this= {}
// // 3.{} linked to prototype
// // 4.function automatically return {}

// const jasse= new Person('Jasse Pinkman',1995)
// const watler = new Person('Walter White',1975)

// console.log(jasse,watler)

// //prototypes

// Person.prototype.calcAge = function (){
//     console.log(2037 - this.birthYear)
// }

// console.log(Person.prototype)

// jonas.calcAge()

// console.log("chwc",jonas.__proto__);

// const arr = [2,4,6,7,9] // new array

// let a ={
//     value:10
// }

// let b = {
//     value:12
// }

// function add (a,b){
//     return (a+b)
// }

// console.log(add(a,b).value)

// function objAdd (a,b){
//     return (a.value + b.value)
// }

// console.log(objAdd(a,b))

//class expression

// const PersonCl = class {}

//class declaration
// class PersonCl {
//     constructor(fullName , birthYear){
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     calcAge(){
//         console.log(2025 - this.birthYear)
//     }

//     get age(){
//         return 2037 - this.birthYear
//     }

//     set fullName(name){
//         if(name.includes(' ')) {
//             this._fullName = name
//         }
//         else{
//             alert('given name is not a full name')
//         }
//     }

//     get fullName(){
//         return this._fullName
//     }
// }

// const jessica = new PersonCl('Jessica Davis',1996)
// console.log(jessica)
// jessica.calcAge()

// console.log(jessica.__proto__ === PersonCl.prototype)

// console.log("current jessica age is"+jessica.age)

// const walter = new PersonCl('Walter White',1983)
// console.log(walter);

// PersonCl.prototype.greet = function (){
//     console.log(`Hey this is ${this.firstName}`)
// }

// jessica.greet();

// Getters and Setters

// const account = {
//     owner : 'jonas',
//     movements:[200,500,120,300],

//     get latest(){
//         return this.movements.slice(-1).pop();
//     },
//     set latest (mov){
//         this.movements.push(mov)
//     }
// }

// console.log(account.latest)

// account.latest = 50

// console.log(account.movements)

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName
//     }

//     get firstName(){
//         return this.firstName;
//     }

//     set lastName(name){
//         return this.lastName
//     }
// }

// const  walter = new Person('alias','Heisenberg')

// console.log(walter.firstName)
// console.log(walter.lastName('alias'));

// const str = 'monday'

// function strRev(str){

//     let rev='';
//     for(let i=str.length-1;i>=0;i--){
//          rev += str[i]
//     }
//     return rev
// }

// console.log(strRev(str))

// const num = 121;

// function palidromeNum(num) {
//   const strNum = num.toString();

//   for (let i = 0; i < strNum.length; i++) {

//     for (let j = strNum.length - i -1; j >= 0;j--) {
//       if (strNum[i] != strNum[j]) {
//         return `${num} is not palindrom`;
//       }
//       break;
//     }
//   }
//   return `${num} is  palindrom`;
// }

// console.log(palidromeNum(num));

// class Car{
//   constructor(brand,model,year){
//     this.brand = brand;
//     this.model = model;
//     this.year  =year;
//   }

//   start(){
//     console.log('Car Started')
//   }

// }

// const benz = new Car('benz','i5',2020)
// benz.start()

//constructor function is creating

// const Person = function (name,age){
//   this.name = name;
//   this.age = age;

// }

// Person.prototype.greet = function (){
//   console.log(`Hey ${this.name} ,${this.age}`)
// }

// const walter = new Person('walter',63)
// walter.greet()

// console.log(walter)

// class Rectangle {
//   constructor(height, width){
//     this.height = height;
//     this.width  = width;
//   }

//   get area(){
//     return this.height * this.width
//   }

//   set lengths(width){
//     if(width < 0) console.log(`${width} is not a positive number`)
//     else          console.log('New Area:',width * this.height)

//   }
// }

// const rect = new Rectangle(10,5)
// console.log(rect.area)

// rect.lengths = -3

// class Animal {
//   makeSound(){
//     console.log('Some generic animal sound')
//   }
// }

// class Dog extends Animal{
//   makeSound(){
//     super.makeSound() // it will console the parent console
//     console.log('Woof! Woof!')
//   }
// }

// const animal = new Animal()
// animal.makeSound()

// const dog = new Dog ()
// dog.makeSound()

// class Animal {
//   speak(){
//     console.log('The animal makes a sound')
//   }
// }

// class Dog extends Animal{
//     speak(){
//       console.log('Woof!');
//     }

// }

// class Cat extends Animal{
//   speak(){
//     console.log('Meow!');
//   }
// }

// class Bird extends Animal{
//   speak(){
//     console.log('Tweet!')
//   }
// }

// const array = [
//   new Dog(),new Cat(),new Bird()
// ]

// for(let i=0;i<array.length;i++)
// {
//   array[i].speak()
// }

// class BankAccout{
//   #balance=0

//   deposit(amount){
//     if(amount<=0){
//       console.log(`The given ${amount} is not positve`);

//     }
//     else{
//       this.#balance += amount
//     }
//   }

//   getBalance(){
//    return this.#balance
//   }

// }

// const acc = new BankAccout()

// acc.deposit(400)

// console.log(acc.getBalance())

// acc.deposit(-3)

// console.log(acc.getBalance())

// class MathHelper{
//  static square(n){
//     return n* n
//   }
// }

// console.log(MathHelper.square(5))

// class Engine{
//   start(){
//     console.log('Engine Started.');

//   }
// }

// class Car{
//   constructor(){
//     this.engine = new Engine()
//   }

//   startCar(){
//     this.engine.start()
//   }
// }

// const myCar = new Car()
// myCar.startCar()

// synchronos

// philip roberts

// function multiply(a,b){
//   return a * b
// }

// function square(n){
//   return multiply(n,n)
// }

// function printSquare(n){
//   let squared = square(n)
//   console.log(squared)
// }

// printSquare(4)

// console.log('Hi')

// setTimeout(function cb(){
//   console.log('there')
// },0)

// console.log('done')

// setTimeout(function timeout(){
//   console.log('1')
// },1000)

// setTimeout(function timeout(){
//   console.log('2')
// },1000)

// setTimeout(function timeout(){
//   console.log('3')
// },1000)

// setTimeout(function timeout(){
//   console.log('4')
// },1000)

// console.log("Start");

// function getDataFromAPI(callback) {
//   setTimeout(() => {
//     callback(5);
//   }, 1000);
// }
// function getDataFromAPI2(callback) {
//   setTimeout(() => {
//     callback(5);
//   }, 1000);
// }
// function getDataFromAPI3(callback) {
//   setTimeout(() => {
//     callback(5);
//   }, 1000);
// }

// getDataFromAPI((value) => {
//   getDataFromAPI2((value2) => {
//     getDataFromAPI3((value3) => {
//       console.log(value2 + value + value3);
//     });
//   });
// });

// console.log("End");


// function x(y) {
//     console.log('x in y')
// }

// x(function y(){
//     console.log('y is printing')
// })


// promises

// const promise = new Promise((resolve,reject)=>{
//    setTimeout(() => {
//      reject('failed')
//    }, 3000);}
// )

// promise.then((response)=>{
//     console.log(response)
// }).catch((error)=>{
//     console.log(error)
// })


// function getDataFromAPI(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(num)
//         }, 1000);
//     })
// }

// function getDataFromAPI2(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject('no')
//         }, 1000);
//     })
// }

// getDataFromAPI(5).then((res)=>{
//     return getDataFromAPI2(res + 5)
// }).then((res)=>{
//         console.log(res);
        
// }).catch((err)=>{
//     console.log(err)
// })

// all method in Promise

// const promises1 = new Promise((res,rej)=>{
//     // res(['Javascript','Java'])
//     rej('Api Failed')
// })

// const promise2 = new Promise((res,rej)=>{
//     // rej('Api Failed')
//     res(['React','Angular'])
// })

// promises1.then((res)=>{     //this is normal way here both api don't know which api's are working
//     console.log(res)
// })

// promise2.then((res)=>{
//     console.log(res)
// })


// const allPromise = Promise.allSettled([promises1,promise2])

// allPromise.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


// const allPromise = Promise.all([promises1,promise2])

// allPromise.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })



// any


// const allPromise = Promise.any([promises1,promise2])

// allPromise.then((res)=>{
//     console.log(res)
// })

// race


// const allPromise = Promise.race([promises1,promise2])

// allPromise.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// ASYNC / AWAIT 

// const promises1 = new Promise((res,rej)=>{
//     res(['Javascript','Java'])
//     // rej('Api Failed')
// })

// const promise2 = new Promise((res,rej)=>{
//     // rej('Api Failed')
//     res(['React','Angular'])
// })

// const  fetchData= async() =>{
//     const response = await promises1
//     const response2 = await promise2
//     console.log(response,response2)
// }

// fetchData();


//using the try catch 

// const fetchData=async()=>{
//     try {
//         const response = await promises1
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData()

// const fetchData=async()=>{
//    try{
//      const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
//      const data = await response.json()
//      console.log(data)
//    }
//    catch(err){
//     console.log(err)
//    }
// }

// fetchData()


//  if more api we want to make them in generic

const genericData = async (url)=>{
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


const fetchData1= async ()=>{
    try {
    const response = genericData('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response)     
    } catch (error) {
        console.log(error)
    }
}


fetchData1()

// 