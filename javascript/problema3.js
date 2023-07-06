var lista1=[] 
var lista2=[] 

function ordenar(){
    var datos_ordenados=document.getElementById("datos_ordenados")
    datos_ordenados.innerHTML=""
    var fusionListas=lista1.concat(lista2)
    fusionListas.sort(function(a, b){return a - b})
    fusionListas.forEach(element => {
        datos_ordenados.append(" "+element)
    });
}
function agregarLista1(){
    var datolista1=document.getElementById("lista1").value
    var datos1=document.getElementById("datos1")
    lista1.push(datolista1)
    datos1.append(" "+datolista1)
    ordenar()
}
function agregarLista2(){
    var datolista2=document.getElementById("lista2").value
    var datos2=document.getElementById("datos2")
    lista2.push(datolista2)
    datos2.append(" "+datolista2)
    ordenar()
}
