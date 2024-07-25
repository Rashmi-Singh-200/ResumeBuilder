function addnewieField(){
   let newnode=document.createElement('textarea');
   newnode.classList.add('form-control');
   newnode.classList.add('ieField');
   newnode.classList.add('mt-2');
   newnode.setAttribute('placeholder','Enter Here');

   let ieOb=document.getElementById("ie");
   let ieAddButtonOb=document.getElementById("ieAddButton");

   ieOb.insertBefore(newnode,ieAddButtonOb); 
}


function addnewaqField(){
   let newnode=document.createElement('textarea');
   newnode.classList.add('form-control');
   newnode.classList.add('aqField');
   newnode.classList.add('mt-2');
   newnode.setAttribute('placeholder','Enter Here');

   let aqOb=document.getElementById("aq");
   let aqAddButtonOb=document.getElementById("aqAddButton");

   aqOb.insertBefore(newnode,aqAddButtonOb); 
}


function generate(){
// alert("generating");
 let nameField=document.getElementById("nameField").value;
 let nameT1=document.getElementById("nameT1");
 nameT1.innerHTML=nameField;

 let nameT2=document.getElementById("nameT2");
  nameT2.innerHTML=nameField;

  //direct-method
//   document.getElementById("nameT2")=nameField;

// contact
document.getElementById('contactT').innerHTML=document.getElementById('contactfield').value;
document.getElementById('linkedinT').innerHTML=document.getElementById('linkedField').value;
document.getElementById('githubT').innerHTML=document.getElementById('githubField').value;
document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

//objective
document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

//internship experience
let ies=document.getElementsByClassName("iefield");
let str = "";
 for (let e of ies){
   str=str + `<li> ${e.value} </li>`;
 }
 document.getElementById('ieT').innerHTML=str;

 //academic qualification
let aqs=document.getElementsByClassName("aqfield");
let straq = "";
 for (let q of aqs){
   straq+= `<li> ${q.value} </li>`;
 }
 
 document.getElementById("aqT").innerHTML=straq;

 //for image
 let file=document.getElementById("imgField").files[0];
 console.log(file);
 let reader =new FileReader();
 reader.readAsDataURL(file);
 console.log(reader.result);

 reader.onloadend=function(){
   document.getElementById("imgTemplate").src=reader.result;
 }

 document.getElementById('re-form').style.display="none";
 document.getElementById('re-template').style.display="block";
}


// function print(){
//  window.print();
// }