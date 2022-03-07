var todos = [];
var selectedtodo = null;

function main() {
    var leftdiv = document.createElement("div");
    leftdiv.setAttribute("id", "LDIV");
    leftdiv.setAttribute("class","split");
    var rightdiv = document.createElement("div");
    rightdiv.setAttribute("id", "RDIV");
    rightdiv.setAttribute("class","split");
    document.body.appendChild(leftdiv);
    document.body.appendChild(rightdiv);

    var heading = document.createElement("h1");
    heading.innerHTML = "Todo List";
    var subHeading = document.createElement("h2");
    subHeading.innerHTML = "List";
    leftdiv.appendChild(heading);
    leftdiv.appendChild(subHeading);

    var textArea = document.createElement("textarea");
    textArea.setAttribute("class","textAreas");
    textArea.setAttribute("class", "inputBox");
    textArea.setAttribute("id", "InputArea");
    textArea.setAttribute("placeHolder", "write your Task's")
    rightdiv.appendChild(textArea);

    textArea.addEventListener("keydown", Geting_the_input_and_giving_out_put);
}
main();

function Geting_the_input_and_giving_out_put(event) {
    var inputAres = document.getElementById("InputArea");
    var value = inputAres.value;

    if (event.code === "Enter" && value !== "") {
        event.preventDefault();

        var container = document.createElement("div");
        var listItem = document.createElement("p");
        var readbtn = document.createElement("button");
        var edbtn = document.createElement("button");
        var dltbtn = document.createElement("button");

        container.setAttribute("class", "TodoContainer");
        container.appendChild(listItem);
        container.appendChild(readbtn);
        container.appendChild(edbtn);
        container.appendChild(dltbtn);

        listItem.innerHTML = value;
        readbtn.innerHTML = "read";
        edbtn.innerHTML = "edit";
        dltbtn.innerHTML = "delete";

        var leftdiv = document.querySelector("#LDIV");
        leftdiv.appendChild(container);

        readbtn.addEventListener("click", underline);
        edbtn.addEventListener("click", editThing);
        dltbtn.addEventListener("click", deleteThing);

        todos.push(value);
        localStorage.setItem("todos", JSON.stringify(todos));
        inputAres.value = "";
        inputAres.setAttribute("placeHolder","write your Task's");

    }
}

function underline(event) {
    var parent = event.target.parentNode;
    parent.children[0].style.textDecoration = 'line-through';
}

function editThing(event) {
    var popWindo = prompt("Enter new Thing");
    if (popWindo === "") {
        alert("This string is empty");
        popWindo = prompt("Enter new Thing");
    } else {
        var parent = event.target.parentNode;
        var value = parent.children[0];
        value.innerHTML = popWindo;
        console.log(value);
    }
}

function deleteThing(event) {

    var parent = event.target.parentNode;
    var superparent = parent.parentNode;
    superparent.removeChild(parent);
    console.log("fff");
    var storedtodo = localStorage.getItem("todos");
    var storeddlttodo = JSON.parse(storedtodo);
    var element = storeddlttodo.indexOf(parent.children[0]);
    storeddlttodo.splice(element, 1);
    localStorage.setItem("todos", JSON.stringify(storeddlttodo));
}

let storedToDos = localStorage.getItem("todos");
if (storedToDos !== null) {
    todos = JSON.parse(storedToDos);
}
todos.forEach(function (value) {

    var container = document.createElement("div");
    var listItem = document.createElement("p");
    var readbtn = document.createElement("button");
    var edbtn = document.createElement("button");
    var dltbtn = document.createElement("button");

    container.setAttribute("class", "TodoContainer");
    container.appendChild(listItem);
    container.appendChild(readbtn);
    container.appendChild(edbtn);
    container.appendChild(dltbtn);

    listItem.innerHTML = value;
    readbtn.innerHTML = "read";
    edbtn.innerHTML = "edit";
    dltbtn.innerHTML = "delete";

    var leftdiv = document.querySelector("#LDIV");
    leftdiv.appendChild(container);

    readbtn.addEventListener("click", underline);
    edbtn.addEventListener("click", editThing);
    dltbtn.addEventListener("click", deleteThing);
})