/* /*var button=document.getElementById('button').addEventListener
('click',buttonclick);
 function buttonclick(e)
{
   /*  document.getElementById('header-title').textContent='changed';
    document.querySelector('#main').style.backgroundColor='grey';
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.classList);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY); 
    console.log(e.altKey); 
}*/
/* var box=document.getElementById('box');/* 
box.addEventListener('mouseenter',runevent);
box.addEventListener('mouseleave',runevent);
box.addEventListener('mouseover',runevent);
//box.addEventListener('mouseout',runevent); 
box.addEventListener('mousemove',runevent);
var button=document.getElementById('button').addEventListener
('mouseup',runevent);

 */
var iteminput=document.querySelector('input[type="text"]');
var form=document.querySelector('form');/* 
iteminput.addEventListener('keydown',runevent);

iteminput.addEventListener('keyup',runevent);

iteminput.addEventListener('focus',runevent);

iteminput.addEventListener('blur',runevent); 

iteminput.addEventListener('cut',runevent);*/
/* 
iteminput.addEventListener('input',runevent);
var select=document.querySelector("select");
select.addEventListener('change',runevent); 
form.addEventListener('submit',runevent);
 function runevent(e)
{
   e.preventDefault();
    console.log(e.type);
    
   

     console.log(e.type);
    output.innerhtml="<h3>mousex:'+e.offestX+'</h3><h3>mousey:'+e.offsetY+'</h3>"; */
 /* 
document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)"
 
} */
var form=document.getElementById('addform');
var itemlist=document.getElementById('items');
//form sumit event
form.addEventListener('submit',additem);
itemlist.addEventListener('click',removeitem);
function additem(e)
{
e.preventDefault();
console.log(e.type);
//get input value
var newitems=document.getElementById('item').value;
//create new align element 
var li=document.createElement('li');
// class name
li.className='list-group-item';
//add text node with input value
li.appendChild(document.createTextNode(newitems));
//create del button
var delbtn=document.createElement('button');
delbtn.className="btn btn-danger btn-sn float-right delete";
delbtn.appendChild(document.createTextNode('X'));
itemlist.appendChild(li);

li.appendChild(delbtn);
console.log(li);
}
function removeitem(e)
{
 if(e.target.classList.contains('delete'))
 {
     if(confirm('are sure '))
     {
         var li=e.target.parentElement;
         itemlist.removeChild(li);
     }
 }

 console.log(1);
}
var filter=document.getElementById('filter');
filter.addEventListener('keyup',filteritem);
function filteritem(e)
{
    var text=e.target.value.toLowerCase();
    var items=itemlist.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text) !=-1)
        {
            item.style.display='block';
        }
        else
        {
            item.style.display='none';
        }
    })
}