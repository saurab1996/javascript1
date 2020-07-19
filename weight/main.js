document.getElementById('output').style.visibility='hidden';
let isinput=document.getElementById('ispound');
isinput.addEventListener('input',convert);
function convert(e)
{
    document.getElementById('output').style.visibility='visible';
   //let pound=e.target.value;
   let pound=document.getElementById('ispound').value;
   //console.log(pound);
   let gram=document.getElementById('gramsoutput');
   gram.innerHTML=pound/0.0022046;
   let kgram=document.getElementById('kgoutput');
   kgram.innerHTML=pound/2.2046;
   let oz=document.getElementById('ozoutput');
   oz.innerHTML=pound*16;
}