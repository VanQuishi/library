let myLibrary = [];

function Book(name, author, pages)
{
    //constructor
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(name, author, pages)
{
    //do stuff here
    let book_obj = new Book(name, author, pages);
    myLibrary.push(book_obj);
}

const shelves = document.querySelector('.shelves');

function render()
{
    
    myLibrary.forEach(book =>
    {
        let row = shelves.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = book.name;
        cell2,innerHTML = book.author;
        cell3.innerHTML = book.pages;
    });
}

addBookToLibrary("LangBiang", "NNA", 11000);
addBookToLibrary('Harry', 'Unkown', 11000);
render();