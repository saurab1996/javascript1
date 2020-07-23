var output='';
const search=document.getElementById('search');
//search state json and filter
const searchstate= async searchtext =>
{
    const res=await fetch('city.json');
    const states =await res.json();
    //get match to current input 
    let matches=states.filter(state =>
        {
            const regex=new RegExp(`^${searchtext}`,'gi');
            return state.name.match(regex) || state.abbr.match(regex);
        });
        if(searchtext.length === 0)
        {
            matches=[];
        }
       outputhtml(matches);
}; 
const outputhtml=matches =>{
if(matches.length >0)
{
    const html=matches.map(match => `
    <div class="card card-body mb-1"> 
        <h4>${match.name}(${match.abbr})
        <span class="text-primary">${match.capital}</span>
        </h4>
        <small>lat:${match.lat}/long:${match.long}</small>
        </div>
    `).join(``);
    console.log(html);
    document.getElementById('match-list').innerHTML=html;
}
};
search.addEventListener('input',() =>searchstate(search.value));


