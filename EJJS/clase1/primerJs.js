function mensajeConVariables(){
    let nombre = prompt("Ingrese su nombre: ");
    let edad = prompt("Ingrese su edad: ");
    let cumpleaños = prompt("Ingrese su cumpleaños: ");
    let ciudad = prompt("Ingrese su ciudad de recidencia: ");
    let ocupacion = prompt("Ingrese su ocupacion: ");
    let pasatiempos = prompt("Ingrese su pasatiempos: ");


    console.log("Usted se llama "+ nombre + " y tiene " + edad + " años. Su fecha de nacimiento es el " + cumpleaños + " y recide en " + ciudad + ". Trabaja de " + ocupacion + " su pasatiempos es " + pasatiempos + ".");
}

function cantDeCaracteres(){
    let texto = prompt("INGRESE UN TEXTO BREVE");

    console.log("el texto tiene " + texto.length + " caracteres");
}

function calculadoraDeEdad(){
    let edad = prompt("Cual es su edad?");

    console.log("Usted vivio " + edad * 365 + " dias");
}

function sumaDeValores(){
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let resultado = num1 + num2;

    console.log("El resultado de la suma de sus numeros es: " + resultado);
}

function abastecimientoDePorVidaUno(){
    let edad = parseInt(prompt("Ingrese su edad"));
    let edadMax = parseInt(prompt("Ingrese su edad maxima"));
    let snack = prompt("Ingrese su snack favorito");
    let snackXDia = parseInt(prompt("Ingrese cuantos de esos snack comerias por dia")); 
    let precio = parseInt(prompt("Ingrese el precio del snack"));

    let añosRestantes = edadMax - edad;
    let diasRestantes = añosRestantes * 365;
    let snacksTotales = diasRestantes * snackXDia;

    alert("Necesitaras " + snacksTotales + " " + snack + " para que te alcancen hasta los " + edadMax + " años. En total gastaras " + (snacksTotales * precio))

}

function abastecimientoDePorVidaDos(){
    let dias = parseInt(prompt("Ingrese los dias que estara de vacaciones"));
    let presupuesto = parseInt(prompt("Ingrese su presupuesto maximo"));
    let comidas = parseInt(prompt("Ingrese cuantas comidas tendra durante sus vacaciones"));

    let totalComidas = comidas * dias;
    let gastoXComida = presupuesto / totalComidas

    alert("Podes gastar " + gastoXComida + " como maximo en cada comida para que te alcance la plata durante los " + dias + " de viaje")

}