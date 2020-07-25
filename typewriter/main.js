/* const  typewriter=function(txtelement,words,wait=3000)
{
this.txtelement=txtelement;
this.words=words;
this.wait=parseInt(wait,10);
this.txt='';
this.wordIndex=0;
this.type();
this.isdeleting=false

};typewriter.prototype.type=function()
{   const current=this.wordIndex % this.words.length;
    const fulltxt=this.words[current];
    if(this.isdeleting)
    {

        //delete text to 
        this.txt=fulltxt.substring(0,this.txt.length - 1);
    }
    else
    {
        //add text to 
        this.txt=fulltxt.substring(0,this.txt.length +1);
    }
     document.getElementById('txt-type').innerHTML=`<span class="txt">
     ${this.txt}
     </span>`
     let typespeed=300;
     if(this.isdeleting)
     {
         typespeed /=2;
     }   
     if(!this.isdeleting && this.txt===fulltxt){
       typespeed=this.wait;
       this.isdeleting=true;
         
     } 
     else if(this.isdeleting && this.txt==='')
     {
    
       this.isdeleting=false;
       this.wordIndex++;
       typespeed=500;
     }
     setTimeout(()=> this.type(),typespeed);
};
//type method
//init on dom load
document.addEventListener('DOMContentLoaded',init);
//init app
function init()
{
    const txtelement=document.getElementById('txt-type');
    const words=JSON.parse(txtelement.getAttribute("data-words"));
    const wait=txtelement.getAttribute('data-wait');
    //init typewritetr
    new typewriter(txtelement,words,wait);

} */
//es6 class
class typewriter {
    constructor(txtelement, words, wait = 3000) {
        this.txtelement = txtelement;
        this.words = words;
        this.wait = parseInt(wait, 10);
        this.txt = '';
        this.wordIndex = 0;
        this.type();
        this.isdeleting = false

    }
    type() {
        const current = this.wordIndex % this.words.length;
        const fulltxt = this.words[current];
        if (this.isdeleting) {

            //delete text to 
            this.txt = fulltxt.substring(0, this.txt.length - 1);
        }
        else {
            //add text to 
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
        document.getElementById('txt-type').innerHTML = `<span class="txt">
         ${this.txt}
         </span>`
        let typespeed = 300;
        if (this.isdeleting) {
            typespeed /= 2;
        }
        if (!this.isdeleting && this.txt === fulltxt) {
            typespeed = this.wait;
            this.isdeleting = true;

        }
        else if (this.isdeleting && this.txt === '') {

            this.isdeleting = false;
            this.wordIndex++;
            typespeed = 500;
        }
        setTimeout(() => this.type(), typespeed);
    }
}
document.addEventListener('DOMContentLoaded', init);
//init app
function init() {
    const txtelement = document.getElementById('txt-type');
    const words = JSON.parse(txtelement.getAttribute("data-words"));
    const wait = txtelement.getAttribute('data-wait');
    //init typewritetr
    new typewriter(txtelement, words, wait);

}