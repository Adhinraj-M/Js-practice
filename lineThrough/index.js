// const listItems = document.querySelectorAll('li')

// function toggleDone(e){
//     if(!e.target.className){
//         e.target.className = 'done';
//     }
//     else{
//         e.target.className = '';
//     }
// }

// listItems.forEach((item)=>{
//     item.addEventListener('click',toggleDone)
// })





// class Car{
//     constructor(model,make){
//         this.model = model;
//         this.make = make ;
//     }

//     displayInfo(){
//         console.log(`Make:${this.make},Modal:${this.model}`)
//     }
// }

// const suzuki  = new Car('Corolla','Toyota')

// suzuki.displayInfo()


// class Vehicle{
//     constructor(make,model){
//         this.make = make;
//         this.model = model;
//     }
//     start(){
//         console.log('Vehicle Started')
//     }
// }




// const arr = [1,2,3,4,5,6,7,8,9,10]


// const sumOfElements =(arr) =>{
//     let sum = 0;
//     for(let i=0;i<arr.length;i++)
//     {
//          sum += arr[i]
//     }
//     console.log(sum)
// }


// sumOfElements(arr)


// const student={
//     name:'Jasse',
//     age:28,
//     introduce:function(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// student.introduce()


const arr=[1,4,-12,-24,-52,23,9]

function negNum (arr){
    let negNum = []
    for(let i=0;i< arr.length;i++)
    {
        if(arr[i]<0)
            {
              negNum.push(arr[i])  
            } 
    }

    return negNum 
}

console.log(negNum(arr))