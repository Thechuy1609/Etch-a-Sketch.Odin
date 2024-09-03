//SQUARES CREATOR
function createSquares(){
    document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector("#container");
    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
    document.addEventListener('mouseover', function(e) {
        if (e.target && e.target.className == 'content') {
              var target = e.target;
              target.classList.add('hover');
        }
      });
    })
}


//LOOP BY USER
function squaresNumber(){
    const button = document.querySelector('#button1')
    
    button.addEventListener("click" , () => {
     let value = prompt("¿Number of squares? 1-100");
     let numSquares = value
     if (!isNaN(numSquares) && numSquares > 0) {
         divLoop(numSquares);
     } 
     else if(value > 100){
        alert("Choose a number between 1 and 100!")
     }
     else {
         alert("Please enter a valid number");
     }
    })

    document.addEventListener('mouseover', function(e) {
        if (e.target && e.target.className == 'contentCreated') {
              var target = e.target;
              target.classList.add('hover2');
        }
      });
    



  }


//Default loop
function divLoop(){
    for (let i = 0; i < 256; i++){
        createSquares();
    }
}

//Loop by User choice
function userDivLoop(){
    for (let i = 0; i < value; i++){
        createSquares();
    }
}


//Loaded in time
  document.addEventListener('DOMContentLoaded', function() {
    squaresNumber();
});



//Default number of squares function
function creator(){
    divLoop();
    squaresNumber();
}



creator()
