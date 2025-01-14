
let calculatorContanier = document.querySelector('.calculator-contanier')

let displayArea = document.getElementById('display-area')


calculatorContanier.addEventListener('click',(e)=>{
if(e.target.nodeName == "BUTTON"){
    switch(e.target.textContent){
        case "C":
        Clear();
        break;
        case "DEL":
        Delet();
        break;
        case "=":
        veltat();
        break;
        default:
            addTodisplayArea(e.target.textContent)
    }
}

})

function Clear(){
    displayArea.textContent = ' ';
}

function addTodisplayArea(value){
displayArea.textContent = displayArea.textContent+value
}

function Delet(){
displayArea.textContent = displayArea.textContent.slice(0,-1) 
}

function veltat(){
    try {
        displayArea.textContent = eval(displayArea.textContent);
    } catch (error) {
        displayArea.textContent = "Error!";
    }
}