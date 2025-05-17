

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

        const oldScript = document.getElementById("toDoList-script");
        if (oldScript) oldScript.remove();
  

        if(page.endsWith("task.html")) {
            const s = document.createElement("script");
            s.id = "toDoList-script";
            s.src = "../To-do-list/task.js"
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
loadContent("../To-do-list/task.html")
