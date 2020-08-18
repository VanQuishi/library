var myLibrary = [];
const shelves = document.querySelector('.shelves');
const newbook = document.querySelector('.newbook');
const container = document.getElementById('container');
const newBookForm = document.getElementById('newBookForm');
var removeButton = document.createElement('button');
removeButton.innerText = "Remove";


function Book(title, author, chapters, read)
{
    //constructor
    this.title = title;  
    this.author = author;    
    this.chapters = chapters;   //numbers
    this.read = read;  //bool
}

function addBookToLibrary(title, author, chapters, read)
{
    //do stuff here
    const book_obj = new Book(title, author, chapters, read);
    myLibrary.push(book_obj);
}


function render()
{
    if (myLibrary.length > 0)
    {
        var book = myLibrary[myLibrary.length - 1];

        let row = shelves.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        cell1.innerHTML = book.title;
        cell2.innerHTML = book.author;
        cell3.innerHTML = book.chapters;
        cell4.innerHTML = book.read;
        cell5.appendChild(removeButton.cloneNode(true));
    }
    
    
    /*myLibrary.forEach(book =>
    {
        let row = shelves.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerHTML = book.title;
        cell2.innerHTML = book.author;
        cell3.innerHTML = book.chapters;
        cell4.innerHTML = book.read;
    });*/
}


newbook.addEventListener('click', (e) =>
{
    newBookForm.style.display = 'block';
});

newBookForm.addEventListener('submit', (e) =>
{
    e.preventDefault();  //stops the page from reloading after submitting the form
    
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let chapters = document.getElementById('chapters').value;
    let read = document.getElementById('read').checked;  //returns true or false

    addBookToLibrary(title, author, chapters, read);

    console.log(myLibrary.length);

    render();

    console.log('reach render()');

    newBookForm.reset();  //clear out all fields in the form

    newBookForm.style.display = 'none';  //make the form disappear
});





//addBookToLibrary("LangBiang", "NNA", 29, true);
//addBookToLibrary('Harry', 'Unkown', 15, false);
render();


/*newbook.addEventListener('click', (e) =>
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
    title.id = "title";

   //create input element for author
   let author = document.createElement("input");
   author.setAttribute("type", "text");
   author.setAttribute("name", "author");
   author.setAttribute("placeholder", "Author");
   author.id = "author";

   //create input element for chapters
   let chapters = document.createElement("input");
   chapters.setAttribute("type", "number");
   chapters.setAttribute("name", "chapters");
   chapters.setAttribute("placeholder", "Chapters");
   chapters.id = "chapters";

   //create input element for read checkbox
   let text = document.createTextNode("Check if you have read this book");
   let read = document.createElement("input");
   read.setAttribute("type", "checkbox");
   //chapters.setAttribute("value", "Yes");

    //create a submit button
    //let s = document.createElement("button");
    let s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    //s.setAttribute("content", "Submit");


    form.appendChild(title);
    form.appendChild(br.cloneNode());

    form.appendChild(author);
    form.appendChild(br.cloneNode());


    form.appendChild(chapters);  //fix negative number options!!!
    form.appendChild(br.cloneNode());

    form.appendChild(text);
    form.appendChild(read);
    form.appendChild(br.cloneNode());
    form.appendChild(s);

    container.appendChild(form);

    //const submit = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (e) =>
    {
        //console.log("submit is clicked");
        let title_value = document.getElementById('title').value;
        let author_value = document.getElementById('author').value;
        //let chapters_value = chapters.textContent;

        console.log(title_value);
    });
});*/




