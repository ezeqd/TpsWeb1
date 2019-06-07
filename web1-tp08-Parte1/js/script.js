"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
  let pLoad = document.querySelector(".partialLoad");
  let p2Load = document.querySelector(".otherPartialLoad");
  let contador = 0;
  let arreglo=[];
  let container = document.querySelector(".useAjax");
  let otherContainer = document.querySelector(".otroAjax");

  // acá se hace la petición desde un botón
  pLoad.addEventListener("click", ()=> getInfo(container) )
  // y acá desde otro botón
  p2Load.addEventListener("click", ()=> getInfo(otherContainer) )

  async function getInfo(container){
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
  }
});
