// CODIGO DE EL HEADER

const logo = document.getElementById("logo");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const menu = document.querySelector(".menu")
const main = document.querySelector("main");

menu.addEventListener("click", ()=> {
    barraLateral.classList.toggle("max-barra-lateral");
//  Esto es para que si la pantalla tiene un tamaño de 320 aparezca siempre en mini menu
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
})


// Para minimizar la barra lateral al darle click
logo.addEventListener('click', () => {
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    // para cuando la barra este minimizada el texto se acomode 
    spans.forEach((span) => {
        span.classList.toggle("oculto");
    })
});


// Crear funcion para cuando de click en el boton lo lleve a la pagina correspondiente 
function agendarCita () {
    window.location.href = "u_agendarCita.html";
}

function irAPerfil() {
    window.location.href = "u.perfil.html";
}

// CODIGO DE EL HEADER TERMINADO







// Cambiar la foto de perfil en el header y en el modal
const uploadPic = document.getElementById('upload-pic'); // Input para subir la foto
const headerProfilePic = document.querySelector('.usuario img'); // Imagen de perfil en el header
const modalProfilePic = document.getElementById('profile-pic'); // Imagen de perfil en el modal

uploadPic.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            headerProfilePic.src = reader.result; // Cambiar la imagen de perfil en el header
            modalProfilePic.src = reader.result; // Cambiar la imagen de perfil en el modal
        }
        reader.readAsDataURL(file); // Leer el archivo seleccionado como URL base64
    }
});






// Función para abrir el modal
function abrirModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block'; // Mostrar el modal
    document.body.style.overflow = 'hidden'; // Evitar scroll en el body detrás del modal
}





// Función para cerrar el modal
function cerrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none'; // Ocultar el modal
    document.body.style.overflow = ''; // Restaurar scroll en el body
}






// Función para cerrar sesión
const cerrarSesionBtn = document.getElementById('cerrar-sesion');
cerrarSesionBtn.addEventListener('click', function() {
    const confirmacion = confirm('¿Estás seguro de que deseas cerrar sesión?');

    if (confirmacion) {
        alert('Has cerrado sesión correctamente.');
        window.location.href = 'index.html'; // Redirigir a la página de inicio de sesión
    }
});
