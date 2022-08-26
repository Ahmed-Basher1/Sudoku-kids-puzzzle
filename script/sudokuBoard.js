  /** 
    -------- sudoku game 
    * ! I Used number insted of using images because i use input [text] in 9*9
     * ! and took the value of input and using it in sudoku algorithm
     * ? should using td = id instead of using input 
     * * secound phase i ll do it and reassign code  for 9*9
     
  */
//declaring variables
// declare the div who contain the table
let  board4= document.querySelector("#box4");
// declare the div who contain the table 9*9
let board9=document.querySelector("#box9");
// declare var who contain all button in groups
let allOfButtonsGroup= document.querySelectorAll("button");
// declare var who contain images in footer page
let Divgroup=document.querySelector(".playcards4");
// declare the timer header
let time =  document.querySelector("#timer");
// delcare var who write name of user
let nameLoc = document.querySelector("#name");
// save it in local storage
  nameLoc.innerText = `welcome : ${localStorage.name} `
    let check = "true";
    let checkingInComplete = false;
    let seconds = 0;
    let minutes = 0;
    let yesButton = document.querySelector("#yesBtn");
    let noButton = document.querySelector("#noBtn");
    let images = ["images/happy.png", "images/sad.png"];
    let array = [2, 4, 1, 3];  
    let array9 = [2, 4, 1, 3,5,9,8,6,7]; 
    h1 = document.getElementById("time");
    div = document.getElementById("timer");
    currentCell = 0;
    currentRow = 0;

    // end of variable
    // --------------

    // *start of darwing table 4*4
function drawTable(){
    let table = document.createElement("table")
      board4.append(table);
    for (let row = 0; row <4; row++) {
        let row = document.createElement("tr");
             table.append(row);
         for (let columon = 0; columon < 4; columon++) {
           
             let tdate = document.createElement("td")
                
             let inputData = document.createElement("input");
             inputData.type = "text";
             inputData.classList.add("TableDesign")
             inputData.classList.add("hide")
             tdate.append(inputData)
             row.append(tdate)
             
         }
     }
     
}
 // *end of darwing table 4*4


