/* const book={

    title:'book one',
    author:"john",
    year:'2013',
    getSumarry : function()
    {
        return ` ${this.title} was written by ${this.author} in ${this.year}`;    }
    
    };
console.log(book.getSumarry()); */
/* function book(title,author,year)
{
    this.title=title;
    this.author=author;
    this.year=year;
     this.getsum= function(){
        return ` ${this.title} was written by ${this.author} in ${this.year}`;    }
    
    
}
const book2=new book('java','saurab',2016);
const book1=new book('one','john doe','2013');
console.log(book1.getsum());
console.log(book2.getsum());
 */// get prototype
function book(title,author,year)
{
    this.title=title;
    this.author=author;
    this.year=year;
    
}
// creating prototype
book.prototype.getsum=function()
{
    return ` ${this.title} was written by ${this.author} in ${this.year}`;
};
book.prototype.getage=function()
{
    const years= new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`; 
};
book.prototype.revise=function(newyear)
{
    this.years=newyear;
    this.revised=true;
}
const book2=new book('java','saurab',2016);
const book1=new book('one','john doe','2013');
console.log(book1);
console.log(book2);
book1.revise(2012);
console.log(book1);
// magazine constructor
function magazine(title,author,year,months)
{
    book.call(this,title,author,year);
    this.months=months;
}
//inherit prototype
magazine.prototype=Object.create(book.prototype);
//use magazine constructor
magazine.prototype.constructor=magazine;
const mag=new magazine('c++','piyush',2016,'jan');
console.log(mag.getsum());
console.log(mag);

