(() => {
    const listContainer = document.getElementById("list-container");
    const inputBox      = document.getElementById("input-box");

    // إضافة المهمة عند الضغط Enter أو زرّ Add
    inputBox.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        addTask();
      }
    });
    document.getElementById("btn-addTask")
            .addEventListener("click", addTask);
    
    function addTask() {
      const text = inputBox.value.trim();
      if (!text) {
        alert("عمي شلونك ؟.. لابد تكتب مهمة على الأقل");
        return;
      }
  
      const li = document.createElement("li");
      li.textContent = text;
  
      const inputNewText = document.createElement("input")
      inputNewText.classList.add("add-New-Text");
      inputNewText.title = "النص الجديد";
      inputNewText.style.display ="none";


      const editBtn = document.createElement("span");

      editBtn.classList.add("edit-task");
      editBtn.title = "تعديل المهمة";
      editBtn.addEventListener ('click' ({
          
      }))
      inputNewText.value = li.firstChild.value;
      inputNewText.style.display="block";
    
      const delBtn = document.createElement("span");
      delBtn.classList.add("delete-btn");
      delBtn.innerHTML = "&times;";
      delBtn.title = "حذف المهمة";
      
  
      li.append(inputNewText,editBtn, delBtn);
      listContainer.appendChild(li);
      saveData();
      inputBox.value = "";
    }
    
    listContainer.addEventListener("click", e => {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      }
      else if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove("edit-task");
        saveData();
      }
      else if (e.target.classList.contains("edit-task")) {
        let newText 
        
      }

    });

function saveData() {
  localStorage.setItem("Data", listContainer.innerHTML);
}

function showList() {
  const data = localStorage.getItem("Data");
  if (data) listContainer.innerHTML = data;
}
showList();

})();
