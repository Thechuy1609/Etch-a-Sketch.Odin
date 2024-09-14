
//SQUARES DEFAULT CREATOR
function createDefaultSquares(){
    const container = document.querySelector("#container");
    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
    document.addEventListener('mouseover', function(e) {
        if (e.target && e.target.className == 'content') {
              let target = e.target;
              target.classList.add('hover');
        }
      });
    }


//Default loop
function divLoop(){
    const size = 15.94
    for (let i = 0; i < size * size; i++){
        createDefaultSquares();
    }
}
 




let value;

//LOOP BY USER
function getSquaresNumber(){
    const button = document.querySelector('#button1')
    
    button.addEventListener("click" , () => {
        clearContainer();
     value = prompt("¿Number of squares? 4-100");
     if (!isNaN(value) && value >= 1 && value <= 100) {
    userGridSquare(value)

     } 
     else if(value > 100){
        alert("Choose a number between 1 and 100!");
    
     }
     else {
         alert("Please enter a valid number");
     }

})}


function getRandomColor(){
  
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color
    }
     


function rainbowColor(){
    const buttonR = document.querySelector('#button3')
    buttonR.addEventListener("click" , () => {
    document.addEventListener('mouseover', function(e) {
        if (e.target && e.target.classList.contains('userContent') || 
        e.target && e.target.classList.contains('content')  ) {
              let target = e.target;
              target.style.backgroundColor = `${getRandomColor()}`;
            }})
        }

    )}




//USER SQUARE GRID

function userGridSquare(value) {
    clearContainer();
        for (let i = 0; i < value * value; i++){
    const container = document.querySelector("#container");
    const userContent = document.createElement("div");
    container.appendChild(userContent);
    userContent.setAttribute("class", "userContent");
    userContent.style.flexBasis = `calc(100% / ${value})`;
    document.addEventListener('mouseover', function(e) {
        if (e.target && e.target.className == 'userContent') {
              var target = e.target;
              target.classList.add('hover');
        }
      });
    
}
}


function clearContainer() {
        const container = document.querySelector('#container');
        container.innerHTML  = '';
    }




function creator(){
    createDefaultSquares();
    divLoop();
    getSquaresNumber();
    rainbowColor();
}

// DEFAULT GRID SQUARE
document.addEventListener('DOMContentLoaded', function() {
    creator();
});
