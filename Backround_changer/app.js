const button = document.getElementById("button");
const body = document.querySelector("body");
const colors =["#80ffff", "#ff8c1a", "#bf00ff", "#53c653", "#ff0000" ];
button.addEventListener("click", changeBackround);
function changeBackround(){
    const random = Math.floor(Math.random() * colors.length);
    const randomColor = colors[random];
    console.log("Ilgar Guluzade project");
    body.style.backgroundColor = randomColor;
};
