class personas{
    nombre=""
    cedula=""
    nacimiento=""
    correo="" 
    residencia=""
    origen=""
    cancion1=""
    cancion2=""
    cancion3=""
    constructor(nombre,cedula,nacimiento,correo,
        residencia,origen,cancion1,cancion2,cancion3){
            this.nombre=nombre
            this.cedula=cedula
            this.nacimiento=nacimiento
            this.correo=correo 
            this.residencia=residencia
            this.origen=origen
            this.cancion1=cancion1
            this.cancion2=cancion2
            this.cancion3=cancion3
    }


}
var lista_personas=[]
var tabla
function mostrar(element){
    let fila=document.createElement("tr")
    let celda_i=document.createElement("th")
    let celda1=document.createElement("td")
    let celda2=document.createElement("td")
    let celda3=document.createElement("td")
    let celda4=document.createElement("td")
    let celda5=document.createElement("td")
    let celda6=document.createElement("td")
    let celda7=document.createElement("td")
    let celda8=document.createElement("td")
    let celda9=document.createElement("td")

    celda_i.innerHTML=lista_personas.indexOf(element)+1 
    celda1.innerHTML=element.nombre
    celda2.innerHTML=element.cedula
    celda3.innerHTML=element.nacimiento
    celda4.innerHTML=element.correo
    celda5.innerHTML=element.residencia
    celda6.innerHTML=element.origen
    celda7.innerHTML=element.cancion1
    celda8.innerHTML=element.cancion2
    celda9.innerHTML=element.cancion3
    
    fila.appendChild(celda_i)
    fila.appendChild(celda1)
    fila.appendChild(celda2)
    fila.appendChild(celda3)
    fila.appendChild(celda4)
    fila.appendChild(celda5)
    fila.appendChild(celda6)
    fila.appendChild(celda7)
    fila.appendChild(celda8)
    fila.appendChild(celda9)

    tabla.appendChild(fila)
}

function agregarPersona(){
    var no=document.getElementById("nombre").value
    var ce=document.getElementById("cedula").value
    var na=document.getElementById("nacimiento").value
    var co=document.getElementById("correo").value
    var r=document.getElementById("residencia").value
    var o=document.getElementById("origen").value
    var c1=document.getElementById("cancion1").value
    var c2=document.getElementById("cancion2").value
    var c3=document.getElementById("cancion3").value
    lista_personas.push(new personas(no,ce,na,co,r,o,c1,c2,c3))
    mostrar(lista_personas[lista_personas.length-1])   
}
function comenzar(){
    tabla=document.querySelector("#tabla")
    
    lista_personas.push(new personas("ana","1","1/2/2003","1@gmail.com","bogota","bogota","creep, radiohead","entre canibales, soda stereo","Uprising, muse"))    
    lista_personas.push(new personas("juan","2","2/2/2001","2@gmail.com","bogota","bogota","No Surprises, radiohead","De música ligera, soda stereo","Starlight, muse"))
    lista_personas.push(new personas("eva","3","3/2/2001","3@gmail.com","cali","cali","Paranoid Android, radiohead","En la ciudad de la furia, soda stereo","Hysteria, muse"))
    lista_personas.push(new personas("pedro","4","1/2/2004","4@gmail.com","cali","cali","high and dry, radiohead","signos, soda stereo","Time is Running Out, muse"))
    lista_personas.push(new personas("leidy","5","4/2/2001","5@gmail.com","Medellin","Medellin","karma police, radiohead","tratame suavemente, soda stereo","Plug in Baby, muse"))
    lista_personas.push(new personas("karen","6","2/3/2004","6@gmail.com","Medellin","medellin","man of war, radiohead","nada personal, soda stereo","Madness, muse"))
       
    lista_personas.forEach(element => {
   
        mostrar(element)
});
}
window.addEventListener("load", comenzar,false);

