var pacientes = document.querySelectorAll(".paciente")


for (var i = 0; i < pacientes.length ; i++) {

var paciente = pacientes[i] 

var tdaltura = paciente.querySelector(".info-altura") ;
var tdpeso = paciente.querySelector(".info-peso") ;
var tdimc = paciente.querySelector(".info-imc") ;


var altura = tdaltura.textContent ;
var peso = tdpeso.textContent ;

var pesovalido = validaPeso(peso) ;
var alturavalida = validaAltura(altura);

if(!pesovalido){
    tdimc.textContent = "Peso inválido"
    pesovalido = false;
    paciente.classList.add("paciente-invalido")
}

if(!alturavalida) {
    tdimc.textContent = "Altura inválida"
    alturavalida = false;
    paciente.classList.add("paciente-invalido")

}


if(alturavalida && pesovalido) {
var imc = calculaImc(peso,altura) ;

tdimc.textContent = imc ;

}

}

function validaPeso(peso){
    if(peso >=0 && peso <=400){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <=3){
        return true;
    } else { return false ;
    }
}


function calculaImc (peso,altura){
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}