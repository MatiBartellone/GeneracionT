function testEvaluator() {

    let num = parseInt(prompt("Ingresa la nota del alumno"));

    if (num >= 0 && num <= 2) 
    {
        alert("Muy mal");
    }
    else if (num > 2 && num <= 5) 
    {
        alert("Mal");
    }
    else if (num > 5 && num <= 6) 
    {
        alert("Tan cerca pero tan lejos");
    }
    else if (num > 6 && num <= 8)
    {
        alert("Bien!");
    }
    else if (num > 8 && num <= 10)
    {
        alert("Muy bien!!");
    }
    else alert("Nota no valida");
}


function biggestOne()
{
    num1 = parseInt(prompt("Ingresa el primer numero"));
    num2 = parseInt(prompt("Ingresa el segundo numero"));
    palabra = prompt("Ingresa la palabra");

    if (num1 == num2)
    {
        alert(palabra.split("")[0] + palabra.split("")[palabra.length - 1]);
    }else alert("El numero mayor es: " + Math.max(num1, num2));
}


function frootLoop()
{

    let frutasYVerduras = [{fruta:"banana"},{verdura:"apio"},{fruta:"manzana"},{fruta:"frutilla"},{verdura:"zanahoria"},{fruta:"kiwi"},{fruta:"sandia"},{fruta:"melon"},{verdura:"repollo"},{fruta:"mango"}];

    const frutas = [];

    for (let i = 0; i < frutasYVerduras.length; i++)
    {
        if (frutasYVerduras[i].fruta)
        {
            frutas.push(frutasYVerduras[i].fruta);
        }
    }
    obj = {frutas:frutas};

    alert(obj.frutas);
}

function dispenserGaseosas(){

    let unidades = [1, 2, 3, 4];
    let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];

    class Gaseosa {
        constructor(unidad, nombre) {
            this.unidad = unidad;
            this.nombre = nombre;
        }
    }

    for(let i = 0; i < unidades.length; i++){
        let gaseosa = new Gaseosa(unidades[i], gaseosas[i]);
        alert("hay " + gaseosa.unidad + " unidad de " + gaseosa.nombre);
    }
}

function anioDeNacimiento(){
    Test = [{nombre: "Juan", edad:19},{nombre:"Mario", edad: 22}]

    for (let i = 0; i < Test.length; i++)
    {
        alert("El año de nacimiento de " + Test[i].nombre + " es " + (2022 - Test[i].edad));
    }
}