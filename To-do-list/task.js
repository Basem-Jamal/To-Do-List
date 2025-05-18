(() => {
    const listContainer = document.getElementById("list-container");
    const inputBox      = document.getElementById("input-box");
    const btnAdd        = document.getElementById("btn-addTask");

    btnAdd.addEventListener("click", addTask);

    // إضافة المهمة عند الضغط Enter أو زرّ Add
    inputBox.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        addTask();
      }
    });

    // تحميل المهام المحفوظة
    showList();

    
    function addTask() {
      const text = inputBox.value.trim();
      if (!text) {
        alert("عمي شلونك ؟.. لابد تكتب مهمة على الأقل");
        return;
      }
  
      const li = document.createElement("li");

      const textTask = document.createElement("p");
      textTask.className = "task-text";
      textTask.textContent = text;
      li.appendChild(textTask);
    

      // textTask.addEventListener('blur', finishEdit); 

      const inputNewText = document.createElement("input")
      inputNewText.classList.add("add-New-Text");
      inputNewText.title = "النص الجديد";
      inputNewText.style.display ="none";

      const editBtn = document.createElement("span");
      editBtn.classList.add("edit-task");
      editBtn.title = "تعديل المهمة";


      inputNewText.addEventListener('keydown', e => {
        if(e.key === "Enter") finishEdit();
      })

      inputNewText.addEventListener("blur" ,finishEdit);
    
      const delBtn = document.createElement("span");
      delBtn.classList.add("delete-btn");
      delBtn.innerHTML = "&times;";
      delBtn.title = "حذف المهمة";
      

      listContainer.addEventListener('click', function(e){
        const el = e.target;

        if (el.matches(".edit-task")) {

          inputNewText.value = textTask.textContent;

          textTask.style.display ="none";
  
          inputNewText.style.display ="inline-block";
          
          inputNewText.focus();
  
        }
        if (el.matches(".delete-btn")) {
          el.parentElement.remove("task-text");
          saveData();
  
        }
      })
  
      li.append(inputNewText,editBtn, delBtn);
      listContainer.appendChild(li);
      saveData();
      inputBox.value = "";




      function finishEdit () {

        const newText = inputNewText.value.trim();

        if (newText) {
          textTask.textContent = newText;
          saveData();
        }
        inputNewText.style.display ="none";
        textTask.style.display     ="inline";
      }
    }
    
    listContainer.addEventListener("click", e => {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      }
      else if (e.target.classList.contains("delete-btn")) {
      }

      else if (e.target.tagName === "INPUT") {
        e.target.classList.toggle("add-New-Text");
        saveData();

      }
    });

function saveData() {
  localStorage.setItem("Data", listContainer.innerHTML);
}

function showList() {
  const data = localStorage.getItem("Data");
  if (data) listContainer.innerHTML = data;
}

})();
