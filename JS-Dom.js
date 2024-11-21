let innehall = document.getElementById("innehall");

document.getElementById("bakgrund").addEventListener("click", function() {
    document.body.style.backgroundColor = "#f0f0f0"
})

let bild2 = document.getElementById("bild2")
bild2.style.display = "none"
let bild1 = document.getElementById("bild1")

document.getElementById("vaxlaBild").addEventListener("click", function() {
    if (bild2.style.display === "none") {
        bild1.style.display = "none";
        bild2.style.display = "block";
    } else if (bild1.style.display === "none") {
        bild1.style.display = "block";
        bild2.style.display = "none";
    }
});

document.getElementById("centrera").addEventListener("click", function() {
    innehall.style.backgroundColor = "#e8f4f8";
    innehall.style.display = "flex";
    innehall.style.flexDirection = "column";
    innehall.style.justifyContent = "center";
    innehall.style.alignItems = "center";
    innehall.style.padding = "20px";
    innehall.style.borderRadius = "10px";
});

function visaRubrik() {
    let rubrik = document.createElement("h1");
    rubrik.innerHTML = "Övningar för provet";
    rubrik.style.color = "#2c3e50";
    innehall.insertBefore(rubrik, innehall.firstChild);
}

document.getElementById("doljBild").addEventListener("click", function() {
    bild1.style.display = "none";
    bild2.style.display = "none";
});

document.getElementById("rensaAllt").addEventListener("click", function() {
    innehall.style.display = "none";
});

document.getElementById("visaTid").addEventListener("click", function() {
    let tid = document.getElementById("tidvisare");
    let datum = new Date();
    let text = datum.toLocaleString('sv-SE');
    tid.textContent = text;
    tid.style.fontSize = "18px";
    tid.style.color = "#2c3e50";
});

document.getElementById("visaBild").addEventListener("click", function() {
    if(bild2.style.display === "none" && bild1.style.display === "none" ){
        bild1.style.display = "block";
    };
});

document.getElementById("visaAllt").addEventListener("click", function() {
    innehall.style.display = "block";
});