//* start of random function 4*4
function randomNumber(inputArray,item) {
    let i = 0;
    arrayInput = [];
    while (i < 4) {
      let random = Math.ceil(Math.random() * 10);
      if (arrayInput.indexOf(random) == -1 && random < 16) {
        arrayInput.push(random);
        i++;
      }
    }
    for (i = 0; i < array.length; i++) {
      let img =  document.createElement("img");
     
      if(array[i] == "1"){
        img.style.width="100px";
        img.style.height="99.5px";
        img.src = item.parentElement.children[0].src;
       
        console.log(item.parentElement.children[1])
        // console.log(Divgroup.children[0].children[0])
      }
      
      else if(array[i] == "2"){
        
        img.style.width="100px";
        img.style.height="99.5px";
        img.src = item.parentElement.children[1].src;
      }
      else if(array[i] == "3"){
        img.style.width="100px";
        img.style.height="99.5px";
        img.src = item.parentElement.children[2].src;
      }
      else if(array[i] == "4"){
        img.style.width="100px";
        img.style.height="99.5px";
        img.src = item.parentElement.children[3].src;
      }
      else{
          return;
      }
      

      inputArray[arrayInput[i]].value = array[i];
      inputArray[arrayInput[i]].classList.add("hide")
      allTd[arrayInput[i]].append(img);
      inputArray[arrayInput[i]].setAttribute("readonly", "true");
      inputArray[arrayInput[i]].style.backgroundColor="lightGrey";
      
    }
  }

  //* end of random function 4*4

  // * start of movecell func 4*4 using td
  function moveCell(allTd,item){
    let start = allTd[0];
    start.focus();
    start.style.backgroundColor = '#50b988';
    start.style.color = 'white';

const changeStyle = (sibling) => {
if (sibling !== null) {
start.focus();
start.style.backgroundColor = '';
start.style.color = '';
sibling.focus();
sibling.style.backgroundColor = '#50b988';
sibling.style.color = 'white';
start = sibling;
}
}

const checkKey = (event) => {
event = event || window.event;
const idx = start.cellIndex;

if (event.keyCode === 38) {
// up arrow
const previousRow = start.parentElement.previousElementSibling;
if (previousRow !== null) {
const previousSibling = previousRow.cells[idx];
changeStyle(previousSibling);
}
} else if (event.keyCode === 40) {
// down arrow
const nextRow = start.parentElement.nextElementSibling;
if (nextRow !== null) {
const nextSibling = nextRow.cells[idx];
changeStyle(nextSibling);
}
} else if (event.keyCode === 37) {
// left arrow
const previousSibling = start.previousElementSibling;
changeStyle(previousSibling);
} else if (event.keyCode === 39) {
// right arrow
const nextsibling = start.nextElementSibling;
changeStyle(nextsibling);
}
else if (event.keyCode === 49 || event.keyCode === 97){
      
      if (start.children[0].getAttribute("readonly") !=="true"  &&start.children[1] == undefined ) {
        let img = document.createElement("img")
        img.src = item.parentElement.children[0].src;
        img.style.width="100px";
        img.style.height="99.5px";
        start.append(img);
        start.children[0].value = "1";
      }
      else{
        return
      }
  

}
else if (event.keyCode === 50 || event.keyCode === 98){
 
  if (start.children[0].getAttribute("readonly") !=="true"  &&start.children[1] == undefined ) {
    let img = document.createElement("img")
    img.src = item.parentElement.children[1].src;
    img.style.width="100px";
    img.style.height="99.5px";
    start.append(img);
    start.children[0].value = "2";
  }
  else{
    return
  }

}
else if (event.keyCode === 51 || event.keyCode === 99){
 
  if (start.children[0].getAttribute("readonly") !=="true"  &&start.children[1] == undefined ) {
    let img = document.createElement("img")
    img.src = item.parentElement.children[2].src;
    img.style.width="100px";
    img.style.height="99.5px";
    start.append(img);
    start.children[0].value = "3";
  }
  else{
    return
  }

}
else if (event.keyCode === 52 || event.keyCode === 100){
 
  if (start.children[0].getAttribute("readonly") !=="true" &&start.children[1] == undefined ) {
    
    let img = document.createElement("img")
    img.src = item.parentElement.children[3].src;
    img.style.width="100px";
    img.style.height="99.5px";
    start.append(img);
    start.children[0].value = "4";
  }
  else{
    return
  }
  }
else if (event.keyCode === 8  ){
  if (start.children[0].getAttribute("readonly") !=="true"){
    start.children[1].remove();
     start.children[0].value = "";
  }
  else{
    return
  }

}

}

document.onkeydown = checkKey;

  }
    // * end of movecell func 4*4 using td



   // * drawing table 9*9
   function drawTable9(){
    let table = document.createElement("table")
    board9.append(table);
       for (let row = 0; row <9; row++) {
           let row = document.createElement("tr");
                table.append(row);
            for (let columon = 0; columon < 9; columon++) {
              
                let tdate = document.createElement("td")
                   
                let inputData = document.createElement("input");
                inputData.type = "text";
               
                inputData.classList.add("TableDesign")
                tdate.append(inputData)
                row.append(tdate)
            }
  }
}
// * end of drawing table 9*9
   
  // * start of checkingnumber 9*9

  //* starting of get random 9*9
function randomNumber9() {

  let i = 0;
  arrayInput = [];
  while (i < 9) {
    let random = Math.ceil(Math.random() * 80);
    if (arrayInput.indexOf(random) == -1 && random < 84) {
      arrayInput.push(random);
      i++;
    }
  }
  for (i = 0; i < array9.length; i++) {
    inputArray[arrayInput[i]].value = array9[i];
    inputArray[arrayInput[i]].setAttribute("readonly", "true");
    inputArray[arrayInput[i]].style.backgroundColor="lightGrey";
  }
 
}
//* end of get random 9*9
  function checknumber9(inputArray){
    for (i = 0; i < inputArray.length; i++) {
      inputArray[i].addEventListener("keypress", function(evt) {
        var charCode = evt.keyCode || evt.which || evt.charCode;;
        
        if ( evt.key > 9 || evt.key < 1) {
          console.log(evt);
          evt.preventDefault();
        }
        else if(charCode == 8){
          alert('backspace');
        
        }
        else{
          return true;
        }
      });
    }
  
    for (let j = 0; j < inputArray.length; j++) {
      inputArray[j].addEventListener("keypress", function(evt) {
        if (this.value.length > 0) {
          console.log(evt);
          evt.preventDefault();
        }
      });
    }
  }
  // * end of checkingnumber 9*9

  

  //* start of ChangeCurrentCell func which focus on first input
    function ChangeCurrentCell() {
    tableRow = document.getElementsByTagName("tr")[currentRow];
    tableCell = tableRow.getElementsByTagName("input")[currentCell];
    tableCell.focus();
  }
  //* end of ChangeCurrentCell func

  
  // !start of movecell func 9*9 using input
    function moveCell9(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
      inputArray[i].addEventListener("keydown", function(e) {
        if (e.keyCode == 37) {
          if (currentCell == 0) {
            return false;
          } else {
            currentCell--;
            ChangeCurrentCell();
            // alert( "left pressed " );
            return false;
          }
        }
        if (e.keyCode == 38) {
          if (currentRow == 0) {
            return false;
          } else {
            currentRow--;
            ChangeCurrentCell();
            // alert( "up pressed " );
            return false;
          }
        }
        if (e.keyCode == 39) {
          if (currentCell == 8) {
            return false;
          } else {
            currentCell++;
            ChangeCurrentCell();
            //  alert( "right pressed " );
            return false;
          }
        }
        if (e.keyCode == 40) {
          if (currentRow == 8) {
            return false;
          } else {
            currentRow++;
            ChangeCurrentCell();
            //  alert( "down pressed " );
            return false;
          }
        }
      });
    }
  }
  // ! end of movecell function
  

  // adding the element to array

