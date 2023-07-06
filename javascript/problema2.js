var menores=0
var mayores=0
var a_mayor=0
var elmenor=0
var elmayor=0
var lista=[]

function calcularEdades(){
    var entrada=0
    
    var celda_menores=document.getElementById("menores")
    var celda_mayores=document.getElementById("mayores")
    var celda_a_mayores=document.getElementById("a_mayor")
    var menor=document.getElementById("menor")
    var mayor=document.getElementById("mayor")
    var promedio=document.getElementById("promedio")
    var edades=document.getElementById("edades")

    try {
        entrada=parseInt(document.getElementById("entrada").value)
    } catch (error) {
        alert("el dato que intenta ingresar no se reconoce")
    }
    if (entrada>0 && entrada<=120){
        edades.append(entrada+" ")
        lista.push(entrada)
        if(entrada<18){
            menores++
            celda_menores.innerHTML=menores
        }
        else
        if(entrada>=18 && entrada<60){
            mayores++
            celda_mayores.innerHTML=mayores
        }
        else
        if(entrada>=60){
            a_mayor++
            celda_a_mayores.innerHTML=a_mayor
        }
        
    }else {alert("el numero no es valido")}
    if(lista.length==1 && entrada>0 && entrada<=120){
        elmenor=entrada
        elmayor=entrada
        menor.innerHTML=elmenor
        mayor.innerHTML=elmayor

    }
    else
    if(lista.length>0 && entrada>0 && entrada<=120){
        var elpromedio=0
        if(entrada<elmenor){
            elmenor=entrada
            menor.innerHTML=elmenor
        }
        else
        if(entrada>elmayor){
            elmayor=entrada
            mayor.innerHTML=elmayor
        }
        lista.forEach(element => {
            elpromedio+=element
        });
        elpromedio=elpromedio/lista.length
        promedio.innerHTML=parseInt(elpromedio)
        
    }

}