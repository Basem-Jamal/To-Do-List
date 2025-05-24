(() => {
    const addNotes = document.getElementById("addNotes");
    const listContainerNotes = document.getElementById("listOfNotes-container");

    
    
      // تفويض حفظ التعديلات عند الكتابة في أي note
  listContainerNotes.addEventListener("input", e => {
    if (e.target.matches(".notes")) {
      saveNotes();
    }
  });
  listContainerNotes.addEventListener("blur", e => {
    if (e.target.matches(".notes")) {
      saveNotes();
    }
  }, true);

    addNotes.addEventListener("click" , (e) => {
        
        const containerErrorNoNotes1 = document.querySelector(".error-no-notes");
        containerErrorNoNotes1.style.display = "none";
        const errorMessage1  = document.getElementById("error-message-top");
        const messageError1  = document.getElementById("message-Error");
        if (containerErrorNoNotes1 || errorMessage1 || messageError1){
          containerErrorNoNotes1.remove();
          errorMessage1.remove();
          messageError1.remove();
        }


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
                
                const containerErrorNoNotes = document.querySelector(".error-no-notes");
                containerErrorNoNotes.style.display = "block";

                const errorMessage = document.getElementById("error-message");
                const messageError = document.getElementById("message-Error");

                if (containerErrorNoNotes) {
                  errorMessage.textContent = "Error! No message found.";
                  
                }

                

                // const attention = document.createElement ("p");
                // attention.className = "no-notes-alert";
                // attention .style.color = "red";
                // attention.style.fontSize = "23px";
                // attention.textContent = "!حجي ما يصير هيك";
                // attention.style.position = "relative";
                // attention.style.top = "200px";
                // attention.style.height = "200px";
                // attention.style.overflow = "none";
                
                listContainerNotes.appendChild(containerErrorNoNotes);
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
