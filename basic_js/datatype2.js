/*  primitive data type

there are 7 type:
    string
    Number
    Boolean
    null
    undefined
    Symbol
    BigInt

*/

const score=100;
console.log(typeof score);//number
const scoreValue=100.3;

const isLoogedIn=false;
const temp=null;
let userEmail=undefined;
const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId);//not equals to id and anotherId

const bignumber=4547454222222656655n;