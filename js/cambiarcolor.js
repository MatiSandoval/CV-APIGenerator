let y;
document.getElementById('boton-color').addEventListener('click', function(){
    cambiarFondo("sobre");
}
);

document.getElementById('boton-colorletra').addEventListener('click', function(){
    cambiarColor("sobre","soy");
});
document.getElementById('boton-color2').addEventListener('click', function(){
    cambiarFondo("gener");
}
);
document.getElementById('boton-colorletra2').addEventListener('click', function(){
    cambiarColor("gener","nombrec");
});
function cambiarColor(x,z){
    y=getnumeroRandom(1,5);
    switch(y){
        case 1: {document.getElementById(x).style.color = "#FAFBFF";
        document.getElementById(z).style.color = "#FAFBFF";break;}

        case 2: {document.getElementById(""+x).style.color = "#96A7FD";
        document.getElementById(""+z).style.color = "#96A7FD";break;}

        case 3: {document.getElementById(""+x).style.color = "black";
        document.getElementById(""+z).style.color = "black";break;}

        case 4: {document.getElementById(""+x).style.color = "#FFA8";
        document.getElementById(""+z).style.color = "#FFA8";break;}

        case 5: {document.getElementById(""+x).style.color = "#DADADA";
        document.getElementById(""+z).style.color = "#DADADA";break;}
    }
}
function cambiarFondo(x){
    y=getnumeroRandom(1,10);
    switch(y){
        case 1: document.getElementById(""+x).style.backgroundColor = "blue";break;
        case 2: document.getElementById(""+x).style.backgroundColor = "red";break;
        case 3: document.getElementById(""+x).style.backgroundColor = "black";break;
        case 4: document.getElementById(""+x).style.backgroundColor = "#FCE9E5";break;
        case 5: document.getElementById(""+x).style.backgroundColor = "#C1B1AE";break;
        case 5: document.getElementById(""+x).style.backgroundColor = "green";break;
        case 6: document.getElementById(""+x).style.backgroundColor = "yellow";break;
        case 7: document.getElementById(""+x).style.backgroundColor = "#89EDF7";break;
        case 8: document.getElementById(""+x).style.backgroundColor = "#3F2642";break;
        case 9: document.getElementById(""+x).style.backgroundColor = "#F4FFF8";break;
        case 10: document.getElementById(""+x).style.backgroundColor = "white";break;
    }
}
