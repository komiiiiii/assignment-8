(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      const password = form.querySelector('#password');
      const confirmPassword = form.querySelector('#confirmPassword');

      // Check password match
      if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
      } else {
        confirmPassword.setCustomValidity("");
      }

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();

$(document).ready(function () {
  $(".fade-page").css("opacity", 0).animate({ opacity: 1 }, 800);
});

function changeParagraph() {
  const paragraph = document.getElementById("changeText");
  paragraph.innerHTML = `
    Arctic Monkeys are an English rock band formed in Sheffield in 2002.
    They comprise lead singer and guitarist Alex Turner, drummer Matt Helders,
    guitarist Jamie Cook and bassist Nick O'Malley.
    The co-founder and original bassist Andy Nicholson left in 2006.
    Though initially associated with the short-lived landfill indie movement,
    Arctic Monkeys were one of the earliest bands to come to public attention via the Internet,
    during the emerging "blog rock" era.
    Commentators have suggested that this period marked a shift in how new bands were promoted and marketed.
  `;
}
function changeBackground() {
  const box = document.getElementById("styleBox");
  box.style.backgroundColor = "purple";   
}

function changeFontSize() {
  const box = document.getElementById("styleBox");

  // Get current font size and increase it by 2px
  const currentSize = window.getComputedStyle(box).fontSize;
  const newSize = parseInt(currentSize) + 2 + "px";
  box.style.fontSize = newSize;
}
// Creating & removing elements
const bandMembers = [
  "Chris Salih",
  "Nick Thomas",
  "Skyler Acord",
  "Todd Gummerman",
  "Paul Meany",
  "Dan Geraghty",
  "Jesse Blum",
  "Kenyon Dixon",
  "Danielle Withers"
];

let currentIndex = 0;

function addItem() {
  const list = document.getElementById("itemList");

  // Only add while there are remaining names
  if (currentIndex < bandMembers.length) {
    const newItem = document.createElement("li");
    newItem.textContent = bandMembers[currentIndex];
    newItem.className = "list-group-item bg-dark text-light"; 
    list.appendChild(newItem);
    currentIndex++;
  }
}

function removeItem() {
  const list = document.getElementById("itemList");

  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
    currentIndex--;
  }
}
// Hover effect on styleBox 
const styleBox = document.getElementById("styleBox");

if (styleBox) {
  const originalColor = "#7c7c7cff";
  const originalTextColor = "white";

  styleBox.addEventListener("mouseover", () => {
    styleBox.style.backgroundColor = "red";  // new color on hover
    styleBox.style.color = "black";            // change text color for contrast
  });

  styleBox.addEventListener("mouseout", () => {
    styleBox.style.backgroundColor = originalColor; // restore original
    styleBox.style.color = originalTextColor;
  });
}
// Keyboard events: Concert dates
const concertInput = document.getElementById("concertInput");
const concertOutput = document.getElementById("concertOutput");

if (concertInput && concertOutput) {
  concertInput.addEventListener("keyup", () => {
    concertOutput.textContent = concertInput.value;
  });
}
let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") return;

  tasks.push({ text, completed: false });
  input.value = "";
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = ""; // clear existing content

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "tobuy-item";

    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = "tobuy-text" + (task.completed ? " completed" : "");
    span.onclick = () => toggleTask(index); 

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "tobuy-delete-btn";
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}
