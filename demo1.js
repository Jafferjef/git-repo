// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello from promise!...");
//     },2000);
// })
// console.log(myPromise);
// Define three functions

/* 
let workingHours = 9.20; 
let additionalHours; 
(workingHours > 9.15) ? additionalHours = "You have positive additional hours" : additionalHours = "You have negative additional hours"; 
console.log(additionalHours); */

//for-Each loop
/*const arr=[0,1,2,3,4]
arr.forEach(element => {
  console.log(element)
});

const arr1=[
  {id:0, value:"apple"},{id:1, value:"banana"},{id:2, value:"orange"},{id:3, value:"guaua"}
]
arr1.forEach(element=>
  console.log(element.value)
)
//for-in loop=> use to loop over objects
const emp={
  id:2, name:"Jaf", age:24
}
for(let key in emp){
  console.log(key);
}

//for-off loop=> use to loop over strings and arrays
const tech="Node JS";
for(let element of tech){
  console.log(element);
}

const arroff=["java","html","css",2,3,"python"];
for(let ele of arroff){
  console.log(ele);
}*/
function executeMe(){

  console.log("Function says hello!");
  
  }
  
  let timerId=setInterval(executeMe, 2000);
  
  function stopInterval(){
  
            clearInterval(timerId);
  
            console.log("Function says bye to setInterval()!")
  
  setTimeout(stopInterval,5000)}
