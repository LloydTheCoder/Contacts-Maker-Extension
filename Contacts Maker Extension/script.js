const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal_container');

open.addEventListener('click', () => {
	modal.classList.add('show');
});

close.addEventListener('click', () => {
	modal.classList.remove('show');
});

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

var messages = document.getElementById("messages");
var textbox2 = document.getElementById("textbox2");
var button = document.getElementById("button");

var messages = document.getElementById("messages");
var textbox3 = document.getElementById("textbox3");
var button = document.getElementById("button");

button.addEventListener("click", function(){ 
  if (textbox.value == "" && textbox2.value == "" && textbox4.value == "" && textbox3.value == "") {
    alert("Please enter in title, name, phone number, and desciption.");
    return;
  } else if(textbox2.value == "" && textbox4.value == "" && textbox3.value == ""){
    alert("Plese enter in phone number, description, and title.");
    return;
  } else if(textbox4.value == "" && textbox3.value == ""){
    alert("Please enter description and title.");
    return;
  } else if(textbox2.value == ""){
    alert("Please enter phone number.");
    return;
  } else if(textbox.value == ""){
    alert("Please enter name.");
    return;
  } else if(textbox3.value == ""){
    alert("Please enter description.");
    return;
  } else if(textbox4.value == ""){
    alert("Please enter title.");
    return;
  }
  
  var header = document.createElement("h1");
  header.innerHTML = textbox4.value;
  messages.appendChild(header);
  textbox4.value = "";
  
  var newmesseges = document.createElement("li");
  newmesseges.innerHTML = "Name: " + textbox.value;
  messages.appendChild(newmesseges);
  textbox.value = ""
  
  var newmesseges2 = document.createElement("li");
  newmesseges2.innerHTML = "Phone Number: " + textbox2.value;
  messages.appendChild(newmesseges2); 
  textbox2.value = ""
  
  var newmesseges3 = document.createElement("li");
  newmesseges3.innerHTML = "Description: " + textbox3.value;
  messages.appendChild(newmesseges3); 
  textbox3.value = ""
  
  var button = document.createElement("button");
  button.innerHTML = "Delete " + header.innerHTML;
  delbutton.appendChild(button);
  
  button.addEventListener("click", function(){
  messages.removeChild(header);
  messages.removeChild(newmesseges);
  messages.removeChild(newmesseges2);
  messages.removeChild(newmesseges3);
  delbutton.removeChild(button);
  });
});