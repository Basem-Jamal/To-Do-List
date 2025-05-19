(() => {
    const listContainer = document.getElementById("list-container");
    const inputBox      = document.getElementById("input-box");
    const btnAdd        = document.getElementById("btn-addTask");


    // listContainer.addEventListener("click", handleListClick)


    btnAdd.addEventListener("click", addTask);

    
    // إضافة المهمة عند الضغط Enter أو زرّ Add
    inputBox.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        addTask();
      }
    });


    // inputNewText.addEventListener("blur" ,finishEdit);


    listContainer.addEventListener('click', function(e){
      const btn = e.target;
      const li = btn.closest("li");
      if (!li) return;

      const textP = li.querySelector(".task-text");
      const input = li.querySelector("input.add-New-Text");
      // ملاخظة لماذا كتبت btn وهناك li = btn ?;
      if (btn.matches(".edit-task")) {
        input.value         = textP.textContent;
        textP.style.display = "none";
        input.style.display = "inline-block";
        input.focus();

        return;

      }

      if (btn.matches(".delete-btn")) {
        li.remove();
        saveData();
        return;

      }

      if (btn.tagName === "LI") {
        li.classList.toggle("checked"); 
        saveData();
      }
    });

    listContainer.addEventListener("keydown", e => {
      if (e.target.matches("input.add-New-Text") && e.key === "Enter") {
        finishEdit(e.target);
      }
      // لماذا وضعت هنا true ?
    });


    listContainer.addEventListener("focusout", e => {
      if (e.target.matches("input.add-New-Text")) {
        finishEdit(e.target);
      }
    }, true);
  
    function finishEdit (inputEl) {

      const li    = inputEl.closest("li"); // لماذا ؟
      const textP = li.querySelector(".task-text");
      const v     = inputEl.value.trim();

      if (v) {
        textP.textContent = v;
        saveData();
      }
      inputEl.style.display ="none";
      textP.style.display   ="inline";
    }

  // 3)— addTask unchanged وظيفياً
  btnAdd.addEventListener("click", addTask);
  inputBox.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  });



    function addTask() {
      const text = inputBox.value.trim();
      if (!text) {
        alert("عمي شلونك ؟.. لابد تكتب مهمة على الأقل");
        return;
      }
  
      const li = document.createElement("li");

      const textP = document.createElement("p");
      textP.className = "task-text";
      textP.textContent = text;
      // li.appendChild(textTask);
    

      // textTask.addEventListener('blur', finishEdit); 
      const input = document.createElement("input");

      input.className     = "add-New-Text";
      input.title         = "النص الجديد";
      input.style.display = "none";


      const editBtn = document.createElement("span");
      editBtn.className = 'edit-task';
      editBtn.title = 'تعديل المهمة';

    
      const delBtn = document.createElement("span");
      delBtn.classList.add("delete-btn");
      delBtn.innerHTML = "&times;";
      delBtn.title = "حذف المهمة";
      
  
      li.append(textP,input,editBtn, delBtn);
      listContainer.append(li);
      saveData();
      inputBox.value = "";
    
    }
    

function saveData() {
  localStorage.setItem("Data", listContainer.innerHTML);
}

function showList() {
  const data = localStorage.getItem("Data");
  if (data) listContainer.innerHTML = data;
}
showList();

})();
