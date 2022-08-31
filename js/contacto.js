
emailjs.init('H_adneqALP6IVqrj7');

function enviarCorreo(event){
    let $mensajeOk=document.getElementById("mensajeOk")
    let $mensajeError=document.getElementById("mensajeError")
    let $contenedorLoaderFormularioContacto=document.getElementById("contenedorLoaderFormularioContacto")
    event.preventDefault();
    $contenedorLoaderFormularioContacto.classList.remove("ocultar-contenedor-loader-formulario-contacto")
    $mensajeOk.classList.add("ocultar-texto")
    $mensajeError.classList.add("ocultar-texto")
    const serviceID = 'default_service';
    const templateID = 'template_lhwwbar';
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        // alert('Sent!');
        $mensajeOk.classList.remove("ocultar-texto")
        setTimeout(() => {
                    $contenedorLoaderFormularioContacto.classList.add("ocultar-contenedor-loader-formulario-contacto")
        },5000)
    }, (err) => {
        console.log(JSON.stringify(err));
        $mensajeError.classList.remove("ocultar-texto")
        setTimeout(() => {
                    $contenedorLoaderFormularioContacto.classList.add("ocultar-contenedor-loader-formulario-contacto")
        },5000)
    });
}

let $formularioDeContacto=document.getElementById("formularioCorreo")
$formularioDeContacto.addEventListener("submit",enviarCorreo)
