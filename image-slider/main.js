const slider=document.querySelectorAll(".slide");
console.log(slider);
const next=document.getElementById("next");
const prev=document.getElementById("prev");
const auto=false;
const time=1000;
let slideinterval;

const nextSlide=()=>{

    const current=document.querySelector(".current");
    //remove current class
    current.classList.remove('current');
    //check for next slide
    if(current.nextElementSibling){
        //add current next siling
        current.nextElementSibling.classList.add('current');
        
    }else
    {
        //add curent to start
        slider[0].classList.add('current');
    }
    setTimeout(() => {
       current.classList.remove('current'); 
    });
}
const prevSlide=()=>{

    const current=document.querySelector(".current");
    //remove current class
    current.classList.remove('current');
    //check for prev slide
    if(current.previousElementSibling){
        //add current prev siling
        current.previousElementSibling.classList.add('current');
        
    }else
    {
        //add curent to last
        slider[slider.length -1].classList.add('current');
    }
    setTimeout(() => {
       current.classList.remove('current'); 
    });
}
//add event button
next.addEventListener("click",(e) =>
{
    nextSlide();
    if(auto)
{  
    clearInterval(slideinterval);
    slideinterval=setInterval(nextSlide,time);
}
});
prev.addEventListener('click',(e)=>
{
    if(auto)
{  
    clearInterval(slideinterval);
    slideinterval=setInterval(nextSlide,time);
}
});
//auto slide
if(auto)
{
    slideinterval=setInterval(nextSlide,time);
}