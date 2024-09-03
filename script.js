//SQUARES CREATOR
function createSquares(){

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
    }



let value;

//LOOP BY USER
function squaresNumber(){
    const button = document.querySelector('#button1')
    
    button.addEventListener("click" , () => {
     value = prompt("¿Number of squares? 4-100");
     if (!isNaN(value) && value > 4) {
         userDivLoop(value);
    
     } 
     else if(value > 100){
        alert("Choose a number between 4 and 100!");
    
     }
     else {
         alert("Please enter a valid number");
     }

    
    })

      };
    






//Default loop
function divLoop(){
    for (let i = 0; i < 255; i++){
        createSquares();
    }
}

//Loop by User choice
function userDivLoop(value){
    const container = document.querySelector("#container");
    container.innerHTML = '';
    for (let i = 0; i < value; i++){
        createSquares();
    }
}


//Loaded in time
 


//Default number of squares function
document.addEventListener('DOMContentLoaded', function() {
    creator();
});

function creator(){
    squaresNumber();
    createSquares();
    divLoop()
}

creator()


