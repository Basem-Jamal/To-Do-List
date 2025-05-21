
let addNotes = document.getElementById("addNotes");
const listContainerNotes = document.getElementById("listOfNotes-container");


addNotes.addEventListener("click" , () => {

    let inputBox = document.createElement("p");
    inputBox.className = "notes";
    inputBox.setAttribute("contenteditable","true");
    listContainerNotes.appendChild(inputBox);
    saveNotes();

})
listContainerNotes.addEventListener('click' ,e =>{
    
})


  

function saveNotes () {
    localStorage.setItem("notes", listContainerNotes.innerHTML);
}

function loadNotesFromJson () {
   const data = localStorage.getItem("notes");
   if (data) listContainerNotes.innerHTML = data;
}

loadNotesFromJson();