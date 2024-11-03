const chakra = document.querySelector(".chakra");

for(let i=0;i<12; i++){
    let line = document.createElement("span");
    line.className = "line";
    line.style.transform = `rotateZ(${15 * i}deg)`;

    chakra.appendChild(line);
}