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


