function misPrimerasCondicionales(){
    let contraseña = prompt("Ingrese la contraseña");

    if(contraseña == "contraseña321"){
        window.location = "http://www.google.com";
    }
    else{
        alert("Contraseña incorrecta");
    }

}

function puedoJubilarme(){
    let jubilacionMujeres = 60;
    let jubilacionHombres = 65;

    let edadUsuario = parseInt(prompt("Ingrese su edad"));
    let genero = prompt("Sos hombre o mujer?").toLocaleLowerCase();

    if(genero == "mujer"){
        edadUsuario >= jubilacionMujeres
            ? alert("Te podes jubilar")
            : alert("no te puedes jubilar ");
    }
    if(genero == "hombre"){
        edadUsuario >= jubilacionHombres
            ? alert("Te podes jubilar")
            : alert("no te puedes jubilar ");
    }
}

function parOImpar(){
    let numero;

    while((numero = parseInt(prompt("Ingrese un numero"))) > 0){
        numero % 2 == 0
            ? alert("El numero es par")
            : alert("El numero es impar")
    }
}

function fizzBuzz(){

    for (let index = 1; index <= 100; index++) {
        if((index % 3) == 0){
            if((index % 5) == 0){
                console.log("FizzBuzz");
            }else{
                console.log("Fizz");
            }
        }else if((index % 5) == 0){
            console.log("Buzz");
        }else{
            console.log(index);
        }
            
    }
}