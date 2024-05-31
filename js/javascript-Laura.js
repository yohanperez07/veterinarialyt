
// HECHO POR LAURA

function guardar (){
    let user = document.getElementById("usuario").value;
    let pass= document.getElementById("contraseña").value;


if(user=="admin" && pass=="1212"){
    window.location="a_administrador.html";
    // alert("Usuario y contraseña introducido correctamnete")
} else {
    if(user=="laura" && pass=="1212"){
        window.location="inicio.html";
        // alert("Usuario y contraseña introducido correctamnete")
    } else {
        alert("Ingresar tus datos correctos")
    }
}



}
// Trabajado por yohan
function toggleMenu() {
    var menu = document.getElementById("menus");
    menu.classList.toggle("active");
    // alert("hoa")
}
