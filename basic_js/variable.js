const accountId = 145265;
let accountEmail = "sharmasadanand28@gmail.com";
var accountPassword = "234646";
accountState = "gorakhpur";

console.table([accountEmail,accountId,accountPassword,accountState]);

//if change the value of const then............
/*
accountId=5658;
console.log(accountId);

   typeError => Assignment to constant variable
   note => not change the value of const if it declear
              before.
*/

accountEmail="dfhgjghaosidgh@825gmail.com";  
accountPassword="568686";
accountState="bansi";
console.table([accountId,accountEmail,accountPassword,accountState]);
//here it is possible to change the vlaue of this variable
//  but it not possible to change the value of const variable.