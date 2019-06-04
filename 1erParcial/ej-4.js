"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
  let btnAdd = document.querySelector("#agregar");
  btnAdd.addEventListener("click", ()=>{
    // Tomo los valores de los input
    let commentList = document.querySelector("#comentarios");
    let userName = document.querySelector(".input-user").value;
    let userComment = document.querySelector(".input-comment").value;
    let userRate = document.querySelector(".rate").value;
    // Creo el elemento <li> y le agrego el texto
    let newComment = userName+": "+userComment+" "+"("+userRate+")";
    let newText = document.createTextNode(newComment);
    let newItem = document.createElement("li");
    newItem.appendChild(newText);
    // Agrego el nuevo nodo a la lista
    commentList.appendChild(newItem);
    // Agrego las clases para resaltar en rojo o verde, según calificación. 
    if (userRate==1) {
      newItem.classList.add("rottenTomato");
    }
    if (userRate==5){
      newItem.classList.add("freshTomato");
    }
  })
})
