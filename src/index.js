document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let result = e.target.children[1].value;
    let toDoList = document.getElementById("tasks");
    let item = document.createElement("li");
    item.innerText = result;
    toDoList.appendChild(item);
  });
  //let buttonClick = document.getElementById("");
});
