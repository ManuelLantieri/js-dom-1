// Dom element
const imgLampOffElm =document.getElementById("lampOff")
const imgLampOnElm = document.getElementById ("lampOn")
const buttonElm = document.getElementById("btn")

let isLampOn = false;
// dom events
buttonElm.addEventListener("click", function() {
// inverto il valore diisLampOn 
isLampOn = !isLampOn;

    if (isLampOn) {
        imgLampOnElm.classList.remove('d-none')
        imgLampOffElm.classList.add('d-none')
        buttonElm.innerHTML = "Spegni"
        // lampadina accesa
    } else {
        imgLampOnElm.classList.add('d-none')
        imgLampOffElm.classList.remove('d-none')
        buttonElm.innerHTML = "Accendi"
        // lampadina spenta
    }
});