for (let index = 1; index <= 2; index++) {
    //alert('por ' + index + 'vez no voy a cerrar el alert')
    //aquí se ejecuta cualquier iteración 
    console.log('iteración ' + index)

    //for mini programa ( palabra reservada)(administrador de prosesos) 
    //let = variable   ( let i be =  dejame ser )
}

const circuito = 10

for( let vueltas = 1; vueltas <= 10; vueltas += 1) {
    console.log('Estoy dando la vuelta número ' + vueltas);
}

//arreglo con 5 nombres y vamos a rrecorrer con bucle for

const miFavoriteName = ['Noel', 'Ricardo', 'Fernando', 'Armando', 'Zalatiel']

for (let MyNameIs = 0; MyNameIs <= 4; MyNameIs += 1) {
    console.log('hola ' + miFavoriteName[MyNameIs])
}

//voy a comprar 8 elementos 
const FrutasVerduras = [
    ['platano',12.50],
    'manzana',
    'guayaba',
    'naranja',
    'zanahoria',
    'jitomate',
    'cebolla',
    'tomate']

    for (let compras = 0; compras <= 7; compras+= 1) {
        console.log('hoy compre ' + FrutasVerduras[compras])
        
    }

    //crear funcion que va a recibir como parametro 1 arreglo , voy a comprar un() y cuesta ()
const marcasDeCelular = [
    ['Huawei',12999],
    ['Xiaomi',14999],
    ['Oppo',15999],
    ['Iphone',24999],
    ['Samsung',26999],
    ['Motorola',19999],
    ['Vivo',34999],
    ['Realmeau',9999],
]


const soyFifi = (celularesCaros) => {
    const noArbitrario = 10000
    if (noArbitrario < celularesCaros ) {
        console.log('soy fifi')
    }else if (noArbitrario > celularesCaros) {
        console.log('eso es para jodidos, traeme un iphone!!!')
    }
}
 
const puro20 = (gamaPremium = 0) => {
    const noLimite = 20000
    if (noLimite < gamaPremium ){
        console.log('solo por ser GamaPremium')
    }else if (noLimite > gamaPremium) {
        console.log('no gracias, no es GamaPremium!!!')


    }


}
 const formarOracion = (celulares) => {
    for (let modelo = 0; modelo < celulares.length ; modelo++) {
        console.log ('voy a comprar un ' + celulares[modelo][0] + 
        ' y cuesta ' + celulares[modelo][1])
        soyFifi(celulares[modelo][1])
        puro20(celulares[modelo][1])
}}



formarOracion(marcasDeCelular)


//(telefonos)tarea si es arriba de 10 mil lo quiero, si no es pa jodidos (if)!!!
// imprimir numeros pares del 1 al 100 regla codigo en no mas de 5 lineas
//investigar operador modulo
//escribir funcion que devuelva true o false, si un numero es par o no respectivamente
//*numero como parametro

