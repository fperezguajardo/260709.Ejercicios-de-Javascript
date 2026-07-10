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

