var counterElement=document.getElementById("counterElement");

function onIncrement(){
    var currentelemnet = counterElement.textContent;
    var nextelement = parseInt(currentelemnet) + 1;
    if (nextelement > 0){
        counterElement.style.color ="green"
    }
    else if (nextelement < 0) {
        counterElement.style.color ="red"
    } else {
        counterElement.style.color ="black"
    }
    counterElement.textContent = nextelement;
}
function onDecrement(){
    var currentElemnet = counterElement.textContent;
    var previousElement = parseInt(currentElemnet) - 1;
    if (previousElement > 0){
        counterElement.style.color ="green"
    }
    else if (previousElement < 0) {
        counterElement.style.color ="red"
    } else {
        counterElement.style.color ="black"
    }
    counterElement.textContent = previousElement;
}
function onReset(){
    var currentElemnet = counterElement.textContent;
    counterElement.textContent = 0
    counterElement.style.color ="black"
}
