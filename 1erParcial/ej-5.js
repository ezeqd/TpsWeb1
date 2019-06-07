"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
let btnClima = document.querySelector("#js-getclima");
let container = document.querySelector("divClima");
/*let objeto = [{
  "ciudad":"Tandil",
  "tempertaturas": 10,
  "unidad":"grados centigrados"
}]*/
// http://clima.com/api/:Tandil te devuelve las mediciones de Tandil
btnClima.addEventListener("click", ()=>getInfo(container) )

  async function getInfo(container){
    let url = "http://clima.com/api/estaciones/personales/";
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
})
