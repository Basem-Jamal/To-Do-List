(() => {
    const addNotes = document.getElementById("addNotes");
    const listContainerNotes = document.getElementById("listOfNotes-container");

    
    
    addNotes.addEventListener("click" , (e) => {
        
        const existingAlert = listContainerNotes.querySelector(".no-notes-alert");
        if (existingAlert) existingAlert.remove();



        const wrapper = document.createElement("div");
        wrapper.className = "note-wrapper";
           
        let noteP = document.createElement("p");
        noteP.className = "notes";
        noteP.contentEditable = "true";


        let IconDeleteTask = document.createElement("img");
        IconDeleteTask.className = "Icon-DeleteTask";
        IconDeleteTask.src ="../Notepad/img/Before-TrashCans.png";
        IconDeleteTask.contentEditable = "false";
        IconDeleteTask.style.userSelect = "none";



        IconDeleteTask.addEventListener('mouseover', () => {
            IconDeleteTask.style.transform = 'scale(1.5)';

           
            IconDeleteTask.src ="../Notepad/img/After-TrashCans.png";

          });
          
          IconDeleteTask.addEventListener('mouseout', () => {
            IconDeleteTask.style.filter = 'none';
            IconDeleteTask.src ="../Notepad/img/Before-TrashCans.png";
            IconDeleteTask.style.transform = 'scale(1.2)';
          });
          
        wrapper.append(noteP,IconDeleteTask)
        // listContainerNotes.appendChild(inputBox).appendChild(IconDeleteTask);
        listContainerNotes.appendChild(wrapper);
        saveNotes();
        

       
    })

    listContainerNotes.addEventListener("click" , e => {
        const clickedEl = e.target;

        if (clickedEl.matches(".notes")) {

            document.querySelectorAll("#listOfNotes-container .notes")
            .forEach(el => el.classList.remove("active"));
      
          // 2) أضف active للعنصر المنقر
             clickedEl.classList.add("active");
      
            
        }

        if (clickedEl.matches(".Icon-DeleteTask") ) {
            clickedEl.parentElement.remove();
            saveNotes();
            
            if (listContainerNotes.childElementCount === 0) {

                listContainerNotes.innerHTML = ""; 

                const attention = document.createElement ("p");
                attention.className = "no-notes-alert";
                attention .style.color = "red";
                attention.style.fontSize = "23px";
                attention.textContent = "!حجي ما يصير هيك";
                attention.style.position = "absolute";

                listContainerNotes.appendChild(attention);
                saveNotes();
            }
        }
    
    })
      
    
    function saveNotes () {
        localStorage.setItem("notes", listContainerNotes.innerHTML);
    }
    
    function loadNotesFromJson () {
       const data = localStorage.getItem("notes");
       if (data) listContainerNotes.innerHTML = data;
    }
    
    loadNotesFromJson();
})();