// * calling th functions for level 1 
function playGame(item){
    drawTable()
    inputArray = document.querySelector("table").querySelectorAll("input");
    allTd = document.querySelector("table").querySelectorAll("td");  
    randomNumber(inputArray,item) 
      moveCell(allTd,item);
      // *  start of test func if storing the element is unique  and check the table 
      function test(matrix) {
        for (let i = 0; i < matrix.length; i++) {
         let unique = [];
         for (let j = 0; j < matrix.length; j++) {
           if (unique.indexOf(matrix[i][j]) == -1 && matrix[i][j] != "") {
             unique.push(matrix[i][j]);
           } else {
             check = "false";
             break ;
           }
         }
       }
    
        for (let i = 0; i < matrix.length; i++) {
         let unique = [];
         for (let j = 0; j < matrix.length; j++) {
           if (unique.indexOf(matrix[j][i]) == -1 && matrix[i][j] != "") {
             unique.push(matrix[j][i]);
           } else {
             check = "false";
             break ;
           }
         }
       }
    
       return check;
     }
       // *  end of test func
     //* storing all elemnt values from input and and devide the table 4 array
     function solvedMatrix() {
       let matrix,
         holder = [],
         i,
         j,
         k;
       for (i = 0; i < 16; i++) {
         //get the form values
         holder[i] = inputArray[i].value;
         matrix = [];
         k = -1;
         // from 1 dimensional to matrix
         for (j = 0; j < holder.length; j++) {
           if (j % 4 === 0) {
             k++;
             matrix[k] = [];
           }
           matrix[k].push(holder[j]);
         }
       }
       return matrix;
     }
     //* end of solvedMatrix

     //* check if the table is complete or not
     function checkComplete(matrix) {
        first: for (i = 0; i < matrix.length; i++) {
          for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] != "") {
              checkingInComplete = true;
            } else {
              checkingInComplete = false;
              break first;
            }
          }
        }
        return checkingInComplete;
      }
    

      //* check the time and clear interval if the flag is true
      let checktimeing = setInterval(function() {
        let matrix = solvedMatrix();
        flag = checkComplete(matrix);
        if (flag) {
          console.log(matrix);
          let check = test(matrix);
          clearInterval(checktimeing);
          clearTimeout(timeing);
          if (check == "true") {
            showMessage(check);
          } else {
            showMessage(check);
          }
        }
        add();
        if (minutes == 1 && seconds == 30) {
          clearInterval(checktimeing);
        }
        if (minutes == 1 && seconds == 25) {
          h1.style.color = "red";
          div.style.border = "thick solid red";
        }
      }, 1000);
      let timeing = setTimeout(function() {
        matrix = solvedMatrix();
        test(matrix);
        console.log(matrix);
    
        if (check == "true") {
          showMessage(check);
        } else {
          showMessage(check);
        }
      }, 90000);
      function add() {
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
        }
    
        h1.innerText =
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds);
      }
      //* show the form message if table is complete or the time is ended
      function showMessage(check) {
        let div = document.getElementById("message");
        let msg = document.getElementById("msg");
        let img = document.getElementsByTagName("img")[0];
        div.style.display = "block";
        if (check == "true") {
          msg.innerText = "Congeratulation, you win";
          img.src = images[0];
        } else {
          msg.innerText = "Sorry, you lost";
          img.src = images[1];
        }
      }
      yesButton.addEventListener("click", function() {
        location.reload();
      });
    
      noButton.addEventListener("click", function() {
        window.close();
      });
}


