const companies=[
    {name:"company one",category:"finance", start:1981,end:2003},
    {name:"company two",category:"auto",start:1990,end:2001},
    {name:"company three",category:"retail",start:1992,end:2013},
    {name:"company four",category:"technology",start:1995,end:2013},
    {name:"company five",category:"finance",start:1999,end:2003},
    {name:"company six",category:"retail",start:1986,end:2007},
    {name:"company seven",category:"auto",start:1984,end:2016},
    {name:"company eight",category:"technology",start:1988,end:1989}
]
;
const ages=[
    33,12,20,16,5,54,21,44,61,13,15,45,25,64,30
];
/* for(let i=0;i<companies.length;i++)
{
    console.log(companies[i].name,companies[i].category);

} */
//foreach
/* companies.forEach(function(company){
    console.log(company.name);
}) 

//filter 
let candrink=[];
ages.forEach(function(age){
    if (age>=21) {
        candrink.push(age);
    }
})
console.log(candrink); */
/* let candrink=ages.filter(age => age >=21);
console.log(candrink);
//filter retail comapnies
let retailcomapnies=companies.filter(com => com.start >=1980 && com.end === 2003);
console.log(retailcomapnies);
let last=companies.filter(com =>  (com.end - com.start >=30));
console.log(last); */
//map
  // create array of company names
  /* let companyname=companies.map(com => `${com.name} [${com.start} - ${com.end}]`);
  console.log(companyname);/* 
  let input=document.getElementById('input');
  input.innerHTML=companyname; 
  let agemap=ages.map
        (age => Math.sqrt(age))
        .map(age => age * 2);
  console.log(agemap); */
//sort
 //sorted companies in starting age
/*  let sortedcompanies= companies.sort( (c1,c2) => (c1.start > c2.start ? 1 : -1));
       console.log(sortedcompanies); 
// sorted ages
  let sortedages=ages.sort((a,b) => b - a); 
  console.log(sortedages);   */ 

//reduce
let agesum=0;
/* for(let i=0;i<ages.length;i++)
{
    agesum=agesum + ages[i];
}
console.log(agesum);
 */
/* agesum=ages.reduce((total,age) => total + age ,0);
console.log(agesum);
let totalyear=companies.reduce((sum,comp) => sum + (comp.end - comp.start),0);
console.log(totalyear);
 */
//comined method
let club=ages
   .map(age => age * 2)
   .filter(age => age >=40)
   .sort((a,b)=> a - b)
   .reduce((total,age) => total+age,0);

console.log(club);