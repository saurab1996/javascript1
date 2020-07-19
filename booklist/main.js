//book class
class bookclass
{
     constructor (title,author,isbn)
    {
        this.title=title;
        this.author=author;
        this.isbn=isbn;

    }

}
const form=document.querySelector('#book-form');
form.addEventListener('submit',(e) =>
{  
     bookinfo(title,author,isbn)
    {  e.preventDefault();
        title=title;
        author=author;
        isbn=isbn;
    }
    e.preventDefault();
    var title=document.querySelector("#title").Value;
    var author=document.querySelector("#author").Value;
    var isbn=document.querySelector("#isbn").Value;
    console.log(title);
    bookinfo(title,author,isbn);
    console.log(bookinfo);
}
);
//ui class:handles ui tasks
class ui
{
    static displaybook()
    { const storedbooks=[
        {title:"one",
        author:"john one",
        isbn:'12345'},
        {
            title:"two",
            author:"john two",
            isbn:'54321'   
        }
    ];
      const books=storedbooks;
      books.forEach((book)=>ui.addbooktolist(book));
    }
    static addbooktolist(book)
    {
        const list=document.querySelector('#book-list');
        const row=document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }
}
//store class:handles storeage

//event:display book
document.addEventListener('DOMContentLoaded',ui.displaybook);

//event:add book


//event;remove book
