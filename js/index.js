
let iconMenuMovil=document.getElementById("iconMenuMovil")
let $botonUp=document.getElementById("botonUp")

let trackingScroll= false

let posicionesScrollY ={
    // secciones del sistio web
    seccionInicio: 0,
    seccionSobreMi: 659,
    seccionQueHago: 1192,
    seccionResume: 1835,
    seccionPorfolio: 3458,
    seccionContacto: 4305,
    // 
    mostrarBotonIrArriba: 684
}

function isMobile(){
    if((navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/i))){
        let $puntero=document.getElementById("puntero")
        $puntero.style.opacity="1"
        $puntero.classList.add("ocultar-puntero")
        console.log("abierto desde un movil")
    }
    else{
        console.log("abierto desde una pc")
    }
}

function mostrarMenu(){
    // alert("hola")
    let $contendorItemsMenuMovil=document.querySelector(".contendor-items-menu-movil")
    $contendorItemsMenuMovil.classList.toggle("mostrar-contendor-items-menu-movil")
}

function irAlTopeDelaPagina(){
    // console.log("ir al tope de la pagina")
    window.scroll({top: 0,behavior: 'smooth'});
}

function activarEnlaceMenuDesktop(scroll_posicion){
    let $barritaItemMenu=document.querySelector(".transition-barrita-item-menu")
    if($barritaItemMenu!==null){
        $barritaItemMenu.classList.remove("transition-barrita-item-menu")
    }
    if(scroll_posicion>=posicionesScrollY.seccionInicio && scroll_posicion<=posicionesScrollY.seccionSobreMi){
        let $barrita =obtenerElementoHtmlDeUnElementoSeleccionado("enlaceDesktopInicio","barrita-item-menu")
        $barrita.classList.add("transition-barrita-item-menu")
    }
    if(scroll_posicion>=posicionesScrollY.seccionSobreMi && scroll_posicion<=posicionesScrollY.seccionQueHago){
        let $barrita =obtenerElementoHtmlDeUnElementoSeleccionado("enlaceDesktopSobreMi","barrita-item-menu")
        $barrita.classList.add("transition-barrita-item-menu")
    }
    if(scroll_posicion>=posicionesScrollY.seccionQueHago && scroll_posicion<=posicionesScrollY.seccionResume){
        let $barrita =obtenerElementoHtmlDeUnElementoSeleccionado("enlaceDesktopQueHago","barrita-item-menu")
        $barrita.classList.add("transition-barrita-item-menu")
    }
    if(scroll_posicion>=posicionesScrollY.seccionResume && scroll_posicion<=posicionesScrollY.seccionPorfolio){
        let $barrita =obtenerElementoHtmlDeUnElementoSeleccionado("enlaceDesktopResume","barrita-item-menu")
        $barrita.classList.add("transition-barrita-item-menu")
    }
    if(scroll_posicion>=posicionesScrollY.seccionPorfolio && scroll_posicion<=posicionesScrollY.seccionContacto){
        let $barrita =obtenerElementoHtmlDeUnElementoSeleccionado("enlaceDesktopPorfolio","barrita-item-menu")
        $barrita.classList.add("transition-barrita-item-menu")
    }
    if(scroll_posicion>=posicionesScrollY.seccionContacto){
        let $barrita =obtenerElementoHtmlDeUnElementoSeleccionado("enlaceDesktopContacto","barrita-item-menu")
        $barrita.classList.add("transition-barrita-item-menu")
    }
}

function obtenerElementoHtmlDeUnElementoSeleccionado(id,clase){
    let $enlaceSeccionMenuDesktop=document.getElementById(id)
    let arrayHtml=Object.entries($enlaceSeccionMenuDesktop.children).map(datos => datos[1])
    let barrita = arrayHtml.find(htmlElement => {
        if(htmlElement.classList.contains(clase)){
            return htmlElement
        }
    })
    return barrita
}

function activarBotonUp(scroll_posicion){
    if(scroll_posicion>=posicionesScrollY.mostrarBotonIrArriba){
        console.log("mostrar boton ir arriba")
        let $botonUp=document.querySelector(".boton-up")
        if($botonUp.classList.contains("ocultar-boton-up")){
            $botonUp.classList.remove("ocultar-boton-up")
        }
    }
    else{
        let $botonUp=document.querySelector(".boton-up")
        if(!$botonUp.classList.contains("ocultar-boton-up")){
            $botonUp.classList.add("ocultar-boton-up")
        }
    }
}

function trackingScrollY(e){
    /*
    * este metodo lo que hace es trackiar el scrollY del navegador y 
    * dependiendo en donde se encuentre el usuario scroleadon hara algo
    */
    let posicion = window.scrollY;
    if(!trackingScroll){
        // * 
        window.requestAnimationFrame(function () {
            activarBotonUp(posicion)
            activarEnlaceMenuDesktop(posicion)
            trackingScroll= false
        })
    }
    trackingScroll=true
}


function quitarLoaderPage(){
    let $contenedorLoader=document.getElementById("contenedorLoader")
    $contenedorLoader.classList.add("ocultar-contenedor-loader")
    // setTimeout(() => {
    //     let $contenedorLoader=document.getElementById("contenedorLoader")
    //     $contenedorLoader.classList.add("ocultar-contenedor-loader")
    // },5000)
}

// --------------

document.addEventListener("mousemove", e => {
    let mouseX, mouseY = 0
    mouseX= e.pageX - 40
    mouseY= e.pageY - 25
    let $puntero=document.getElementById("puntero")
    $puntero.style=`transform: translate3d(${mouseX}px, ${mouseY}px, 0)`
})

// -------- agregar enventos
document.addEventListener("DOMContentLoaded",quitarLoaderPage)

document.addEventListener("scroll",trackingScrollY)

iconMenuMovil.addEventListener("click",mostrarMenu) 

isMobile()