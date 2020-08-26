var myLibrary = [];
const shelves = document.querySelector('.shelves');
const newbook = document.querySelector('.newbook');
const container = document.getElementById('container');
const newBookForm = document.getElementById('newBookForm');
//var removeButton = document.createElement('button');
//removeButton.innerText = "Remove";

window.onload = function(){
    render_after_remove();
};

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


function render(index)
{
    if (myLibrary.length > 0)
    {
        var book = myLibrary[index];
        var removeButton = document.createElement('button');
        removeButton.innerText = "Remove";
        removeButton.id = `${index}`;

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
        cell5.appendChild(removeButton);

        removeButton.onclick = function()
        {
            //console.log("remove button is clicked");
            var deleted_index = row.rowIndex;
            console.log(deleted_index);
            myLibrary.splice(deleted_index-1,1);
            //console.log(`number of books remained: ${myLibrary.length}`);
            shelves.deleteRow(deleted_index);
        };
    }
}

function render_after_remove()
{
    for (let i = 0; i < myLibrary.length; i++)
    {
        render(i);
    }
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

    //console.log(myLibrary.length);

    render(myLibrary.length-1);

    console.log('reach render()');

    newBookForm.reset();  //clear out all fields in the form

    newBookForm.style.display = 'none';  //make the form disappear
});





addBookToLibrary("LangBiang", "NNA", 29, true);
addBookToLibrary('Harry', 'Unkown', 15, false);






