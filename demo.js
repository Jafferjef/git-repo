/*
//let
let a=10;
//let a=20; => redeclaration not allowed
a=20;//  reassigning allowed
{
  let a=30;
  console.log('Block value:',a)
}
console.log('Global block:',a)

//const

const b=10;
//const b=20; => redeclaration not allowed
//b=20;=> reassigning not allowed
{
  const b=30;
  console.log('Block value:',b)
}
console.log('Global block:',b);


//var=>  can use it anywhere and the values get updated whethere it is in block or not!
var c=10;
var c=20; // redeclaration  allowed
c=30;     // reassigning not allowed
console.log('Global block 1:',c);
{
  var c=40;
  console.log('Block value:',c)
}
console.log('Global block 2:',c);
var c=50
console.log('Global block 3:',c);


//function
function network(a){
    console.log('I need '+a+ ' ' +'network'  )
}
function networks(a,b){
    console.log('I need both '+a+' '+b+' ' +'networks')
}
network("Jio")
network("Airtel")
networks("Jio","Airtel")


//arrays
 let items=["apple","orange","banana","papaya","guaua"];
 items[2]="grapes"
 console.log(items)
 let size=items.length;
 console.log(size);

 for(i=0;i<size;i++){
    console.log(items[i])
 }


 //set objects =>collection of values ,values are unique only

 let arr=[1,1,2,3,4,5,5,5,10,8]
 let myset1=new Set(arr);//setting set from array
 console.log(arr)
 console.log(myset1)

 let myset2=new Set()
 myset2.add(4)
 myset2.add(5)
 myset2.add('course')
 myset2.add({'a':1,'b':2})
 myset2.add(4)// 4 cannot be add in set ,bcz it already there
 console.log(myset2)

 let obj=({'a':1,'b':2})// same obj can create bcz it has dif refernce
 myset2.add(obj)
 console.log(myset2.size)
 console.log(myset2.has(5))
 console.log(myset2.delete(4))
 console.log(myset2)
 

 //map=> map objects are collection of key-value pairs. 
    
 let map1=new Map()
 map1.set('a',1)
 map1.set('b',2)
 map1.set('a',3) //value 'a' updated
 console.log(map1)
 console.log(map1.size)
 console.log(map1.has('c'))
 map1.delete('a')
 map1.set('d',4)
 map1.set('e',5)
 console.log(map1)

 for(let i of map1){
    console.log(i)
 }

 for(let [k,v] of map1){
    console.log(v)
 }

 for(let k of map1.keys()){
    console.log(k)
 }

 //2d array to map
 let KVarray=[['a',1],['b',1]]
 let map2=new Map(KVarray)
 console.log(map2)


// Arrow Function:
let arrow=()=>{
    console.log('arrow function')
}
arrow() 

//multi-parameter,multi line 
calculateCost=(ticketPrice,noOfPerson)=>{
    noOfPerson=ticketPrice*noOfPerson
    console.log(noOfPerson)
}

calculateCost(500,2)

//no parameter ,single line code
trip=()=>"Let's go to trip"
console.log(trip())

//one parameter,single line code
trip=place=>"Trip to "+place;
console.log(trip("Paris"))


//Anonymous function=> it does not have any function name, mainly used for any alerts or any events
let anfun=function(){
    console.log("This is Anonymous function")
}
anfun();


//callback function-assynchronous
function greet(name){
    console.log('Hi ${name}')
}
setTimeout(greet,2000,'Jaffer');

//callback function-synchronous
function detail(name){
    console.log('Hi ${name}')
}
function getdetail(callback){
    const name="Jaffer"
    callback(name)
}
getdetail(detail)


//Assynchronous function
console.log("code 1")
    setTimeout(()=>{
        console.log("code 2")
    },2000)
console.log("code 3")

//Promise
const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
           resolve("hello from promise!...");
       },2000);
     })
 console.log(myPromise);


//async-await
async function aa(){
const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>
           resolve("hello from promise!...")
       ,2000);
     })
 let result=await myPromise
 console.log(myPromise);
    }
    aa()


//event loop
console.log("start") //1)always print the global first 
function sync(){
    console.log("step 1")
}
console.log("step 2") // 2) print the global this as second
sync()//3) it will call function
setTimeout(()=>console.log("step 3"),3000)
setTimeout(()=>console.log("step 4"),1000)
setTimeout(()=>console.log("step 5"),2000)
console.log("end")// 4) this will print after the function ,bcz it is global

//.then()
let demo = new Promise((resolve, reject) => {
    resolve(1);
})
let call = demo.then(
    (value) => {
        console.log(value);
        return ++value;
    },
    (message) => {
        console.log(message);
    });
    console.log(call);
    setTimeout(() => {
    console.log(call);
   
}
);

//.then()
function demo() {
    console.log("Function called!!")
    return Promise.resolve(1);
    // or
   // return Promise.reject("Failure");
}
demo().then(
    (value) => {
        console.log(value);
    return ++value;
    },
    (message) => {
        console.log(message);
    }
    ).then(
    (value) => {
        console.log(value);
    },
    (message) => {
        console.log(message);
    }
)


//promise.all
//1

p1 = Promise.resolve(50);
p2 = 200
p3 = new Promise(function (resolve, reject) {
	setTimeout(resolve, 100, 'geek');
});

Promise.all([p1, p2, p3]).then(function (values) {
	console.log(values);
});


 // 2) Simple promise that resolves
// after a given time
const tOut = (t) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Completed in ${t}`)
		}, t)
	})
}

// Resolving a normal promise
tOut(1000).then(result => console.log(result + "<br>"))
// Completed in 1000

// Promise.all
Promise.all([tOut(1000), tOut(2000)])
	.then(result => console.log(result))


    // 3)Simple promise that resolves after a given time
const tOut = (t) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Completed in ${t}`)
		}, t)
	})
}

// Array contains some time duration

const durations = [1000, 2000, 3000]

const promises = [] // Empty array

durations.map((duration) => {

	// Calling the async function timeout(), so 
	// at this point the async function has started
	// and enters the 'pending' state 
	// pushing the pending promise to an array.
	promises.push(tOut(duration))
})

console.log(promises)

// Passing an array of pending promises to Promise.all
// Promise.all will wait till all the promises get resolves
// and then the same gets resolved.
Promise.all(promises).then(response => console.log(response))

// It prints after previous promises gets resolved
// ["Completed in 1000", "Completed in 2000", "Completed in 3000"]


// 4)Promise that resolves after a given time
const tOut = (t) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (t === 2000) {
				reject(`Rejected in ${t}`)
			} else {
				resolve(`Completed in ${t}`)
			}
		}, t)
	})
}

const durations = [1000, 2000, 3000]

// Array contains some time durations
const promises = [] //empty array

durations.map((duration) => {
	promises.push(tOut(duration))
	// Pushing durations in the promises array
})

// Passing an array of pending promises to Promise.all
Promise.all(promises).then(response => console.log(response))
	// Promise.all cannot be resolved, as one of the
	// promises passed, got rejected.

	.catch(error => console.log(`::Error::<br> ${error}`))
// Promise.all throws an error.

//5
let first_promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved First after 1 second");
	}, 1000);
});

let second_promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved First after 2 seconds");
	}, 2000);
});

let third_promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved First after 3 seconds");
	}, 3000);
});

try {
	let result = Promise.all([first_promise, second_promise, third_promise]);
	result.then((data) => console.log(data));
} catch (error) {
	console.log(error);
}

let my=new Promise((resolve,reject)=>{
    let a=22;
    if(a==2){
        resolve("crt")
    }else{
        reject("fail")
    }
}).then((msg)=>console.log(msg))
.catch((e)=>console.log(e))

let multiply = (num1, num2, num3) => {
    return num1 * num2 * num3;
}

let result = multiply(2, 3, 4);
console.log(result);
*/

console.log("one")
console.log("two")
setTimeout(function(){
    console.log("three")
},1);
console.log("four")
console.log("five")
console.log("six");
