"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
  let pLoad = document.querySelector(".partialLoad");
  pLoad.addEventListener("click", async ()=>{
    let container = document.querySelector(".useAjax");
    let spinner = "<div class='lds-spinner'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";
    container.innerHTML = spinner;
    let url = "http://web-unicen.herokuapp.com/api/html";
    try{
      let response = await fetch(url);
      if (response.ok){
        let t = await response.text(); 
        container.innerHTML = t;
      }
      else {
        container.innerHTML = "<h1>Error - url fail!</h1>";
      }
    }
    catch(response){
      container.innerHTML = "<h1>Error - connection fail!</h1>";
    };
  })
});
