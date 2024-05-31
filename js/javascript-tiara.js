// Hecho por Tiara

// pagina registro usuario

document.getElementById("botonEnviar")
    // primero utilice el getElementById para identificar el boton (botonEnviar)
    .addEventListener // luego uso el EventListener  para que se active cuando hago click en el boton(est definiendo el perentesis), 
    ("click", function (event) { // La función que se ejecuta cuando se produce el clic se define dentro del paréntesis que sigue al evento 
        // "click". La función recibe un parámetro event que representa el evento de clic.
        if (!document.getElementById("terminos").checked) {  // esto lo que haces es que covierte en true(verdadero) si es que los 
            // terminos y condiciones no estan seleccionado y entonces imprime la alert
            alert("Por favor acepta los términos y condiciones antes de continuar.");
            event.preventDefault(); //  evita que se produzca el comportamiento predeterminado del evento de clic 
            //   que en este caso seria enviar el formulario de reistro
        }
    });


