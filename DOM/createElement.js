const div1=document.createElement('div');
div1.className="container";
div1.id="div1";


const smalldiv=document.createElement('div');
smalldiv.id="smalldiv1";
smalldiv.innerHTML="hello world";
smalldiv.style.height="100px";  
smalldiv.style.width="100px";       //create a div 
smalldiv.style.borderRadius="2px";
smalldiv.style.borderStyle="solid";
smalldiv.style.borderColor="yellow";
smalldiv.style.backgroundColor="red";
div1.appendChild(smalldiv);

document.body.appendChild(div1);  //showing to page 

const selectSmalldiv1=document.querySelector('#smalldiv1');
selectSmalldiv1.innerHTML="small div1";


