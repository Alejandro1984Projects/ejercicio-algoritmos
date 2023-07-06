function perimetro_triangulo(){
    var a=parseFloat(document.getElementById("a_t").value)
    var b=parseFloat(document.getElementById("b_t").value)
    var c=parseFloat(document.getElementById("c_t").value)
    var perimetro_t=document.getElementById("perimetro_t")
    var perimetro=a+b+c
    perimetro_t.innerHTML=perimetro
    }
function area_triangulo(){
    var a=parseFloat(document.getElementById("a_t").value)
    var b=parseFloat(document.getElementById("b_t").value)
    var c=parseFloat(document.getElementById("c_t").value)
    var h=parseFloat(document.getElementById("h_t").value)
    var area_t=document.getElementById("area_t")
    var area=(b*h)/2
    area_t.innerHTML=area
    }
function perimetro_rectangulo(){
    var a=parseFloat(document.getElementById("a_r").value)
    var b=parseFloat(document.getElementById("b_r").value)
    var perimetro_r=document.getElementById("perimetro_r")
    var perimetro=2*(a+b)
    perimetro_r.innerHTML=perimetro
    }
function area_rectangulo(){
    var a=parseFloat(document.getElementById("a_r").value)
    var b=parseFloat(document.getElementById("b_r").value)
    var area_r=document.getElementById("area_r")
    var area=b*a
    area_r.innerHTML=area
    }
function perimetro_cuadrado(){
    var a=parseFloat(document.getElementById("a_c").value)
    var perimetro_c=document.getElementById("perimetro_cua")
    var perimetro=4*a
    perimetro_c.innerHTML=perimetro
    }
function area_cuadrado(){
    var a=parseFloat(document.getElementById("a_c").value)
    var area_c=document.getElementById("area_cua")
    var area=a**2
    area_c.innerHTML=area
    }
function perimetro_circulo(){
    var r=parseFloat(document.getElementById("r_c").value)
    var perimetro_c=document.getElementById("perimetro_cir")
    var perimetro=2*Math.PI*r**2
    perimetro_c.innerHTML=perimetro
    }
function area_circulo(){
    var r=parseFloat(document.getElementById("r_c").value)
    var area_c=document.getElementById("area_cir")
    var area=Math.PI*r**2
    area_c.innerHTML=area
    }