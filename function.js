//Function declaration using a keyword "function"

function student(/*parameter*/){  //use function keyword and function name
    let a=10;
    let b=20;
    let sum=a+b;
    console.log(sum);//30
}

student(/*argument*/);//function call

//take input by user
function sendProductToCart(...number){//using  rest operator(...)
const fullnumber=number;
console.log(typeof number,number);//in the form of array[200,300,400,500]

}

sendProductToCart(200,300,400,500);


//let me one thing is very important

function myfunction(){
    let name=console.log("sadanand sharma");
}
let newfunction=myfunction();//sadanand sharma
console.log(newfunction);//undefined becouse myfunction not return any value


//so how to solve this problem
//return value to a function

function impfunction(){
    let fullname="sadanand sharma"
    return fullname;
}
let impofunction=impfunction();
console.log(impofunction);


 //how to pass arry in the function

 const myArray=[100,200,300,400,500,600];

 function valuePassArray(getArray){
   return getArray[3];
 }

 const reciveValue=valuePassArray(myArray);
 console.log(reciveValue);


 //Globle and Local scope in the function

 //   let      //local keyword
 //  const    //local keyword
//   var      //Globle keyword

//through the node js run the code within example
//that is sparate



//*************closer***************/
//inner function are access to the outer function that is called the closer
//like as:

function one(){
    const username="rohit";
    function two(){
        const website="youtube";
        console.log(username);//innerfunction are access to the outer function
    }
    two();//rohit
}

//Arrow function
 