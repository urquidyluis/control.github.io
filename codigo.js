
let cantidadEquipos = document.querySelector(".number");

let equipos = document.querySelector(".cabecera-equipos");
let inicios = document.querySelector(".cabecera-inicios");
let contadores = document.querySelector(".cabecera-contadores");
let tiempos = document.querySelector(".cabecera-tiempos")

let fragmentoEquipos = document.createDocumentFragment();
let fragmentoInicios = document.createDocumentFragment();
let fragmentoContadores = document.createDocumentFragment();
let fragmentoTiempos = document.createDocumentFragment();

console.log(fragmentoEquipos);
console.log(fragmentoInicios);
console.log(fragmentoContadores);
console.log(fragmentoTiempos);

//window.document.addEventListener("change",CheckElements());
CheckDevices();
var cli = 0;
var dateInicio=[];
active=[];
reloj=[];
crono=[];
estimado=[];

var hors=[];
var mins=[];
var segs=[];
var segus=0;
var minus=0;
var horas=0;

function CheckElements(){
    let revicion = document.querySelectorAll(".nuevos");
    if (revicion !== null){
        //fragmentoEquipos = document.createDocumentFragment();
        // for (item in fragmentoEquipos){
        //     item = null;
        // }
    }
}
function CheckDevices() {
    // if (fragmentoEquipos !== )
    if (cantidadEquipos.value >= 1){
        let itemDivEquipos = document.createElement("DIV");
        itemDivEquipos.setAttribute("class", "tabla nuevos div__equipos");
        let itemDivInicios = document.createElement("DIV");
        itemDivInicios.setAttribute("class", "tabla nuevos div__inicios");
        let itemDivContadores =document.createElement("DIV");
        itemDivContadores.setAttribute("class", "tabla nuevos div__contadores");
        let itemDivTiempos = document.createElement("DIV");
        itemDivTiempos.setAttribute("class", "tabla nuevos div__tiempos");
        for (i = 0; i < cantidadEquipos.value; i++){
            //Equipos
            let boton = document.createElement("BUTTON");
            // boton.setAttribute("type","button");
            boton.innerHTML = "Equipo "+(i+1);
            boton.setAttribute("class",`nuevos button button__Equipo: ${i+1}`);
            boton.setAttribute("onclick","clickEquipo(this.id)");
            boton.setAttribute("id",i+1);
            // boton.style.fontSize=20;
            // boton.style.scale=20;
            // item.style.backgroundColor="green";
            itemDivEquipos.appendChild(boton);
            fragmentoEquipos.appendChild(itemDivEquipos);
            //fragmentoEquipos.appendChild(boton);
            // item.removeChild(item.lastElementChild);
            // item.removeAttribute("class");

            //Inicios
            let item = document.createElement("DIV");
            let label = document.createElement("LABEL");
            label.setAttribute("class","nuevos label__inicio"+(i+1));
            item.appendChild(label);
            itemDivInicios.appendChild(item);
            fragmentoInicios.appendChild(itemDivInicios);
            //Contadores
            let item2 = document.createElement("DIV");
            let label2 = document.createElement("LABEL");
            label2.setAttribute("class", "nuevos label__contador"+(i+1));
            label2.setAttribute("id", "reloj"+(i+1));
            //label2.innerHTML = "DATOS 2";
            item2.appendChild(label2);
            itemDivContadores.appendChild(item2);
            fragmentoContadores.appendChild(itemDivContadores);
            // item.removeChild(item.lastElementChild);
            // item.removeAttribute("class");


            //Tiempos
            let item3 = document.createElement("DIV");
            let label3 = document.createElement("LABEL");
            //label3.removeAttribute("class");
            label3.setAttribute("class", "nuevos label__tiempo"+(i+1));
            label3.setAttribute("type", "number");
            //label3.innerHTML = "DATOS 3";
            item3.appendChild(label3);
            itemDivTiempos.appendChild(item3);
            fragmentoTiempos.appendChild(itemDivTiempos);

            console.log(fragmentoEquipos);
            console.log(fragmentoInicios);
            console.log(fragmentoContadores);
            console.log(fragmentoTiempos);
        }
    equipos.appendChild(fragmentoEquipos);
    inicios.appendChild(fragmentoInicios);
    contadores.appendChild(fragmentoContadores);
    tiempos.appendChild(fragmentoTiempos);

    
    }
}
// cantidadEquipos.addEventListener("change",CheckElements());

// const buttons = document.querySelector(".button");

// buttons.addEventListener("click",(e)=>{
//     console.log(e.target);
// });

// function clickEquipo(e){
//     console.log(e.traget);
// }

