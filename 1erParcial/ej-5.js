"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
let btnClima = document.querySelector("#js-getclima");
let container = document.querySelector("divClima");
/*let objeto = [{
  "ciudad":"Tandil",
  "tempertaturas": 10,
  "unidad":"grados centigrados"
}]*/
// http://clima.com/api/Tandil te devuelve las mediciones de Tandil
btnClima.addEventListener("click", ()=>getInfo(container) )

  async function getInfo(container){
    let url = "http://clima.com/api/Tandil/";
    try{
      let response = await fetch(url);
      if (response.ok){
        let t = await response.text();
        let temperatura = 0;
        let cant = 0;
        for (let i of t ) {
			temperatura += t[i].temperaturas;
			cant++;
		}
        temperatura = temperatura / cant;
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
