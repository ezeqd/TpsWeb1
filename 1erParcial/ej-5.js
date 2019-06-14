"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
let btnClima = document.querySelector("#js-getclima");
let container = document.querySelector("#clima");
let url = "http://clima.com/api/Tandil/";
let data = {
  "ciudad":"Tandil",
  "temperaturas":"",
  "unidad":"grados centigrados"
}

btnClima.addEventListener("click", ()=>getInfo(container) )
container.addEventListener("submit", ()=>postInfo(data) )

  async function getInfo(container){
    try{
      let response = await fetch(url);
      if (response.ok){
        let temps = await response.json();
        let promedioTemp = 0;
        let cant = 0;
        for (let i of temps) {
          promedioTemp += temps[i].temperaturas;
          cant++;
		    }
        promedioTemp = promedioTemp / cant;
        // aca debería mandarle la temp en un div dentro del container
      }
      else {
        container.innerHTML = "<h1>Error - url fail!</h1>";
      }
    }
    catch(response){
      container.innerHTML = "<h1>Error - connection fail!</h1>";
    };
  }

  async function postInfo(){
    temperatura = document.querySelector("#temp").value;
    data.temperatura = temperatura;
    try{
      let response = await fetch(url, {
        method: 'POST',
        headers: {'Content Type': 'application/json'},
        body: JSON.stringify(data)
      }); // 'data' sería el json. Con esto pasamos el json a string.
      if (response.ok){
        let newText = document.createTextNode("Enviado!");
        let aviso = document.createElement("div");
        aviso.appendChild(newText);
        container.appendChild(aviso)
      }
    }
    catch(e){
      console.log(e);
    }
  }
})
