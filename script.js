const listContainer = document.getElementById("list-container")
const inputBox = document.getElementById("input-box");

inputBox.addEventListener("keydown" , e => { 
        
    if (e.key === "Enter") {
        e.preventDefault();  // يمنع السلوك الافتراضي (مثلاً لو داخل فورم)
        addTask();           // ينادي دالتك لإضافة المهمة
    
    }
});


function addTask () {

    if (inputBox.value === "") {
        alert("عمي شلونك ؟.. لابد تكتب مهمة على الأقل");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");

        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value ="";
}

listContainer.addEventListener("click",function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
},false);
