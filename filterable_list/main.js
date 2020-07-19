//get input  element
let filterinput=document.getElementById('filterinput');
filterinput.addEventListener('keyup',filtername);
function filtername(e)
{
    //get values of input
    let filtervalue=document.getElementById('filterinput').value.toUpperCase();
//console.log(filtervalue);
// get ul names
let ul=document.getElementById('names');
// get li from ul
let li =ul.querySelectorAll('li.collection-item');
//loop through collection itemf
for(let i=0;i<li.length;i++)
{
    let a=li[i].getElementsByTagName('a')[0];
     //if matched
     if (a.innerHTML.toUpperCase().indexOf(filtervalue) > -1) {
         
        li[i].style.display='';

        
     } else {
         li[i].style.display='none';
         
     }

}
}