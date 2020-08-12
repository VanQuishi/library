let myLibrary = [];

function Book(title, author, chapters)
{
    //constructor
    this.title = title;
    this.author = author;
    this.chapters = chapters;
}

function addBookToLibrary(title, author, chapters)
{
    //do stuff here
    let book_obj = new Book(title, author, chapters);
    myLibrary.push(book_obj);
}

const shelves = document.querySelector('.shelves');
const newbook = document.querySelector('.newbook');
const container = document.getElementById('container');

function render()
{
    
    myLibrary.forEach(book =>
    {
        let row = shelves.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = book.title;
        cell2.innerHTML = book.author;
        cell3.innerHTML = book.chapters;
    });
}

newbook.addEventListener('click', (e) =>
{
    console.log("button is clicked");
    newbook.disabled = true;
    let br = document.createElement("br");
    //pull out a form

    let form = document.createElement("form");
    form.setAttribute("method", "post");
    //form.setAttribute("action", "submit.php");

    //create input element for title
    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");

   //create input element for author
   let author = document.createElement("input");
   author.setAttribute("type", "text");
   author.setAttribute("name", "author");
   author.setAttribute("placeholder", "Author");

   //create input element for chapters
   let chapters = document.createElement("input");
   chapters.setAttribute("type", "number");
   chapters.setAttribute("name", "chapters");
   chapters.setAttribute("placeholder", "Chapters");

   //create input element for read checkbox
   let text = document.createTextNode("Check if you have read this book");
   let read = document.createElement("input");
   chapters.setAttribute("type", "checkbox");
   //chapters.setAttribute("value", "Yes");

    //create a submit button
    let s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");

    form.appendChild(title);
    form.appendChild(br.cloneNode());

    form.appendChild(author);
    form.appendChild(br.cloneNode());


    form.appendChild(chapters);  //fix negative number options!!!
    //form.appendChild(br.cloneNode());

    form.appendChild(text);
    form.appendChild(read);
    form.appendChild(br.cloneNode());
    form.appendChild(s);

    container.appendChild(form);


});

addBookToLibrary("LangBiang", "NNA", 29);
addBookToLibrary('Harry', 'Unkown', 15);
render();
