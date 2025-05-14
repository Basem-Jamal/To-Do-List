    const containerList = document.querySelector("container")
    const inputBox = document.getElementById("input-box");

function addTask () {
    const containerList = document.querySelector("container")
    const inputBox = document.getElementById("input-box");

    if (containerList) {
        let li = document.createElement("li");

        li.innerHTML = inputBox.value;
        containerList.appendChild(li);

    }
}
