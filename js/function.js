/** 
document.getElementById('boton').onclick = function (){
    console.log("Capturamos evento click");
    document.getElementById("demo").innerHTML="Estamos probando evento JS";
}
*/
/** 
document.addEventListener('click', function(){
    console.log("Hola mundo desde eventListener");
    document.getElementById("demo").innerHTML="Estamos probando evento JS";
}
)
*/
document.getElementById('boton').addEventListener('click', function(){
    console.log("Hola mundo desde eventListener");
    document.getElementById("demo").innerHTML="Estamos probando evento JS";
}
);

document.getElementById('boton-color').addEventListener('click', function(){
    document.body.style.backgroundColor = '#FF2D00';
}
);

document.getElementById('boton-default').addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
}
);

document.getElementById('boton-ocultar').addEventListener('click', function(){
    document.getElementById('demo').style.display='none';
}
);

const collection = document.getElementsByClassName("prueba");
for (let i=0;i< collection.length;i++){
    collection[i].style.backgroundColor = "yellow";
}
