
var text_element=null;
var view=false;

function restore() {
  if("text" in localStorage) {
    text_element.value=localStorage.text;
    text_element.selectionStart=localStorage.text.length;
  }
  if("view" in localStorage && localStorage.view == "true")
    view=true;
  if(view) view_on();
}

function save() {
  localStorage.text=text_element.value;
  if(view) localStorage.view="true";
  else localStorage.view="false";
}

function view_on() {
  document.getElementsByTagName("html")[0].classList.add("view");
  document.getElementById("view").innerHTML=(markdown.toHTML(text_element.value));
  localStorage.view="true";
}

function view_off() {
  document.getElementsByTagName("html")[0].classList.remove("view");
  localStorage.view="false";
}

function toggle_view() {
  view=!view;
  if(view) {
    view_on();
  } else {
    view_off();
  }
}

window.onload = function() {
  text_element=document.getElementById("text");
  document.getElementById("view-toggle").onclick=toggle_view;
  restore();
  setTimeout(function() {
    document.getElementById("loading").classList.add("hidden");
    document.getElementsByTagName("html")[0].classList.add("loaded");
  },0);
  text_element.addEventListener("input",save,false);
}
