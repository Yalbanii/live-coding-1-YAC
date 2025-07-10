// Ejercicio 2

function imprimirLista(arrayMiLista){
 const lista = document.getElementById("miLista");

arrayMiLista.forEach(function(elemento){
 const elementoLista = document.createElement("li");
elementoLista.textContent = elemento;
 lista.appendChild(elementoLista);
 });
}
const myArray = ['insecto', 'bootcamp', 'escritorio', 'manzana'];
imprimirLista(myArray);
myArray.push("manzana");

// Ejercicio 1
function listaPalabras (parDos, parUno){
for (i = 0 ; i <= 5; i++){
 if (parDos[i].length > parUno.length){
   console.log(parDos[i]);
}
 }
}
const parDos = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const parUno = ("bocina");
console.log(listaPalabras(parDos, parUno));