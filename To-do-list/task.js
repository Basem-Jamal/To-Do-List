class clsTask {
  
  constructor () {
    this.listContainer = document.getElementById("list-container");
    this.inputBox      = document.getElementById("input-box");
    this.btnAdd        = document.getElementById("btn-addTask");


  }

    // listContainer.addEventListener("click", handleListClick)
  attachEvents() {

    this.btnAdd.addEventListener("click", this.addTask());

    
    // إضافة المهمة عند الضغط Enter أو زرّ Add
    this.inputBox.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.addTask();
      }
    });

    this.listContainer.addEventListener("click", e => this.handleClick(e));
    this.listContainer.addEventListener("keydown", e =>
      e.target.matches("input.add-New-Text") && e.key === "Enter" && this.finishEdit(e.target)
    );
    this.listContainer.addEventListener("focusout", e =>
      e.target.matches("input.add-New-Text") && this.finishEdit(e.target),
      true
    );
  }

  handleClick(e) {
    const btn = e.target;
    const li  = btn.closest("li");
    if (!li) return;

    // تعديل
    if (btn.matches(".edit-task")) {
      const textP = li.querySelector(".task-text");
      const input = li.querySelector("input.add-New-Text");
      input.value         = textP.textContent;
      textP.style.display = "none";
      input.style.display = "inline-block";
      input.focus();
      return;
    }

    // حذف
    if (btn.matches(".delete-btn")) {
      li.remove();
      this.saveData();
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
  }

  
    finishEdit (inputEl) {

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


    addTask() {
      const text = this.inputBox.value.trim();
      if (!text) {
        // alert("عمي شلونك ؟.. لابد تكتب مهمة على الأقل");
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
      this.listContainer.append(li);
      this.saveData();
      this.inputBox.value = "";
    
    }
    

  saveData() {
  localStorage.setItem("Data", this.listContainer.innerHTML);
  }

  showList() {
    const data = localStorage.getItem("Data");
    if (data) this.listContainer.innerHTML = data;
  }
}

  
app = new clsTask;
app.showList();
app.attachEvents();
