const edad = 25

if (edad >= 18) {
    console.log("Acceso concedido eres mayor de edad")
} else if (edad == 17) {
    console.log("Casi! Vuelve el próximo año!")
} else {
    console.log("Acceso denegado, eres menor de edad")
}

const estado = (edad >= 18)?"Mayor":"Menor"
    console.log(estado)



// for (let i = 0; i < 3; i++ ) {
//     console.log(i)
// }

/*
for (let i = 0; i < 10; i+=2 ) {
    console.log(i)
}
*/

const arreglo =  ["pino", "cedro", "roble", "cerezo", "pirul", "oyamel"]

for (let i=0; i <= 6; i++) {
    console.log(arreglo[i])
}
    console.log(arreglo.length)


const arbol = "Pino"
console.log(arbol.length)

let bateria = 100; 
while (bateria > 0) {
    console.log(`Sigue usando tu celular, la batería actual es ${bateria}`);
    bateria -= 25;
}

console.log("Se apagó el celular")

var intentos = 0;
do {
    console.log("Intentanto conectar al servidor");
    intentos ++;
} while(intentos < 0);
 
function saludarUsuario(nombre) {

    console.log(`Hola ${nombre}`);
}

saludarUsuario("Christopher");