function clickEquipo(c_id){
    //alert(c_id.outerHTML);
    cli=c_id;
    //active[c_id-1] = false;
    var elementoInicio = document.querySelector(".label__inicio"+c_id);
    var elementoContador = document.querySelector(".label__contador"+c_id);
    var elementoTiempo = document.querySelector(".label__tiempo"+c_id);
    if (active[c_id-1] == undefined){active[c_id-1] = false;}

    if (active[c_id-1] == false){
        active[c_id-1] = true;
        //Inicio
        let date = new Date;
        dateInicio[c_id-1] = date;
        // hors[c_id-1] = 0;
        // mins[c_id-1] = 0;
        // segs[c_id-1] = 0;
        elementoInicio.style.color = "#000000";
        //elementoInicio.style.font = "DS-Digi";
        elementoInicio.innerHTML = date.toLocaleTimeString().toString();
        elementoInicio.setAttribute("value",date);
        elementoInicio.style.backgroundColor= "rgb(70, 156, 109)";
        
        //Contador
        elementoContador.style.color = "#000000";
        //elementoContador.style.font = "DS-Digi";
        elementoContador.style.backgroundColor= "rgb(70, 156, 109)";
        muestraReloj();

        //Tiempo
        elementoTiempo.style.color = "#000000";
        //elementoTiempo.style.font = "DS-Digi";
        elementoTiempo.contentEditable = true;
        elementoTiempo.style.backgroundColor= "rgb(70, 156, 109)";
        elementoTiempo.innerHTML = "";
    }else{
        
        let avanzar = confirm("¿Está seguro que desea detener el equipo "+c_id+"?\n");
        if (avanzar == true){
            active[c_id-1] = false;
            //Inicio
            elementoInicio.style.color = "#888888";
            elementoInicio.style.backgroundColor= "#666";
    
            //Contador
            elementoContador.style.color = "#888888";
            elementoContador.style.backgroundColor= "#666";

            //Tiempo            
            elementoTiempo.style.color = "#888888";
            elementoTiempo.contentEditable = false;
            elementoTiempo.style.backgroundColor= "#666";
        }
        
    }  
}
function muestraReloj() {
    //alert(c_id.id);
    for (i = 0; i < cantidadEquipos.valueAsNumber; i++){
        
        if (active[i] === true){

            // CRONO POR DIFERENCIA DE HORA INICIO Y ACTUAL //////////////
            var horaActual = new Date;
            var diferencia = (horaActual - dateInicio[i]);

            var segundos = Math.floor((diferencia / (1000))%60);
            var minutos = Math.floor((diferencia / (1000*60))%60);
            var horas = Math.floor((diferencia /(1000*60*60)));

            if (segundos < 10){segundos = '0'+segundos;}
            if (minutos < 10){minutos = '0'+minutos;}
            if (horas < 10){horas = '0'+horas;}

            crono[i] = horas+':'+minutos+':'+segundos;
            document.getElementById("reloj"+(i+1)).innerHTML = crono[i];

            //////////////////////////////////////////////////////////////
            
            // var dateActual = new Date;
            // var diferencia = Math.abs(dateActual- dateInicio[i]);

            // let segundos = Math.round(diferencia / (1000));
            // if (segundos < 10){segundos = `0`+segundos;}
            // if (segundos >= 60){}
            // let minutos = Math.round(diferencia / (1000 * 60));
            // if (minutos < 10){minutos = `0`+minutos;}
            // let horas = Math.round(diferencia / (1000 * 60 * 60));
            // if (horas < 10){horas = `0`+horas;}
            // crono[i] = horas+`:`+minutos+`:`+segundos;
            // document.getElementById("reloj"+(i+1)).innerHTML = crono[i];
            


            // CRONO /////////////////////////////////////////////////////
            // if (segs[i] == 60){segs[i] = 0; mins[i]++;}
            // if (mins[i] == 60){mins[i] = 0; hors[i]++;}

            // if(segs[i] < 10 ) { segs[i] = `0` + segs[i]; }
            // if(mins[i] < 10 ) { mins[i] = `0` + mins[i]; }
            // if(hors[i] < 10 ) { hors[i] = `0` + hors[i]; }

            // crono[i]=hors[i]+`:`+mins[i]+`:`+segs[i];
            // document.getElementById("reloj"+(i+1)).innerHTML = crono[i];
            // segs[i]++;
            // mins[i]++;
            // mins[i]--;
            // hors[i]++;
            // hors[i]--;
            //////////////////////////////////////////////////////////////



            // reloj[i]=hors[i]+`:`+mins[i]+`:`+segs[i];
            // console.log(segs);

            // if (segs > 59){mins++; segs=0;}
            // if (mins > 59){hors++; mins=0;}

            // if(hors < 10) { hors = '0' + hors; }
            // if(mins < 10) { mins = '0' + mins; }
            // if(segs < 10) { segs = '0' + segs; }
            // reloj[i] = hors+':'+mins+':'+segs;

        // //console.log("Elemento cli es: "+cli);

        // MUESTRA LA HORA ACTUAL
        // var fechaHora = new Date();
        // var horas = fechaHora.getHours();
        // var minutos = fechaHora.getMinutes();
        // var segundos = fechaHora.getSeconds();
        // //reloj[]

        // if(horas < 10) { horas = '0' + horas; }
        // if(minutos < 10) { minutos = '0' + minutos; }
        // if(segundos < 10) { segundos = '0' + segundos; }
        // reloj[i] = horas+':'+minutos+':'+segundos;
        // document.getElementById("reloj"+(i+1)).innerHTML = reloj[i];
        }else{

        }
    }
}
window.onload = function() {
    setInterval(muestraReloj, 1000);
}
// function actualizaHora(){
//     setInterval(muestraReloj,1000);
// }
