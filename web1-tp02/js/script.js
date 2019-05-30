"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
    let newToDo = document.querySelector(".btnAgregar");
    let titleName = document.querySelector(".btnChangeTitle");
    let changeColour = document.querySelector(".btnChangeColour");
    let hiddenDiv = document.querySelector(".btnHiddenDiv");
    newToDo.addEventListener("click", ()=>{
      let tarea = document.querySelector(".inputTarea").value;
      let ul = document.querySelector(".toDoList")
      let li = document.createElement("li");
      li.innerHTML = tarea;
      ul.appendChild(li);
    });
    titleName.addEventListener("click", ()=>{
      let nombre = document.querySelector(".inputNombre").value;
      let apellido = document.querySelector(".inputApellido").value;
      let titulo = document.querySelector("title");
      titulo.innerHTML = nombre+" "+apellido;
    })
    changeColour.addEventListener("click", ()=>{
      let backColour = document.querySelector(".cleanDiv").classList.toggle("darkDiv");
    })
    hiddenDiv.addEventListener("click", ()=>{
      let divToHide = document.querySelector(".sevenDiv");
      if (divToHide.classList.contains(".unhiddenDiv")){
        divToHide.classList.remove("unhiddenDiv");
        divToHide.classList.add("hiddenDiv");
      }
      else{
        divToHide.classList.remove("hiddenDiv");
        divToHide.classList.add("unhiddenDiv");
      }
    })
});
