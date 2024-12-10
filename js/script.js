// Dom element
const imgLampElm =document.getElementById("lamp")
const buttonElm = document.getElementById("btn")

// dom events
buttonElm.addEventListener("click", function() {
    imgLampElm.src = 'img/yellow_lamp.png'
    imgLampElm.alt = 'accesa'
});