const addbtn = document.querySelector("#add-btn");
const clsbtn = document.querySelector("#cancel-button");
const addToLibrary = document.querySelector("#add-book");

const inputText = document.querySelector("#addname");
const inputAuthor = document.querySelector("#addauthor");
const inputPages = document.querySelector("#addpages")

const container = document.querySelector("#main");

addbtn.addEventListener("click", () =>{
    adding.classList.add("open");
});
clsbtn.addEventListener("click", () =>{
    adding.classList.remove("open");
});

const myLibrary = [];

function Book(name, authorName, pageNumber, option){
    this.name = name;
    this.authorName = authorName;
    this.pageNumber = pageNumber;
    this.option = option;
    const book = {
        title : name,
        author : authorName,
        pN : pageNumber,
        choice : option
    }
    this.addBook = function(){
        myLibrary.push(book);
    }
}

function addBookToLibrary(Library){
    container.innerHTML = ""; // Clear the container

    for (let i = 0; i < Library.length; i++) {
        var title = Library[i].title;
        var authorName = Library[i].author;
        var pageNumber = Library[i].pN;
        var option = Library[i].choice;

        // Create the outer section div
        const section = document.createElement("div");
        section.className = "section";

        // Book Title
        const titleWrapper = document.createElement("div");
        const titleLabel = document.createElement("p");
        titleLabel.textContent = "Book: ";
        const titleP = document.createElement("p");
        titleP.textContent = title;

        titleWrapper.append(titleLabel, titleP);
        section.append(titleWrapper);

        // Author Name
        const authorWrapper = document.createElement("div");
        const authorLabel = document.createElement("p");
        authorLabel.textContent = "Author: ";
        const authorP = document.createElement("p");
        authorP.textContent = authorName;

        authorWrapper.append(authorLabel, authorP);
        section.append(authorWrapper);

        // Page Number
        const pageWrapper = document.createElement("div");
        const pageLabel = document.createElement("p");
        pageLabel.textContent = "Page Number: ";
        const pageP = document.createElement("p");
        pageP.textContent = pageNumber;

        pageWrapper.append(pageLabel, pageP);
        section.append(pageWrapper);

        // Read Status
        const optionWrapper = document.createElement("div");
        const optionLabel = document.createElement("p");
        optionLabel.textContent = "Read: ";
        const optionP = document.createElement("p");
        optionP.textContent = option;

        optionWrapper.append(optionLabel, optionP);
        section.append(optionWrapper);

        // Append the section to the container
        container.append(section);
    }
}
addToLibrary.addEventListener("click", () =>{
    const yesChecked = document.querySelector("#read-yes").checked;
    const noChecked = document.querySelector("#read-no").checked;
    const bookName = inputText.value;
    const authorName = inputAuthor.value;
    const pageNumber = inputPages.value;
    var option = "";
    if(yesChecked){
        option = "Read";
    }else if(noChecked){
        option = "Not Read";
    }
    const book = new Book(bookName, authorName, pageNumber, option);
    book.addBook();
    console.log(myLibrary);
    addBookToLibrary(myLibrary);
    adding.classList.remove("open");

});