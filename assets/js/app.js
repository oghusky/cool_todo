// ==============word for a named data type - variable
// =============name for a list of element - array
//================ what is an if statement used for - conditional statements
// var todoListArr = ["item 1", "item 2", "item 3", "item 4"];
// ===========for loops are used to show each element of a given array
// ===========first element in for loop sets where to start
// ==============second element in for loop sets where to stop
// ==============third element sets how many hops to make at once
// for (var i = 0; i < todolist.length; i++) {
//   // =============="i" is the index not the count
//   // ==================how to show only certain elements in array
//   if (i > 0 && i < 3) {
//     // console.log(todolist[i]);
//   }
// }
//================= objects 
// ==========================written in key value pairs. key is before colon value is after colon
var person = {
  name: "John",
  age: 21,
  job: "Executive"
}
// console.log("Log from line 21 in app.js", person.age);
// =================grab HTML element
// ==================grab form
var todoForm = document.querySelector("form");
// document.getElementsByTagName("form");
// -========================grab input with id="todo_input"
var todoInput = document.querySelector("#todo_input");
// document.getElementsByTagName("input");
// document.getElementById("todo_input");
// ============== grab button
var button = document.querySelector("button");
// document.getElementsByTagName("button");
// ====================grab section with id="todo_list"
var todoList = document.querySelector("#todo_list");
// document.querySelector("section");
// document.getElementById("todo_list");
// document.getElementsByTagName("section");
// =========== a function is a set of instructions you want to follow
// ============= to write a function 
// =========== use the word function then a name then parentheses then curly braces
// function addToDo() {
//   // create element
//   var todoItem = document.createElement("p");
//   // create text that goes in element
//   todoItem.textContent = "finish homework";
//   // put inside todo list section
//   todoList.append(todoItem);
// }
// // call function 
// addToDo();
// create click event for button
// grab variable name for button and add event listener
// put function inside of event listener so that it doesn't call until button is clicked
// button.addEventListener("click", function (banana) {
//   // prevent default keeps page from reloading after button click
//   banana.preventDefault();
//   // banana is a variable that gets it's info from the event listener
//   console.log(event);

//   // create element
//   var todoItem = document.createElement("div");
//   // create text that goes in element
//   // text is from input
//   // how do we get text from our input?
//   todoItem.textContent = todoInput.value;
//   // put element inside of todo list section
//   todoList.append(todoItem);
// });
// for (var i = 0; i < todoListArr.length; i++) {
//   var date = new Date();
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//   var todoItem = document.createElement("p");
//   // todoItem.innerHTML = "<h3>" + todoListArr[i] + " <span>" + hours + ":" + minutes + "</span></h3>";
//   //string literal 
//   todoItem.innerHTML = `<h3>${todoListArr[i]} <span>${hours}:${minutes}</span></h3>`;
//   todoList.append(todoItem);
// }
// array is set to empty because we don't wan to populate it until button is clicked
var todoListArr = [];
// nothing inside of event listener happens until buttno click
button.addEventListener("click", function (banana) {
  // keeps page from reloading
  banana.preventDefault();
  // sends text from input to todoListArr
  todoListArr.push(todoInput.value);
  // empty out html each time before showing array of items. 
  todoList.innerHTML = "";
  todoInput.value = "";
  // Loops through todoList array
  for (var i = 0; i < todoListArr.length; i++) {
    // get date object
    var date = new Date();
    // how to get hours from date object
    var hours = date.getHours();
    // how to get minutes from date object
    var minutes = date.getMinutes();
    // how to get second from date object
    var seconds = date.getSeconds();
    // create element
    var todoItem = document.createElement("div");
    // todoItem.innerHTML = "<h3>" + todoListArr[i] + " <span>" + hours + ":" + minutes + "</span></h3>";
    //string literals
    // design the way todo item looks
    todoItem.innerHTML = `<h3>${todoListArr[i]}</h3>`;
    // append each todoitem to todolist section
    todoList.append(todoItem);

  }
})

// 1. grab all html elements need
// 2. make a function for what you "ultimate"ly want to happen
// 3. created click event to show ultimate function 
// 4. then remove ultimate function set click event for input.value
// 5. after input value click to push input.value to array
// 6. after pushgin to array design your todo.

