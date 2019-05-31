"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
  let pLoad = document.querySelector(".partialLoad");
  let contador = 0;
  let arreglo=[];
  pLoad.addEventListener("click", async ()=>{
    let container = document.querySelector(".useAjax");
    let url = "http://web-unicen.herokuapp.com/api/html";
    try{
      let response = await fetch(url);
      if (response.ok){
        let t = await response.text(); 
        arreglo[contador] = t;
        container.innerHTML += arreglo[contador];
        contador++;
      }
      else {
        container.innerHTML = "<h1>Error - url fail!</h1>";
      }
    }
    catch(response){
      container.innerHTML = "<h1>Error - connection fail!</h1>";
    };
  })
  let algo = document.querySelector("")
});
