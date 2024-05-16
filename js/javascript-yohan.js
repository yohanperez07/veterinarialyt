
function nom(dato) {
       //dato.inner para leer la informacion del nombre
  var nombre = dato.innerHTML;
//   hacer que le pida al usuario cambiar su nombre
  var nuevoNombre = prompt("Escriba su nuevo nombre");

  if (nuevoNombre != nombre) {
  //  si el nuevo nombre que escriba es diferente al nombre actual cambie nombre
    dato.innerHTML = nuevoNombre;
  }
}


function toggleMenu() {
    var menu = document.getElementById("menus");
    menu.classList.toggle("active");
    // alert("hoa")
}







