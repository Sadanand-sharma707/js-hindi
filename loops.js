//for

for (let i = 0; i <=10; i++) {
    const element = i;
    if(i==5)
    {
        console.log("5 is the lucky number",i);
    }
    console.log(i);
}

//nested loops

for (let i = 1; i<=10; i++) {
   
     for(let j=1;j<=10;j++)
     {
         let product=i*j;
         console.log(i+"*"+j+"=",product);
     }
    
}

//array in the loops
let myArray=[100,200,300,400,500];

for(let i=0;i<=myArray.length;i++)
{
  console.log(myArray[i]);   
}



//break and continue
for (let i = 0; i <=10;i++) {
    if(i==4)
    {
        console.log("4 is the best number");
      //  break;//jump out of the scope
      continue;//iggnore this index
    }
    console.log(i);
    
}




//while loops

let num=1;//initialization

while(num<=10)//condition
{
    console.log(`hello iam rohit sharma ${num}`);
    num++
}


//Array using  while loops
const newArr=[10,20,30,40,50,60];

let Arr=0;
while(Arr<=newArr.length)
{
    console.log(newArr[Arr]);
    Arr++;
}


//do while loops
let score=11;  //initialization
do{
    console.log(`score is ${score}`)//At the end one time loop is executed 
    score++    //updation
}
while(score<=10);  //condition



//for of loop
//for of loop//this is array spacific loops
//array and object are very popular in the javascript

// ["","","",];//string inside array
// [{},{},{}];//object inside array



//    for (const element of object) {
            //......this is the syntax.........//
//    }

const arr2=[10,30,40,50,60];
for (const val of arr2) {
    console.log(val);
}

//using string in the array
const greetings="hello world!";

for(const greet of greetings){
    console.log(greet);//store one one word in the array
}
/*
output:
h
e
l
l
o

w
o
r
l
d
!
 */

//maps
// The map object key-value pairs and remenbers the original iteration order of the keys

const map1 = new Map();//map not iteratable for in loop
                       //map are iteratable for of loop

map1.set('IN',"india");
map1.set('USA',"united state of America");
map1.set('Fr',"France");

console.log(map1);

//using map for of loop
for( const keys of map1)
{
    console.log(keys);///output are given in the form of array;
}



//another syntax which is not given output in the form of array
//That is shortcut
for(const [key,value] of map1)
{
    console.log(key,':-',value);
}


//object
//for of loop not work hear

//here working for in loop

const myObject ={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    //console.log(key);//show all key
    //console.log(myObject[key]);//show all value
      console.log(`${key} =${myObject[key]}`);
}

console.log("********************************************************");

//for in loop using array

const programming=["js","rb","py","java","cpp"];

for(const key in programming)
{
    console.log(programming[key]);
}

//for each loop

const coding=[100,200,300,400,500];

//coding.forEach(function(){})

coding.forEach(function(values){
   // console.log(values);
})

//using arrow function in for Each methods
coding.forEach((items)=>{
    console.log(items);
})

//simple function using forEach
function printMe(item){
    console.log(item);
}
coding.forEach(printMe);//pass as a parameter but no executed this function


//forEach(item,index,arr)//foreach access three element likes this
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})



//object inside an array
const mycoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
//how to using loop in this array
]

console.log("+++++++++++++++++++++++++++++++++++");
mycoding.forEach(function(valu){
  console.log(valu.languageFileName);//object access
})
console.log("+++++++++++++++++++++++++++++++++++");
mycoding.forEach(function(valu){
  console.log(valu);//array access
})
//forEach loop with arrow function
console.log("+++++++++++++++++++++++++++++++++++");
mycoding.forEach((valu)=>{
  console.log(valu.languageName);
})


//for Each loop not return any value
const valuees=console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
mycoding.forEach((item)=>{
  //console.log(item);
  return item;
})
console.log(valuees);//undefined;



console.log("^^^^^^^^^^^^^^^^^^^^^");
//forEach loop not return value but if nessessry to return value so how they can possible.
//filter();

const myNums=[1,2,3,4,5,6,7,8,9,10];
const newnums = myNums.filter((num)=>num>4)
console.log(newnums);


//but here using scope then use return keyword

const mynumber=[1,3,4,5,6,7,8,9];
const numbers=mynumber.filter((items)=>{
  return items>4
})//here using scope for this code
console.log(numbers);

console.log("****************************************************************");
//this code, if using forEach loop then using logic likes that
const mynum=[];
mynumber.forEach((num)=>{
    if(num>4){
        mynum.push(num);
    }
})

console.log(mynum);

console.log("##################################################");

//filter method are apply condition map also. 
//map are Automatic return value
//if using scope{}then use return keyword

const num6=[2,5,6,7,8,9,10];
//add 10 all element of num6

const num2=num6.map((num)=>num+10);
console.log(num2);


console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
//chaining
//it means using many methods
const num1=num6.map((num)=>num*10)
               .map((num)=>num+1)
               .filter((num)=>num>=40)

               console.log(num1);


console.log("***************************************************");
 //reduce method   
 //reduce method


 //const sumWithInitial=arry1.reduce
// ((accumulator,currentValue)=>accumulator+currentValue,intialValue);

//using function
const mynumss=[1,3,4,5];
const mytotal= mynumss.reduce(function(acc,currval){
    console.log(`acc ${acc} and currval:${currval}`)
    return acc+currval;
},0//initial value
)
console.log(mytotal);//13


//using arrow function

const mynumms=mynumss.reduce((acc,curr)=>acc+curr,0)
console.log(mynumms);//13


//exp reduce method

const shoppingCart=[
    {
    itemName:"js course",
    price:299
    },
    {
        itemName:"python course",
        price:299
    },
    {
        itemName:"moble dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:10299
    },
    {
        itemName:"dsa course",
        price:7000
    }
    
]

//question is that add all price of these shoppingCart
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log("Total price is that:-",priceToPay);