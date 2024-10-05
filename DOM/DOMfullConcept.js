

//Access class of the html in js
//******************************/

const AccessClass=document.getElementsByClassName("day")
//console.log(AccessClass);            //HTML collection
const Arrayform=Array.from(AccessClass);
//console.log(Arrayform);                //Array form of these HTML collection


Arrayform.forEach(function(myArray){          ///forEach method
    //console.log(myArray.innerHTML);
});

for(let i=0;i<AccessClass.length;i++)
{
  //  console.log(AccessClass[i].innerHTML);
}

//QuerySelector
//*************/
const parent=document.querySelector('.parent');//   Access first parent
console.log(parent.children[6].style.color="blue");  //Access 7th children and its color are blue

//console.log(parent);


const Monday=document.querySelector('#mon');
console.log(Monday.style.color="yellow")

//querySelectorAll
//*****************/
const fruit=document.querySelectorAll('.fruitName');
console.log(fruit);
console.log(fruit[1].style.color="green");

//Access to childNode with the help of its parents
//***********************************************/


const unList=document.querySelector(".unorderList");
console.log(unList.firstElementChild.innerHTML);
console.log(unList.lastElementChild.innerHTML);

//next sibling Element
//*********************/

const nextSibling=document.querySelector('.fruitName');
console.log(nextSibling.nextElementSibling.innerHTML);

//Access parent with the help of children
//***************************************/

console.log(nextSibling.parentElement);
console.log(Monday.parentElement); 


//create document
//***************/


const newDoc=document.createElement('div');
newDoc.id=Math.round(Math.random()*10 +1);        //using Math function
console.log(newDoc);
newDoc.className="main";
//newDoc.innerHTML='hello world';//append text in the page
//console.log(newDoc.innerHTML);

const doc=document.createTextNode("hello world");
newDoc.appendChild(doc);//this is also set a text in the page

document.body.appendChild(newDoc);



//create heading element
//*********************/

const heading=document.createElement("h1");

const firsth1=document.createTextNode("Hi iam sadanand sharma by occupation i am student i belong to dist-siddharthNeger");
heading.appendChild(firsth1);
heading.id='heading1';
heading.setAttribute("title","generate title");

document.body.appendChild(heading);

const headingId=document.getElementById('heading1');// access these element which is create in the js file
console.log(headingId.style.color="orange");



//create unorderlist
//******************/


const Unlist=document.createElement('ul');//create parent node
Unlist.id='unorderList';
Unlist.className='subjectName';
//console.log(Unlist);

const firstli=document.createElement('li');//first child node
firstli.className='subject';
firstli.innerHTML='computer science';

const secondli=document.createElement('li');//second child node
secondli.className='subject';
   secondli.innerHTML='operating system';

   const thirdli=document.createElement('li');//third child node
thirdli.className='subject';
thirdli.innerHTML='database';


const idea1=Unlist.appendChild(firstli);//inside list with the unorderli
const idea2=Unlist.appendChild(secondli);//inside list with the unorderli
const idea3=Unlist.appendChild(thirdli);//inside list with the unorderli

document.body.appendChild(idea1);  //show webpage
document.body.appendChild(idea2);
document.body.appendChild(idea3);


//Another one method using inside the list
//****************************************/


function add_language(language) {       //function
    const li=document.createElement('li');//create list
    li.innerHTML=`${language}`;//   insert text which is pass by user
    const list=Unlist.appendChild(li);  //append parentnode of this list
    
    document.body.appendChild(list);//show webpage
}

add_language("python");
add_language("computer graphics");


//Edit
//******/


//outerHTML
//