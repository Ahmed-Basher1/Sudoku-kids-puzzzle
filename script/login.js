let getname = document.querySelector("#Username").value;
let submit = document.querySelector("#submitUser");
let Levels = document.querySelector("#Levels").value
submit.onclick = function(){
  
    localStorage.setItem("name", document.querySelector("#Username").value);
    localStorage.setItem("Levels", document.querySelector("#Levels").value);
   
}
