document.getElementById('gettext').addEventListener('click',gettext =>
{
//console.log(123);
/* let xhr= new XMLHttpRequest();
xhr.open('GET','sample.txt',true);
console.log(xhr.readyState);
xhr.onload = function()
{
 if(this.status==200)
 {
     console.log(xhr.responseText);
     var output=xhr.responseText;
     var divout=document.getElementById('put');
     divout.innerHTML=output;

 }
}
xhr.send(); */
fetch('sample.txt')
.then((res)=> res.text())
.then((data)=> {
    var divout=document.getElementById('put');
     divout.innerHTML=data;
} )

});
document.getElementById('getjson')
.addEventListener('click',getjson =>
{
fetch('users.json')
.then((res)=> res.json())
.then((data) =>
{
    var jsonoutput=document.getElementById('jsonoutput');
    var output='';
    console.log(data);
    for(let i in data)
    {
      output+=`
      <ul class="list-group mb-3" >
      <li class="list-group-item">name:${data[i].name}</li>
      <li class="list-group-item">id:${data[i].id}</li>
      <li class="list-group-item">email:${data[i].email}</li>
      </ul>
      `

    }
    jsonoutput.innerHTML=output;
})
});
document.getElementById('getapi').
addEventListener('click',getapi =>
{
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.json())
.then((data)=> 
{
    var apioutput=document.getElementById('apioutput');
     var output='';
     console.log(data);
     data.forEach(data => {
         output+=`
         <h2>${data.title}</h3>
         <p>${data.body}</p>
         `
     });
     apioutput.innerHTML=output;
})
});
document.getElementById('form').
addEventListener('submit',(e) =>
{
e.preventDefault();
let title=document.getElementById('title').value;
let body=document.getElementById('body').value;
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'post',
    headers:{
         'Accept':'application/json,text/plain,*/*',
         'Content-type':'application/json'
    },
    body:JSON.stringify({title:title,body:body})
})
.then((res) => res.json())
.then((data)=> console.log(data))
})