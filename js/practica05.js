//forma válida de accerder a los elementos del DOM por el id pero es más lento
const customRange3 = document.querySelector('#customRange3')
const visitas = document.querySelector('#visitas')
const precio = document.querySelector('#precio')
//forma válida de accerder a los elementos del DOM por el id pero es más rápido
/*
const customRange3 = document.querySelector('#customRange3')
const visitas = document.querySelector('#visitas')
const precio = document.querySelector('#precio')
*/

/**
La propiedad style.visibility, cuando se establece en hidden, oculta el elemento de destino, pero no lo elimina del flujo. Entonces, el elemento de destino se representa pero no es visible. No afecta la distribución y permite que otros elementos ocupen su espacio natural. Podemos hacer que el elemento de destino sea visible nuevamente estableciendo la propiedad de nuevo en visible.

document.getElementById(id).style.visibility = "visible"; // show
document.getElementById(id).style.visibility = "hidden"; // hide


La propiedad style.display, cuando se establece en none, elimina el elemento de destino del flujo normal de la página y permite que el resto de los elementos ocupen su espacio. Aunque el elemento de destino no está visible en la página, aún podemos interactuar con él a través de DOM. Todos los descendientes se ven afectados y no se muestran como el elemento padre. Podemos hacer que el elemento de destino sea visible nuevamente estableciendo la propiedad en block. Es aconsejable establecer display como '' porque block añade un margen a un elemento.


document.getElementById(id).style.display = 'none'; // hide
document.getElementById(id).style.display = ''; // show
 */

const arrayVisitas = ["10K", "50K", "100K", "500K", "1M"]

const li5 = document.getElementById('li5')
const li4 = document.getElementById('li4')
const li3 = document.getElementById('li3')
const li2 = document.getElementById('li2')
const li1 = document.getElementById('li1')

 li5.style.display ="none"
 li4.style.display ="none"
 li3.style.display =""
 li2.style.display =""
 li1.style.display =""

customRange3.addEventListener('input', () => {
    precio.textContent = customRange3.value
    visitas.textContent =  arrayVisitas[(customRange3.value / 8 - 1)]
   
    // console.log(visitas.textContent)
    // console.log(arrayVisitas.indexOf(visitas.textContent))
    let i = arrayVisitas.indexOf(visitas.textContent)
  
    if (i<=2){ 
        li2.style.display =""
        li1.style.display =""
        li3.style.display =""
        li4.style.display ="none"
        li5.style.display ="none"    
    }  
    if (i<=1){
        li2.style.display =""
        li1.style.display =""
        li3.style.display ="none"
        li4.style.display ="none"
        li5.style.display ="none"   
    }
    if (i<=0){
        li1.style.display =""
        li2.style.display ="none"        
        li3.style.display ="none"
        li4.style.display ="none"
        li5.style.display ="none"   
    }
    if (i>=3){
        li2.style.display =""
        li1.style.display =""
        li3.style.display =""
        li4.style.display =""
        li5.style.display ="none"   
    }
    if (i>=4){
        li2.style.display =""
        li1.style.display =""
        li3.style.display =""
        li4.style.display =""
        li5.style.display =""   
    }
     
})