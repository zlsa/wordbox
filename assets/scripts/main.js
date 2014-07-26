
var text_element=null;

function restore() {
  if("text" in localStorage) {
    text_element.value=localStorage.text;
    text_element.selectionStart=localStorage.text.length;
  }
}

function save() {
  localStorage.text=text_element.value;
}

window.onload = function() {
  text_element=document.getElementById("text");
  restore();
  setTimeout(function() {
    document.getElementById("loading").classList.add("hidden");
  },0);
  text_element.addEventListener("input",save,false);
}
