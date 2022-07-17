
emailjs.init('H_adneqALP6IVqrj7');

function enviarCorreo(event){
    let miliSegundos=1000
    let segundos=1
    let totalDuracion=segundos*miliSegundos
    event.preventDefault();
    let $contenedorLoaderSpinner=document.getElementById("contenedorLoaderSpinner")
    let $botonEnviar=document.getElementById("botonEnviar")
    $botonEnviar.value = 'Enviando...';
    $contenedorLoaderSpinner.classList.remove("ocultar-modal-loader")


    const serviceID = 'service_05sg73m';
    const templateID = 'template_dfa1htu';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        $botonEnviar.value = 'Correo Enviado';
        setTimeout(() => {
            $contenedorLoaderSpinner.classList.add("ocultar-modal-loader")
        },totalDuracion)
    }, (err) => {
        $botonEnviar.value = 'Correo no enviado';
        alert(JSON.stringify(err));
    });
}

let $formularioDeContacto=document.getElementById("formularioContacto")
$formularioDeContacto.addEventListener("submit",enviarCorreo)
