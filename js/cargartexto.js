let nombre="";
let num=0;
let años="";
let fb="";
let ig="";
let ld="";
let exp="";
let emp="";
fetch('https://random-data-api.com/api/users/random_user?size=1')
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
const mostrarData = (data) => {
    console.log(data);
    nombre=data[0].employment.title;
    num=getnumeroRandom(0,6);
    if (num==0){años="sin experiencia en trabajos. Aprendo muy rápido y me adapto fácilmente a cualquier tipo de proceso interno.<br></br>Tengo buena capacidad de trabajo en equipo y solución de problemas. Con la suma necesidad de poder formarme en algún empleo y conseguir experiencia. ";
    exp="Sin experiencia, queriendo sumarme en alguna empresa del entorno en el que me encuentro.";
    document.getElementById("e1").innerHTML=" ";
    document.getElementById("e2").innerHTML=" ";
    document.getElementById("e3").innerHTML=" ";
    document.getElementById("e4").innerHTML=" ";
    }

    if (num==1){años="con 1 año de experiencia en trabajos simples que no requieran tanto cálculo. Con habilidades intermedias de comunicación, estrategia y liderazgo.<br></br>Tengo buena capacidad de trabajo en equipo y solución de problemas. Coordinación de equipos internos en la empresa con hasta 20 integrantes. Cumplimiento de objetivos técnicos, empresariales y administrativos, participé en algunos proyectos para empresas del sector privado.";
    emp=getempresasRandom();
    exp="Empresa: "+emp+" - 20"+getnumeroRandom(10,22);
    document.getElementById("e1").innerHTML="- Cierre de 25 operaciones cada semana.";
    document.getElementById("e2").innerHTML="- Formación de más de 25 vendedores de seguros.";
    document.getElementById("e3").innerHTML="- Elaboración mensual de informes sobre estado de intereses.";
    document.getElementById("e4").innerHTML="- Gestión de la base de datos con más de 50 clientes.";
    }

    if (num>1){años="con "+num+" años de experiencia en industrias de tecnología. Me especializo en brindar apoyo y asesoría técnica a empresas con más de 500 empleados y en mantener un índice de satisfacción del usuario de 9,5. Busco brindar la misma calidad de atención y optimizar el rendimiento de los sistemas informáticos <br></br>He enfrentado crisis económicas fuertes en las empresas para las que he trabajado, desarrollando alta tolerancia al trabajo bajo presión, capacidad de trabajo en equipo y solución de problemas. Coordinación de equipos internacionales con hasta 78 integrantes. Cumplimiento de objetivos financieros, empresariales y técnicos, en más de 300 proyectos para empresas del sector privado.";
    emp=getempresasRandom();

    exp="Empresa: "+emp+" - 20"+getnumeroRandom(10,20);
    document.getElementById("e1").innerHTML="- Capacitación de más de 1200 clientes en un tiempo inferior a un año.";
    document.getElementById("e2").innerHTML="- Empleado del mes en varias ocasiones.";
    document.getElementById("e3").innerHTML="- Servicio de postventa.";
    document.getElementById("e4").innerHTML="- Gestión de facturas y caja superiores a 1000 dolares diarios";}
    document.getElementById("exp").innerHTML=exp;
    document.getElementById("soy").innerHTML="Soy "+nombre+" "+años+" ";
    document.getElementById("h6").innerHTML=data[0].employment.key_skill;
}

uni=getuniversidadRandom();
document.getElementById("univ").innerHTML=uni;

function getnumeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function getempresasRandom(){
    let x = getnumeroRandom(1,7);
    let y;
    switch(x){
        case 1:y="MERCADO LIBRE";break;
        case 2:y="UALA";break;
        case 3:y="GLOBANT";break;
        case 4:y="ACCENTURE";break;
        case 5:y="MICROSOFT";break;
        case 6:y="APLE";break;
        case 7:y="META";break;
    }
    return y;
}

function getuniversidadRandom(){
    let x = getnumeroRandom(1,10);
    let y;
    switch(x){
        case 1:y="Universidad de Buenos Aires (UBA) - CBC";break;
        case 2:y="Instituto Universitario de Cs. de la Salud Fundación Barceló (FB)";break;
        case 3:y="Universidad Nacional de Córdoba (UNC)";break;
        case 4:y="Universidad Tecnológica Nacional (UTN)";break;
        case 5:y="Harvard University";break;
        case 6:y="Stanford University";break;
        case 7:y="Massachusetts Institute of Technology";break;
        case 8:y="University of California Berkeley";break;
        case 9:y="Universidad de Oxford";break;
        case 10:y="Cambridge University";break;
    }
    return y;
}