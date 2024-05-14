// Light / Dark Switch
var suiche = document.querySelector(".switch");
const menuButton = document.getElementById('menuButton');

suiche.addEventListener("click", function () {
    // Alternar la clase "dark-mode" en el body
    document.body.classList.toggle("dark-mode");
});

// Menu Lateral
var abrirMenu = document.querySelector(".abrir-menu-lateral");
var cerrarMenu = document.querySelector(".cerrar-menu-lateral");
var menu = document.querySelector(".navigation");

abrirMenu.addEventListener("click", AbrirOCerrarMenu);
cerrarMenu.addEventListener("click", AbrirOCerrarMenu);

function AbrirOCerrarMenu() {
    menu.classList.toggle("open");
}