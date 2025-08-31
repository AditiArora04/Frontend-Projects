let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    if (inp.value.trim() === "") return; // prevent empty tasks

    let item = document.createElement("li");
    // item.innerText = inp.value;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let taskText = document.createTextNode(" " + inp.value + " ");

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "delete";
    delBtn.classList.add("delete");

    item.appendChild(checkbox);
    item.appendChild(taskText);
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
})

ul.addEventListener("click", function (event) {
   if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
   }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function () {
//       let par = this.parentElement;
//       console.log(par);
//       par.remove();
//     });
// }