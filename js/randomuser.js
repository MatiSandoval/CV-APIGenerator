/** APIS
 * https://random-data-api.com/api/users/random_user?size=3
 * https://randomuser.me/api/
 * Utilizo una para todos los datos de la persona y otra
 * para su experiencia laboral y una habilidad de trabajo
 */
let genero ="";
let imag="";
let direccion="";
let telefono="";
let nacionalidad="";
let mail="";
let edad;
var x;
var h1,h2,h3,h4,h5;
let uni="";

fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(datos => mostrarDatos(datos))
        .catch(error => console.log(error))
const mostrarDatos = (datos) => {
    document.getElementById("fb").innerHTML=datos.results[0].name.first+" "+datos.results[0].name.last;
    document.getElementById("ig").innerHTML="@"+datos.results[0].login.username;
    document.getElementById("ld").innerHTML="https://www.linkedin.com/in/"+datos.results[0].name.first+datos.results[0].name.last+"/";
    console.log(datos.results[0]);
    document.getElementById("nombrec").innerHTML=datos.results[0].name.last+" "+datos.results[0].name.first;
    direccion=datos.results[0].location.city+", "+datos.results[0].location.country;
    telefono=datos.results[0].phone;
    nacionalidad= datos.results[0].nat;
    mail=datos.results[0].email;
    edad=datos.results[0].dob.age;
    document.getElementById("direccion").innerHTML="Direccion: "+direccion;
    document.getElementById("telefono").innerHTML="Telefono: "+telefono;
    document.getElementById("nacionalidad").innerHTML="Nacionalidad: "+nacionalidad;
    document.getElementById("mail").innerHTML="Mail: "+mail;
    edad=getnumeroRandom(18,40);    //Decidi utilizar mi funcion de números aleatorios porque la API daba edades muy elevadas para las fotos que da
    document.getElementById("edad").innerHTML="Edad: "+edad+" años";
    x=getnumeroRandom(1,3);
    switch(x){
        case 1:{h1="Facilidad para trabajar en equipo";h2="Poder ser multitarea";h3="Diseño gráfico";h4="Trabajo proactivo";h5="Capacidad de negociar";break;}
        case 2:{h1="Conocimientos de contabilidad";h2="Facilidad para trabajar en equipoa";h3="Conocimientos de lenguajes de programación";h4="Pensamiento crítico/lógico";h5="Análisis e interpretación de datos";break;}
        case 3:{h1="Conocimientos de lenguajes de programación";h2="Asumir las críticas de forma constructiva";h3="Facilidad para trabajar en equipo";h4="Trabajo proactivo";h5="Manejo de máquinas y herramientas de trabajo";break;}
    }
        
    document.getElementById("h1").innerHTML=h1;
    document.getElementById("h2").innerHTML=h2;
    document.getElementById("h3").innerHTML=h3;
    document.getElementById("h4").innerHTML=h4;
    document.getElementById("h5").innerHTML=h5;
    
    imag="'"+datos.results[0].picture.large+"'";
    const conten = document.getElementById("imgContainer");
        conten.insertAdjacentHTML(
        "beforeend",`<img src=${imag} alt='No se pudo cargar la imagen.'>` // Agrego la imagen al contenedor de HTML
        );
}


        
        
        
