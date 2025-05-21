

function loadContent (page) {
    console.log("🔄 Loading:", page);
    fetch(page)
    .then(res => {
        if(!res.ok) throw new Error (`HTTP status ${res.status}`);
        return res.text();
    })
    .then(html => {
        const container = document.getElementById("content-loader");
        container.innerHTML = html;

        //Down > Task Script
        const oldScriptTask = document.getElementById("toDoList-script");
        if (oldScriptTask) oldScriptTask.remove();
  

        const oldScriptNote = document.getElementById("notes-script");
        if (oldScriptNote) oldScriptNote.remove();

        const oldScriptTime = document.getElementById("time-script");
        if (oldScriptTime) oldScriptTime.remove();


        if(page.endsWith("task.html")) {
            const s = document.createElement("script");
            s.id = "toDoList-script";
            s.src = "../To-do-list/task.js"
            document.body.appendChild(s);

        }

        else if (page.endsWith("note.html")) {
            const s = document.createElement("script");
            s.id = "notes-script";
            s.src = "../Notepad/note.js"
            document.body.appendChild(s);
        } 

        else if (page.endsWith("time.html")) {
            const s = document.createElement("script");
            s.id = "time-script";
            s.src = "../endTaskTime/time.js"
            document.body.appendChild(s);
        } 

    })
    .catch(err => {
        console.error("❌ loadContent error:", err);
        document.getElementById("content-loader").innerHTML =
          "<p>حدث خطأ أثناء تحميل الصفحة</p>";
      });
  

}

const toDoListBtn = document.getElementById("btn-To-Do-List");
const NoteBookBtn = document.getElementById("btn-Note-Book");
const endTaskTimeBtn = document.getElementById("btn-end-Task-Time")

toDoListBtn.addEventListener("click" , e => {
    e.preventDefault();
    loadContent("../To-do-list/task.html")
})
NoteBookBtn.addEventListener("click" , e => {
    e.preventDefault();
    loadContent("../Notepad/note.html")
})
endTaskTimeBtn.addEventListener("click" , e => {
    e.preventDefault();
    loadContent("../endTaskTime/time.html")
})
loadContent("../Notepad/note.html")
