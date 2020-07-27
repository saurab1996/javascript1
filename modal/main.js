var button=document.getElementById("modal");
var modal=document.getElementById("simplemodal");
var closebtn=document.getElementById("closebtn");
closebtn.addEventListener("click",closemodal =>{
 simplemodal.style.display="none";
 button.style.display="block";
});
button.addEventListener("click",openmodal =>
{
 simplemodal.style.display="block";
 button.style.display="none";
});
window.addEventListener("click",outsideclick);
function outsideclick(e)
{ if(e.target == simplemodal)
    {
    simplemodal.style.display='none';
    button.style.display="block"
}};