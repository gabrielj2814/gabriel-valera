function mostrarMenu(){
    let $sectionMenu=document.querySelector(".section-menu")
    $sectionMenu.classList.toggle("ocultar-section-menu")
    // if($sectionMenu.classList.contains("ocultar-section-menu")){
    //     console.log("quitar pointer-events")
        
    // }
    // else{
    //     console.log("agregar pointer-events")
    // }
}

window.onload = () =>{
    let $conenedorLoaded=document.querySelector(".conenedor-loaded")
    let segundos = 3
    setTimeout(() => {
        $conenedorLoaded.classList.add("ocultar-loader")
    },segundos * 1000)
}