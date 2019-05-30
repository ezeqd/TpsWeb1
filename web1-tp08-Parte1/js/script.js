"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
  let pLoad = document.querySelector(".partialLoad");
  pLoad.addEventListener("click", ()=>{
    let container = document.querySelector(".useAjax");
    let spinner = "<div class='lds-spinner'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";
    container.innerHTML = spinner;
    let url = "http://web-unicen.herokuapp.com/api/html";
    fetch(url).then(
      function(response){
        if (response.ok){
          response.text().then(t => container.innerHTML = t);
        }
        else {
          container.innerHTML = "<h1>Error - url fail!</h1>";
        }
      })
      .catch(function(response){
        container.innerHTML = "<h1>Error - connection fail!</h1>";
      })
  })
});
