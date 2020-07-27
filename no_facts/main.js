let factheading=document.getElementById('factheading');
var selectvalue = document.getElementById('select').value;
let fact = document.getElementById("output");
let facttext = document.getElementById("factText");
var input = document.getElementById('numinput');
input.addEventListener('input', getfact);
//select tag function
function changepar() {
    var selectvalue = document.getElementById('select').value;
    if (selectvalue == 'Number') {
        var text = "please enter number to get random facts";
        input.value = '';
        fact.style.display = 'none';
    } else if (selectvalue == 'Year') {
        text = "please enter year to get random facts";
        input.value = '';
        fact.style.display = 'none';
    }
    else
    {
        text='please select any one';
    }
    document.getElementById('para').innerHTML = `<p>${text}</p>`
}

//function to get
function getfact() {
    if (document.getElementById('select').value == 'Number') {
        getnumbert();

    } else if (document.getElementById('select').value == 'Year') {
        getyear();
    }
}

function getnumbert() {
    var inputvalue = input.value;
    console.log(112);
    if (inputvalue === '') {
        fact.style.display = 'none';
    }
    else {
        fetch('http://numberapi.com/' + inputvalue).
            then((res) => res.text())
            .then((data) => {

                fact.style.display = 'block';
                facttext.innerHTML = data;
                factheading.innerHTML='Number Fact';

            });
    }
}
function getyear() {
    var inputvalue = input.value;
    if (inputvalue === '') {
        fact.style.display = 'none';
    }
    else {
        fetch('http://numberapi.com/' + inputvalue + '/year').
            then((res) => res.text())
            .then((data) => {

                fact.style.display = 'block';
                facttext.innerHTML = data;
                factheading.innerHTML='Year Fact';
            });
    }
}

