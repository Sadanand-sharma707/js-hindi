console.log("hello world");

let score=46;  //data type in this variable is number
console.log(typeof score);  //number
console.log(typeof(score)); //number

//but 

// let the variable is string then those variable how to convert in number.


let scores="33 abc";
console.log(typeof(scores));// string
let valueInNumber=Number(scores);//the string value are changed into number
                                 //how it is possible becouse there are using a Number function.
console.log(typeof(valueInNumber));//number
console.log(valueInNumber);//NaN(Not a Number)//output is not given


let Num=null;//check what is the value of nll
let convertString=Number(Num);
console.log(convertString);//0//null value given zero output.


let value=undefined;
let convertValue= Number(value);  //value are convert into number datatype.
console.log(convertValue);//NaN(Not a number).


//"33" =>33
//"33abc" => NaN
//true => 1;  false => 0

console.log("when convert in boolean form of the number likes 1 & 0 then what is the output look like");
let isLoogedIn=1;
let converLoogedIn=Boolean(isLoogedIn);//conversion
console.log(converLoogedIn);//true


//1 =>true;  0 =>false
//"" =>  flase
//"rohit" =>true;


//************************Operations***************************/

let sumValue =23;
let negValue= -sumValue;
console.log(negValue);//-23

console.log(2+2);//4
console.log(2-2);//0
console.log(2*2)//4
console.log(2**3)//two power three//8
console.log(2/3)//0.6
console.log(2%3)//1

//some conversion are very treeky so this is important

console.log("1"+3);//13
console.log(3+"1");//31  //when string are comes into first, the value are same as it is print of the output.
console.log("1"+2+2);//122
console.log(1+2+"2");//32


console.log(true);//true
console.log(+true);//1 


//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