function playGame9(){


  drawTable9();
  inputArray = document.querySelector("table").querySelectorAll("input");
  allTd = document.querySelector("table").querySelectorAll("td"); 
  inputArray[0].focus();
  randomNumber9();
  checknumber9(inputArray)
  moveCell9(inputArray);
  function test(matrix) {
    for (let i = 0; i < matrix.length; i++) {
     let unique = [];
     for (let j = 0; j < matrix.length; j++) {
       if (unique.indexOf(matrix[i][j]) == -1 && matrix[i][j] != "") {
         unique.push(matrix[i][j]);
       } else {
         check = "false";
         break ;
       }
     }
   }

    for (let i = 0; i < matrix.length; i++) {
     let unique = [];
     for (let j = 0; j < matrix.length; j++) {
       if (unique.indexOf(matrix[j][i]) == -1 && matrix[i][j] != "") {
         unique.push(matrix[j][i]);
       } else {
         check = "false";
         break ;
       }
     }
   }

   return check;
 }

 function solvedMatrix() {
   let matrix,
     holder = [],
     i,
     j,
     k;
   for (i = 0; i < 16; i++) {
     //get the form values
     holder[i] = inputArray[i].value;
     matrix = [];
     k = -1;
     // from 1 dimensional to matrix
     for (j = 0; j < holder.length; j++) {
       if (j % 4 === 0) {
         k++;
         matrix[k] = [];
       }
       matrix[k].push(holder[j]);
     }
   }
   return matrix;
 }
 function checkComplete(matrix) {
    first: for (i = 0; i < matrix.length; i++) {
      for (j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] != "") {
          checkingInComplete = true;
        } else {
          checkingInComplete = false;
          break first;
        }
      }
    }
    return checkingInComplete;
  }
  let checktimeing = setInterval(function() {
    let matrix = solvedMatrix();
    flag = checkComplete(matrix);
    if (flag) {
      console.log(matrix);
      let check = test(matrix);
      clearInterval(checktimeing);
      clearTimeout(timeing);
      if (check == "true") {
        showMessage(check);
      } else {
        showMessage(check);
      }
    }
    add();
    if (minutes == 1 && seconds == 30) {
      clearInterval(checktimeing);
    }
    if (minutes == 1 && seconds == 25) {
      h1.style.color = "red";
      div.style.border = "thick solid red";
    }
  }, 1000);
  let timeing = setTimeout(function() {
    matrix = solvedMatrix();
    test(matrix);
    console.log(matrix);

    if (check == "true") {
      showMessage(check);
    } else {
      showMessage(check);
    }
  }, 90000);
  function add() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }

    h1.innerText =
      (minutes > 9 ? minutes : "0" + minutes) +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds);
  }
  function showMessage(check) {
    let div = document.getElementById("message");
    let msg = document.getElementById("msg");
    let img = document.getElementsByTagName("img")[0];
    div.style.display = "block";
    if (check == "true") {
      msg.innerText = "Congeratulation, you win";
      img.src = images[0];
    } else {
      msg.innerText = "Sorry, you lost";
      img.src = images[1];
    }
  }
  yesButton.addEventListener("click", function() {
    location.reload();
  });

  noButton.addEventListener("click", function() {
    window.close();
  });

}




window.addEventListener("load",function(){
  

  //* loop for  allOfButtonsGroup
for(let item of allOfButtonsGroup){

    item.addEventListener("click",function(event){
      if(localStorage.Levels !== "level1"){
        //* algorthim for table 9*9 and callig the functions
        playGame9()
        console.log(localStorage.Levels)
      }
      else{ 
        //* calling function of table 4*4   
        playGame(item);
        
        console.log(localStorage.Levels)

      }
        
       time.classList.remove("hide");
        nameLoc.classList.remove("hide")
        item.parentElement.parentElement.classList.add("hide");
        Divgroup.append(event.target.parentElement);
        event.target.classList.add("hide");
        event.target.parentElement.classList.remove("col-5");

    });
}
});