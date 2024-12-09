document.getElementById('btn').onclick = function() {
    const lamp = document.getElementById("lamp");
    if (lamp.src.indexof("./white_lamp.png") >= 0) {
        lamp.src = "./yellow_lamp.png";
        this.innerText = "SPEGNI";
    } else {
        lamp.src = "./white_lamp.png";
        this.innerText = "ACCENDI"
    }

}